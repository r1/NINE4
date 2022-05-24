import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NINE4 - Free Tailwind Templates</title>
        <meta name="description" content="Free to use Tailwind CSS templates for you to use." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}
