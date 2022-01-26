import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { store } from "../redux/store/index.store";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Global Meetings</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
