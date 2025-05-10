"use client";
import { serverToSearchProducts } from "@/api-requests/products/search";
import { SearchProductWrapper } from "@/app/products/components/search-products/styled";
import CardComponent from "@/components/card";
import InputBitterCobra27 from "@/components/input-bitter-cobra-27";
import Loader from "@/components/loaders";
import { PaginationCustom } from "@/components/pagination-custom-ant";
import { useDebounce } from "@/hooks/useDebounce";
import { useMutation } from "@tanstack/react-query";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";

const SearchProducts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);
  const [pagination, setPagination] = useState({
    limit: 12,
    skip: 0,
  });

  const mutationSearch = useMutation({
    mutationFn: serverToSearchProducts,
    mutationKey: ["getSearchProducts"],
  });
  const handleChangePage = (page: number) => {
    const newSkip = (page - 1) * pagination.limit;
    setPagination((prev) => ({ ...prev, skip: newSkip }));
  };

  useEffect(() => {
    mutationSearch.mutate({
      ...pagination,
      q: debouncedSearchTerm,
    });
  }, [debouncedSearchTerm, pagination]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setPagination({
      limit: 12,
      skip: 0,
    });
  }, [debouncedSearchTerm]);
  console.log(mutationSearch?.data?.data?.products);
  if (!isMounted) return null;
  return (
    <SearchProductWrapper>
      <Loader isPending={mutationSearch.isPending} />
      <h2 className="title">All Products</h2>
      <InputBitterCobra27 setSearch={setSearch} search={search} />
      <div className="product-container">
        {mutationSearch?.data?.data?.products?.map((product: any) => (
          <CardComponent
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            id={product.id}
          />
        ))}
        {mutationSearch.isPending && <Skeleton paragraph={{ rows: 5 }} />}
      </div>
      <PaginationCustom
        defaultCurrent={1}
        total={mutationSearch.data?.data?.total || 0}
        onChange={handleChangePage}
        pageSize={pagination.limit}
        showSizeChanger={false}
        align="center"
      />
    </SearchProductWrapper>
  );
};

export default SearchProducts;
