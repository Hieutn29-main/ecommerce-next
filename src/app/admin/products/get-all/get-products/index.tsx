"use client";
import { serverToSearchProducts } from "@/api-requests/products/search";

import Loader from "@/components/loaders";
import { useDebounce } from "@/hooks/useDebounce";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import useMounted from "@/hooks/useMounted";
import { SearchProductWrapper } from "@/app/admin/products/get-all/get-products/styled";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const AllProducts = () => {
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
    setPagination({
      limit: 12,
      skip: 0,
    });
  }, [debouncedSearchTerm]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      fixed: "left",
      width: 250,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 350,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 500,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      width: 500,
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: 500,
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  console.log(mutationSearch?.data?.data?.products);
  console.log(mutationSearch.isPending);
  const { isMounted } = useMounted();
  if (!isMounted) return null;

  return (
    <SearchProductWrapper>
      <Loader isPending={mutationSearch.isPending} />
      <Table
        style={{
          margin: 20,
        }}
        dataSource={mutationSearch?.data?.data?.products}
        columns={columns}
        scroll={{ x: "" }}
        tableLayout="fixed"
      />
    </SearchProductWrapper>
  );
};

export default AllProducts;
