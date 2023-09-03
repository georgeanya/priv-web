import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import favicon from "../../../public/assets/favicon.png";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import BlogPost from "../../../components/blogPost";

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
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
    seo: {
      metaTitle: string;
    };
  };
}

interface ArticlesResponse {
  data: Blog[];
}

const BlogPage = ({ blog }: any) => {
  const ImgUrl = blog.attributes.image.data.attributes.url;
  const url = `https://privhealth.co/blog/${blog.attributes.slug}`;
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{`${blog.attributes.seo.metaTitle} - Priv Health`}</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta name="keywords" content={blog.attributes.seo.keywords} />
        <meta
          name="description"
          content={blog.attributes.seo.metaDescription}
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="article" property="og:type" />
        <meta content={url} property="og:url" />
        <meta
          content={`${blog.attributes.seo.metaTitle} - Priv Health`}
          property="og:title"
        />
        <meta
          content={blog.attributes.seo.metaDescription}
          property="og:description"
        />
        <meta content={blog.attributes.seo.shareImage.data.attributes.formats.small.url} property="og:image" />
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
        <meta
          name="twitter:title"
          content={`${blog.attributes.seo.metaTitle} - Priv Health`}
        />
        <meta
          name="twitter:description"
          content={blog.attributes.seo.metaDescription}
        />
        <meta
          name="twitter:image"
          content={blog.attributes.seo.metaTwitterImage.data.attributes.formats.small.url}
        />
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  { blog: Blog },
  Params
> = async ({ params }) => {
  const { slug } = params as Params;
  const { data } = await axios.get<ArticlesResponse>(
    `https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&populate[3]=seo.metaTwitterImage&populate[4]=seo.shareImage&${slug}`
  );
  const blog = data.data.find((blog) => blog.attributes.slug === slug);
  return {
    props: {
      blog: blog || ({} as Blog),
    },
  };
};

export default BlogPage;
