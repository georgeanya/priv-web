import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Section4 from "../../components/section2";
import Section5 from "../../components/section5";
import Faq from "../../components/faq";
import Head from "next/head";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import Section6 from "../../components/section6";
import Section3 from "../../components/section3";
import Hero from "../../components/dc-hero";
import AutoScrollComponent from "../../components/auto-scroll";

const HairLossPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Talk to a men's health doctor online - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="online doctor consultation, telehealth appointment, virtual doctor visit, book doctor online, online medical consultation, telemedicine consultation, talk to doctor online, schedule doctor appointment, men's health consultation, online doctor visit, virtual healthcare, telehealth service, remote doctor consultation, online physician consultation, digital health consultation, medical consultation online"
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
          content="Book a private online consultation with licensed men&apos;s health doctors. Get personalized men's health treatment from home. Schedule your Priv telehealth visit today"
        />
        <meta content="598084287257839" property="fb:profile_id" />
        <meta content="https://privhealth.co/doctor-consultation" property="og:url" />
        <meta
          content="Talk to a men's health doctor online - Priv Health"
          property="og:title"
        />
        <meta
          content="Book a private online consultation with licensed men&apos;s health doctors. Get personalized men's health treatment from home. Schedule your Priv telehealth visit today"
          property="og:description"
        />
        <meta
          content="https://instagram.com/tryprivhealth"
          property="og:see_also"
        />
        <meta
          name="twitter:title"
          content="Talk to a men's health doctor online - Priv Health"
        />
        <meta
          name="twitter:description"
          content="Book a private online consultation with licensed men&apos;s health doctors. Get personalized men's health treatment from home. Schedule your Priv telehealth visit today"
        />
        <link href="https://privhealth.co/doctor-consultation" rel="canonical" />
      </Head>
      <Navbar />
      <Hero />
      <AutoScrollComponent/>
      <Section3/>
      <Section5 />
      <Section6 />
      <Faq />
      <Footer />
    </div>
  );
};

export default HairLossPage;
