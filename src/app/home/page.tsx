import Section1 from "@/app/home/section-1";
import Section2 from "@/app/home/section-2";
import Section3 from "@/app/home/section-3";
import Section4 from "@/app/home/section-4";
import Section5 from "@/app/home/section-5";
import LayoutGeneral from "@/components/layout-general";
import React from "react";

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
