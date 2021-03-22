import Head from "next/head";
import Header from "@/components/Header";
import TemplateMain from "@/components/TemplateMain";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

export default function template() {
  return (
    <LayoutGA>
      <body className="text-white">
        <Head>
          <title>nine4.app</title>
          <meta
            name="keywords"
            content="nine4, nine4 templates, free templates, tailwind templates, website templates, nextjs templates"
          ></meta>
        </Head>
        <NextSeo
          title="nine4 - Free templates built with Next.js and styled with Tailwind CSS"
          description="nine4 is a free to use template website with free templates for professional and personal use."
        />
        <Header />
        <TemplateMain />
      </body>
    </LayoutGA>
  );
}
