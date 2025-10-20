import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/howPrivWorks";
import Section5 from "../../components/expertSection";
import Faq from "../../components/faq";
import Ed from "../../components/stdFacts";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import Hero from "../../components/stdHero";
import EdShop from "../../components/stdShop";
import Section6 from "../../components/testiomonials";
import Section3 from "../../components/valueProposition";
import AutoScrollComponent from "../../components/autoScroll";

const EdPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>STIs/STDs treatment - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
          property="og:image:alt"
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
        <link href="https://privhealth.co/" rel="home" />
        <link href="/humans.txt" rel="author" type="text/plain" />
        <link
          href="https://privhealth.co/"
          hrefLang="x-default"
          rel="alternate"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
        <meta
          name="facebook-domain-verification"
          content="ydhokuda2jbyn329ymapza2hdhbumm"
        />
        <meta
          name="description"
          content="Get treatment for STIs/STDs privately and from the comfort of your home."
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="https://privhealth.co/stis" property="og:url" />
        <meta content="STIs/STDs treatment - Priv Health" property="og:title" />
        <meta
          content="Get treatment for STIs/STDs privately and from the comfort of your home."
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="STIs/STDs treatment - Priv Health"
        />
        <meta
          name="twitter:description"
          content="Get treatment for STIs/STDs privately and from the comfort of your home."
        />
        <link href="https://privhealth.co/stis" rel="canonical" />
      </Head>
      <Navbar />
      <Hero />
      <AutoScrollComponent />
      <Ed />
      <EdShop />
      <Section4 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Faq />
      <Footer />
    </div>
  );
};

export default EdPage;
