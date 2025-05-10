import AllProducts from "@/app/products/components/all-products";
import CategoryProducts from "@/app/products/components/category";
import SearchProducts from "@/app/products/components/search-products";
import LayoutGeneral from "@/components/layout-general";
import React from "react";

const page = () => {
  return (
    <LayoutGeneral>
      <div
        style={{
          background: "#EFEEEA",
        }}
      >
        <SearchProducts />
        {/* <AllProducts /> */}
        <CategoryProducts />
      </div>
    </LayoutGeneral>
  );
};

export default page;
