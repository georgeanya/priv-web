import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N835SQ1X9J"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(\'js\', new Date());
          gtag(\'config\', \'G-N835SQ1X9J\');`}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11147200607"
        ></script>
        <script  id="ga-script">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(\'js\', new Date());
          gtag(\'config\', \'AW-11147200607\');`}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
