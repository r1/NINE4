import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { NextSeo } from "next-seo";
import Layout from "@/components/Layout"

export default function Home() {
  return (
    <Layout>
    <body className="text-white">
      <Head>
        <title>nine4</title>
        <meta name="keywords" content="nine4, Jack Latimer, r1"></meta>
      </Head>
      <NextSeo
        title="nine4"
        description="Free Template Sites Built With Next.js & Styled With TailwindCSS"
      />
      <Header />
      <Main />
    </body>
    </Layout>
  );
}
