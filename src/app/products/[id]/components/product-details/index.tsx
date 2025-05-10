"use client";
import {
  serverToGetAllProducts,
  serverToGetProductsDetail,
} from "@/api-requests/products";
import { ProductsDetailWrapper } from "@/app/products/[id]/components/product-details/styled";
import ButtonAddToCart from "@/components/button-add-to-cart";
import ButtonClevercarb26 from "@/components/button-clever-crab26";
import ButtonQuietDuck78 from "@/components/button-quiet-duck-78";
import ButtonSilentLizard44 from "@/components/button-silent-lizard-44";
import CardComponent from "@/components/card";
import CardRate from "@/components/card-rate";
import CardSEO from "@/components/card-seo";
import Loader from "@/components/loaders";
import useMounted from "@/hooks/useMounted";
import useNotificationApp from "@/hooks/useNotification";
import { GET_DETAIL_FAILED } from "@/message";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Rate } from "antd";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const ProductsDetail = () => {
  const { isMounted } = useMounted();
  const { id } = useParams();
  const { contextHolder, openNotificationWithIcon } = useNotificationApp();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => serverToGetProductsDetail(id as string),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const [pagination, setPagination] = useState({
    limit: 5,
    skip: Math.floor(Math.random() * 200),
  });
  const mutation = useMutation({
    mutationFn: serverToGetAllProducts,
    mutationKey: ["getAllProducts"],
  });
  useEffect(() => {
    mutation.mutate({
      ...pagination,
    });
  }, []);
  useEffect(() => {
    if (error) {
      openNotificationWithIcon({
        type: "error",
        message: "Detail",
        description: GET_DETAIL_FAILED,
      });
    }
  }, [error]);

  if (!isMounted) return null;
  return (
    <ProductsDetailWrapper>
      {contextHolder}
      <Loader isPending={isLoading} />
      <div className="header-action">
        <div className="container">
          <ButtonClevercarb26 />
        </div>
      </div>
      <div className="section-1">
        <img src={data?.data?.thumbnail} className="image" alt="" />
        <div className="content">
          <h1 className="title">{data?.data.title}</h1>
          <p className="des">{data?.data.description}</p>
          <p className="price">
            <span className="bold">Price:</span> ${data?.data.price}
          </p>
          <p className="stock">
            <span className="bold">Stock:</span> {data?.data.stock}
          </p>
          <p className="shippingInformation">
            <span className="bold">Shipping Information: </span>
            {data?.data.shippingInformation}
          </p>
          <p className="shippingInformation">
            <span className="bold">Rate: </span>
            <Rate disabled allowHalf value={data?.data.rating} />
          </p>
          <div className="action">
            <ButtonSilentLizard44 />
            <ButtonAddToCart />
          </div>
        </div>
      </div>
      <div className="section-2">
        <h2 className="title">Rate</h2>
        <div className="container">
          {data?.data?.reviews?.map((review: any) => (
            <CardRate review={review} />
          ))}
        </div>
      </div>
      <div className="section-3">
        <h2 className="title">Other products</h2>
        <div className="container">
          {mutation?.data?.data.products?.map((product: any) => (
            <CardSEO product={product} />
          ))}
        </div>
        <div className="action">
          <ButtonQuietDuck78 name={"Show more"} isButton={true} />
        </div>
      </div>
    </ProductsDetailWrapper>
  );
};

export default ProductsDetail;
