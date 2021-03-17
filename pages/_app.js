import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
