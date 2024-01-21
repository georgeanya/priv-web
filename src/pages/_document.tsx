import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N835SQ1X9J"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(\'js\', new Date());
          gtag(\'config\', \'G-N835SQ1X9J\');`}
        </script> */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11147200607"
        ></script>
        <script id="ga-script" type="text/javascript">
          {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(\'js\', new Date());
          gtag(\'config\', \'AW-11147200607\');`}
        </script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '348874631254320');
            fbq('track', 'PageView');`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3453562,hjsv:6};
              a=o.getElementsByTagName(\'head\')[0];
              r=o.createElement(\'script\');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,\'https://static.hotjar.com/c/hotjar-\',\'.js?sv=\');`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQJTNRC');`,
          }}
        />
        {/* <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQJTNRC');`}
        </Script> */}
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQJTNRC" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=348874631254320&ev=PageView&noscript=1"
            />`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
