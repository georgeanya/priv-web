import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import BlogComponent from "../../components/blog";
import { GetServerSideProps } from "next";
import axios from "axios";

// Interfaces (you can move these to a types file if needed)
interface BlogAttributes {
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
        team: string;
        name: string;
      };
    };
  };
  image: {
    data: {
      attributes: {
        url: string;
        name: string;
      };
    };
  };
}

interface Blog {
  id: number;
  attributes: BlogAttributes;
}

interface BlogResponse {
  data: Blog[];
}

interface BlogHomeProps {
  initialBlogs: BlogResponse;
  initialPage: number;
}

const BlogHome = ({ initialBlogs, initialPage }: BlogHomeProps) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Priv Health Blog</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs, blog, priv health blog"
        />
        <meta
          name="description"
          content="Find insightful tips and discover effective solutions for common men's health concerns"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_NG" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/blog" property="og:url" />
        <meta content="Priv Health Blog" property="og:title" />
        <meta
          content="Find insightful tips and discover effective solutions for common men's health concerns"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
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
        <meta name="twitter:title" content="Priv Health Blog" />
        <meta
          name="twitter:description"
          content="Find insightful tips and discover effective solutions for common men's health concerns"
        />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv Health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/blog" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,
      shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
      </Head>
      <Navbar />
      <BlogComponent initialBlogs={initialBlogs} initialPage={initialPage} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const page = 1;
    const pageSize = 15;
    const timestamp = new Date().getTime();
    
    const response = await axios.get<BlogResponse>(
      `https://priv-health-blog.herokuapp.com/api/articles?populate[0]=category&populate[1]=author&populate[2]=image&sort=createdAt:desc&_=${timestamp}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );

    return {
      props: {
        initialBlogs: response.data,
        initialPage: page,
      },
    };
  } catch (error) {
    console.error("Error fetching data in getServerSideProps:", error);
    
    // Return empty data structure to prevent page from breaking
    return {
      props: {
        initialBlogs: { data: [] },
        initialPage: 1,
      },
    };
  }
};

export default BlogHome;