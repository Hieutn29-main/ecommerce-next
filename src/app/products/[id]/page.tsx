import ProductsDetail from "@/app/products/[id]/components/product-details";
import LayoutGeneral from "@/components/layout-general";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "products detail page ecormmerce dummy json",
  description: "products detail page ecormmerce dummy json code by hieutn",
  openGraph: {
    title: "products detail page ecormmerce dummy json",
    description: "products detail page ecormmerce dummy json code by hieutn",
    url: "https://ecommerce-next-five-umber.vercel.app/",
    siteName: "Demo dummy json",
    images: [
      {
        url: "https://blog.lipsumhub.com/wp-content/uploads/2024/12/how-to-create-dummy-data-in-json-lipsumhub.jpg",
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
      <div
        style={{
          background: "#EFEEEA",
          paddingTop: "20px",
        }}
      >
        <ProductsDetail />
      </div>
    </LayoutGeneral>
  );
};

export default page;
