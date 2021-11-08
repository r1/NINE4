import Head from "next/head";
import Header from "@/components/Header";
import TemplateMain from "@/components/Main";
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
          title="nine4 - Free templates built with Next.js and styled with Tailwind CSS"
          description="nine4 is a free to use template website with free templates for professional and personal use."
          content="nine4, nine4 templates, free templates, tailwind templates, tailwind css templates, website templates, tailwind website templates, nextjs templates"
        />
        <Header />
        <TemplateMain />
      </body>
    </LayoutGA>
  );
}
