import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Spinner from "../../components/spinner";
import WhatsAppButton from "../../components/whatsappbutton";
import { FormDataProvider } from "../../components/FormDataContext";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const handleStart = (url: any) => {
  //     if (url !== router.asPath) {
  //       setIsLoading(true);
  //     }
  //   };

  //   const handleComplete = () => {
  //     setIsLoading(false);
  //   };

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router]);

  return (
    <>
      <FormDataProvider>
        <Component {...pageProps} />
      </FormDataProvider>
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
