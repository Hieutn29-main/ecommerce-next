import AllProducts from "@/app/admin/products/get-all/get-products";
import LayoutPrivate from "@/components/layout-private";
import React from "react";

const page = () => {
  return (
    <LayoutPrivate>
      <AllProducts />
    </LayoutPrivate>
  );
};

export default page;
