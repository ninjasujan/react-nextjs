import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   console.log("[Component Loading...]");
  // }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
