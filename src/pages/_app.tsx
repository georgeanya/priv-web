import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N835SQ1X9J"
      ></Script>
      <Script id="ga-script">
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N835SQ1X9J');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
