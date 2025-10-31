import Head from "next/head";
import React from "react";
import Form from "../../../components/getRecommendation";
import Navbar3 from "../../../components/navbar1";
import favicon from "../../../public/assets/favicon.png";
import metaCard from "../../../public/assets/priv-metacard.png";

const Start = () => {
  return (
    <div>
      <Head>
        <title>Get Recommendation - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta
          name="description"
          content="Get support from a men's health doctor. Start your free online visit today! Get treatment quickly & discreetly, and have your medication delivered to your door"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="en_NG" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/sign-up" property="og:url" />
        <meta content="Get Recommendation - Priv Health" property="og:title" />
        <meta
          content="Get support from a men's health doctor. Start your free online visit today! Get treatment quickly & discreetly, and have your medication delivered to your door"
          property="og:description"
        />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
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
        <meta name="twitter:title" content="Get Recommendation - Priv Health" />
        <meta
          name="twitter:description"
          content="Get support from a men's health doctor. Start your free online visit today! Get treatment quickly & discreetly, and have your medication delivered to your door"
        />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="785" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/sign-up" rel="canonical" />
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
      </Head>
      <Navbar3 />
      <Form />
    </div>
  );
};

export default Start;
