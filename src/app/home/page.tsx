import Section1 from "@/app/home/section-1";
import Section2 from "@/app/home/section-2";
import Section3 from "@/app/home/section-3";
import Section4 from "@/app/home/section-4";
import Section5 from "@/app/home/section-5";
import LayoutGeneral from "@/components/layout-general";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "home page ecormmerce dummy json",
  description: "home page ecormmerce dummy json code by hieutn",
  openGraph: {
    title: "home page ecormmerce dummy json",
    description: "home page ecormmerce dummy json code by hieutn",
    url: "https://ecommerce-next-five-umber.vercel.app/",
    siteName: "Demo dummy json",
    images: [
      {
        url: "https://ecommerce-next-five-umber.vercel.app/images/bg-login.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ecommerce-next-five-umber.vercel.app/",
  },
};
const page = () => {
  return (
    <LayoutGeneral>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </LayoutGeneral>
  );
};

export default page;
