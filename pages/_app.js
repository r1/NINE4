import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Helmet } from "react-helmet";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Helmet htmlAttributes={{ lang: "en" }} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
