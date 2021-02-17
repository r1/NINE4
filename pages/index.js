import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { NextSeo } from "next-seo";
import firebase from '@/lib/firebase';

export default function Home() {
  return (
    <body className="text-white">
      <Head>
        <title>nine4</title>
        <meta name="keywords" content="nine4, Jack Latimer, r1"></meta>
      </Head>
      <NextSeo
        title="nine4 - Home"
        description="Free Template Sites Built With Next.js & Styled With TailwindCSS"
      />
      <Header />
      <Main />
    </body>
  );
}
