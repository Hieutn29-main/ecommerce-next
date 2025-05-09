"use client";
import { serverToGetAllProducts } from "@/api-requests/products";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";
import Loader from "@/components/loaders";
import CardComponent from "@/components/card";
import { AllProductsWrapper } from "@/app/products/components/all-products/styled";
import { PaginationCustom } from "@/components/pagination-custom-ant";

const AllProducts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [pagination, setPagination] = useState({
    limit: 12,
    skip: 0,
  });

  const mutation = useMutation({
    mutationFn: serverToGetAllProducts,
    mutationKey: ["getAllProducts"],
  });

  const handleChangePage = (page: number) => {
    const newSkip = (page - 1) * pagination.limit;
    setPagination((prev) => ({ ...prev, skip: newSkip }));

    mutation.mutate({
      limit: pagination.limit,
      skip: newSkip,
    });
  };

  useEffect(() => {
    mutation.mutate({
      ...pagination,
    });
  }, []);
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  return (
    <AllProductsWrapper>
      <Loader isPending={mutation.isPending} />
      <h2 className="title">All Products</h2>
      <div className="product-container">
        {mutation?.data?.data?.products?.map((product: any) => (
          <CardComponent
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        ))}
        {mutation.isPending && <Skeleton paragraph={{ rows: 5 }} />}
      </div>
      <PaginationCustom
        defaultCurrent={1}
        total={mutation.data?.data?.total || 0}
        onChange={handleChangePage}
        pageSize={pagination.limit}
        showSizeChanger={false}
        align="center"
      />
    </AllProductsWrapper>
  );
};

export default AllProducts;
