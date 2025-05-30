import React from "react";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import Ed from "../../../components/ed";
import Head from "next/head";
import favicon from "../../../public/assets/favicon.png";
import metaCard from "../../../public/assets/priv-metacard.png";
import Hero from "../../../components/ed-assessment-hero";
import EdShop from "../../../components/ed-section-1";

const EdPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz
        </title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="do i have erectile dysfunction, ED quiz, erectile dysfunction test, ED assessment, erectile dysfunction symptoms, ED self assessment, erectile dysfunction quiz, ED symptoms quiz, erectile dysfunction checker, do i have ED, erectile dysfunction evaluation, ED screening test, sexual health quiz, erectile dysfunction questionnaire"
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
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="https://privhealth.co/ed" property="og:url" />
        <meta
          content="Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz"
          property="og:title"
        />
        <meta
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Do I Have Erectile Dysfunction? Take Free ED Assessment Quiz"
        />
        <meta
          name="twitter:description"
          content="Take our erectile dysfunction quiz to assess your symptoms. Our free ED self-assessment tool helps determine if you may have erectile dysfunction and helps you know the next steps to take"
        />
        <link href="https://privhealth.co/ed" rel="canonical" />
      </Head>
      <Navbar />
      <Hero />
      <Ed />
      <EdShop />
      <Footer />
    </div>
  );
};

export default EdPage;
