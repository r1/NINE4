import Head from "next/head";
import Header from "@/components/Header";
import LicenseMain from "@/components/LicenseMain";
import { NextSeo } from "next-seo";
import LayoutGA from "@/components/LayoutGA";

export default function license() {
  return (
    <LayoutGA>
      <body className="text-white">
        <Head>
          <title>nine4.app</title>
          <meta
            name="keywords"
            content="nine4, nine4 templates, free templates, tailwind templates, website templates, nextjs templates, r1"
          ></meta>
        </Head>
        <NextSeo
          title="nine4: License"
          description="Free Template Sites Built With Next.js & Styled With TailwindCSS"
        />
        <Header />
        <LicenseMain />
      </body>
    </LayoutGA>
  );
}
