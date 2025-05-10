"use client";

import {
  serverToGetAllCategories,
  serverToGetProductsByCategories,
  toGetProductsByCategories,
} from "@/api-requests/products/categories";
import { CategoryWrapper } from "@/app/products/components/category/styled";
import ButtonSlipperySnake30 from "@/components/button-slippery-snake-30";
import CardComponent from "@/components/card";
import Loader from "@/components/loaders";
import { PaginationCustom } from "@/components/pagination-custom-ant";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Empty, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const CategoryProducts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [category, setCategory] = useState<string>("beauty");
  const queryCategory = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: serverToGetAllCategories,
    enabled: false,
  });

  useEffect(() => {
    queryCategory.refetch();
  }, []);

  const handleChangeCategory = (slug: string) => {
    setCategory(slug);
  };

  const [pagination, setPagination] = useState({
    limit: 12,
    skip: 0,
  });

  const mutationProductByCategory = useMutation({
    mutationFn: async ({
      category,
      params,
    }: {
      category: string;
      params?: any;
    }) => {
      return await toGetProductsByCategories(category, params);
    },
    mutationKey: ["getProductsByCategory"],
  });
  const handleChangePage = (page: number) => {
    const newSkip = (page - 1) * pagination.limit;
    setPagination((prev) => ({ ...prev, skip: newSkip }));

    mutationProductByCategory.mutate({
      category,
      params: {
        limit: pagination.limit,
        skip: newSkip,
      },
    });
  };
  useEffect(() => {
    mutationProductByCategory.mutate({
      category,
      params: pagination,
    });
  }, [category]);

  useEffect(() => {
    queryCategory.refetch();
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className="custom-next-arrow" onClick={onClick}>
        <LeftCircleOutlined
          style={{
            color: "#f69c5e",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </button>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button className="custom-prev-arrow" onClick={onClick}>
        <RightCircleOutlined
          style={{
            color: "#f69c5e",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!isMounted) return null;
  return (
    <CategoryWrapper>
      <Loader isPending={queryCategory.isPending} />
      <h2 className="title "> Category Products</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {queryCategory?.data?.data?.map((cate: any) => (
            <ButtonSlipperySnake30
              handleChangeCategory={handleChangeCategory}
              title={cate.name}
              slug={cate.slug}
            />
          ))}
        </Slider>
      </div>

      <div className="products-container">
        {mutationProductByCategory?.data?.data?.products?.map(
          (product: any) => (
            <CardComponent
              title={product.title}
              description={product.description}
              thumbnail={product.thumbnail}
              id={product.id}
            />
          )
        )}
        {mutationProductByCategory.isPending && (
          <Skeleton paragraph={{ rows: 10 }} />
        )}
      </div>
      <PaginationCustom
        defaultCurrent={1}
        total={mutationProductByCategory.data?.data?.total || 0}
        onChange={handleChangePage}
        pageSize={pagination.limit}
        showSizeChanger={false}
        align="center"
      />
    </CategoryWrapper>
  );
};

export default CategoryProducts;
