import Head from "next/head";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

export default function Home() {
  return (
    <LayoutGA>
      <body className="text-white">
        <Head>
          <title>nine4.app</title>
          <meta name="keywords" content="nine4, Jack Latimer, r1"></meta>
        </Head>
        <NextSeo
          title="nine4"
          description="Free Template Sites Built With Next.js & Styled With TailwindCSS"
          content="nine4, nine4 templates, free templates, tailwind templates, website templates, nextjs templates, r1"
        />
        <Header />
        <Layout />
      </body>
    </LayoutGA>
  );
}
