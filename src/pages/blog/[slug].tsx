import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import favicon from "../../../public/assets/favicon.png";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "../../../components/blogPost";
import Script from 'next/script';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Blog {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    publishedAt?: string; // Optional, based on usage
    updatedAt?: string; // Optional, based on usage
    category?: {
      data?: {
        attributes?: {
          name: string;
        };
      };
    };
    author?: {
      data?: {
        attributes?: {
          name: string;
          team?: string; // Optional, based on usage
        };
      };
    };
    seo?: {
      metaTitle?: string;
      metaDescription?: string; // Optional, based on usage
      keywords?: string; // Optional, added to match usage
      shareImage?: {
        data?: {
          attributes?: {
            formats?: {
              small?: {
                url: string;
              };
            };
          };
        };
      };
      metaTwitterImage?: {
        data?: {
          attributes?: {
            formats?: {
              medium?: {
                url: string;
              };
            };
          };
        };
      };
    };
    image?: {
      data?: {
        attributes?: {
          formats?: {
            medium?: {
              url: string;
            };
            small?: {
              url: string;
            };
          };
        };
      };
    };
  };
}

interface ArticlesResponse {
  data: Blog[];
}

const BlogPage = ({ blog }: any) => {
  if (!blog) {
    return (
      <div>
        <p>Blog post not found.</p>
      </div>
    );
  }

  const url = `https://privhealth.co/blog/${blog.attributes.slug}`;
  const seoMetaTitle = blog.attributes.seo?.metaTitle || blog.attributes.title; // Fallback to title if metaTitle is not present
  const seoMetaDescription =
    blog.attributes.seo?.metaDescription || blog.attributes.description; // Fallback to description if metaDescription is not present
  const seoKeywords = blog.attributes.seo?.keywords || ""; // Using optional chaining to access keywords
  const shareImageUrl =
    blog.attributes.seo?.shareImage?.data?.attributes?.formats?.small?.url ||
    "";
  const twitterImageUrl =
    blog.attributes.seo?.metaTwitterImage?.data?.attributes?.formats?.medium
      ?.url || "";
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${seoMetaTitle} - Priv Health`}</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta name="keywords" content={seoKeywords} />
        <meta name="description" content={seoMetaDescription} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="article" property="og:type" />
        <meta content={url} property="og:url" />
        <meta content={`${seoMetaTitle} - Priv Health`} property="og:title" />
        <meta content={seoMetaDescription} property="og:description" />
        <meta
          content={shareImageUrl}
          property="og:image"
        />
        <meta content="1024" property="og:image:width" />
        <meta content="512" property="og:image:height" />
        <meta
          content="An image of the Priv Health logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://facebook.com/tryprivhealth/"
          property="og:see_also"
        />
        <meta
          content="https://twitter.com/tryprivhealth"
          property="og:see_also"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tryprivhealth" />
        <meta name="twitter:creator" content="@tryprivhealth" />
        <meta name="twitter:title" content={`${seoMetaTitle} - Priv Health`} />
        <meta name="twitter:description" content={seoMetaDescription} />
        <meta name="twitter:image" content={twitterImageUrl} />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv Health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link
          href={`https://privhealth.co/blog/${blog.attributes.slug}`}
          rel="canonical"
        />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
      </Head>
      <Navbar />
      <BlogPost blog={blog} />
      <Footer />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${url}"
            },
            "headline": "${blog.attributes.title}",
            "description": "${blog.attributes.description}",
            "image": "${
              blog.attributes.image?.data?.attributes?.formats?.medium?.url ||
              ""
            }",
            "author": {
                "@type": "Person",
                "name": "${
                  blog.attributes.author?.data?.attributes?.name || "Anonymous"
                }",
                "url": "https://privhealth.co"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Priv Health",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://privhealth.co/priv-logo.png"
                }
            },
            "datePublished": "${blog.attributes.publishedAt}",
            "dateModified": "${blog.attributes.updatedAt}"
          }`,
        }}
        />
    </div>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<
  { blog: Blog | null },
  Params
> = async ({ params }) => {
  const { slug } = params as Params;
  try {
    // Use the correct API URL to query by the blog slug
    const { data } = await axios.get<ArticlesResponse>(
      `https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&filters[slug][$eq]=${slug}`
    );
    
    const blog = data.data.length > 0 ? data.data[0] : null; // Assuming the API returns an array

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
};
