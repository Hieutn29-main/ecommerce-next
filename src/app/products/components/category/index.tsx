"use client";

import { serverToGetAllCategories } from "@/api-requests/products/categories";
import { CategoryWrapper } from "@/app/products/components/category/styled";
import ButtonSlipperySnake30 from "@/components/button-slippery-snake-30";
import Loader from "@/components/loaders";
import { useMutation } from "@tanstack/react-query";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";

const CategoryProducts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [category, setCategory] = useState<string>("");
  const mutationCategory = useMutation({
    mutationFn: serverToGetAllCategories,
    mutationKey: ["getAllCategories"],
  });

  const handleChangeCategory = (slug: string) => {
    setCategory(slug);
  };

  useEffect(() => {
    mutationCategory.mutate();
  }, []);
  useEffect(() => {
    setIsMounted(true);
  });
  useEffect(() => {
    console.log(category);
  }, [category]);

  if (!isMounted) return null;
  return (
    <CategoryWrapper>
      <Loader isPending={mutationCategory.isPending} />
      <h2 className="title "> Category Products</h2>
      <div className="button-container">
        {mutationCategory?.data?.data?.map((cate: any) => (
          <ButtonSlipperySnake30
            handleChangeCategory={handleChangeCategory}
            title={cate.name}
            slug={cate.slug}
          />
        ))}
        {mutationCategory.isPending && <Skeleton paragraph={{ rows: 1 }} />}
      </div>
      {!category && <p>hay chon 1 categopry</p>}
    </CategoryWrapper>
  );
};

export default CategoryProducts;
