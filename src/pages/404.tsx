import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import favicon from "../../public/assets/favicon.png";
import metaCard from "../../public/assets/priv-metacard.png";
import Head from "next/head";
import CustomButton from "../../components/mainButton";



const ErrorPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>404 - Priv Health</title>
        <meta name="generator" content="SEOmatic" />
        <link href={favicon.src} rel="shortcut icon" type="image/png" />
        <meta
          name="keywords"
          content="erectile dysfunction, premature ejaculation, hair loss, low testosterone, STIs"
        />
        <meta name="description" content="Priv Health's 404" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="robots" content="all" />
        <meta content="107593817569600" property="fb:profile_id" />
        <meta content="en_US" property="og:locale" />
        <meta content="website" property="og:type" />
        <meta content="https://privhealth.co/404" property="og:url" />
        <meta content="404 - Priv Health" property="og:title" />
        <meta content="Priv Health's 404" property="og:description" />
        <meta content={metaCard.src} property="og:image" />
        <meta content="785" property="og:image:width" />
        <meta content="394" property="og:image:height" />
        <meta
          content="An image of the Priv health logo"
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
        <meta name="twitter:title" content="404 - Priv Health" />
        <meta name="twitter:description" content="Priv Health's 404" />
        <meta
          name="twitter:image:src"
          content="https://privhealth.co/_next/static/media/priv-metacard.bfa5bd2e.png"
        />
        <meta name="twitter:image:width" content="738" />
        <meta name="twitter:image:height" content="394" />
        <meta
          name="twitter:image:alt"
          content="An image of the Priv health logo"
        />
        <link rel="me" href="https://twitter.com/tryprivhealth" />
        <link href="https://privhealth.co/404" rel="canonical" />
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
      <div className="px-5 md:px-32 md:max-w-3xl pt-12 md:pt-32 pb-24 md:pb-36">
        <p className="text-[34px] leading-[43px] md:text-start md:text-5xl font-bold text-[#5355AC]">
          Whoops... This page is not available
        </p>
        <p className="mt-5 md:mt-6 text-base md:text-start md:text-[20px] md:leading-[30px] text-[#111111]">
          Unfortunaltely, we couldn&apos;t find the page you are looking for. We
          suggest you go back to our homepage
        </p>
        <div className="mt-8 md:mt-14 ">
          <CustomButton title="Go back home" href="/"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
