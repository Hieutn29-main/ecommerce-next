"use client";
import { serverToSearchProducts } from "@/api-requests/products/search";

import Loader from "@/components/loaders";
import { useDebounce } from "@/hooks/useDebounce";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

import {
  Button,
  Drawer,
  Flex,
  Input,
  message,
  Modal,
  Space,
  Table,
  Tag,
} from "antd";
import type { TableProps } from "antd";
import useMounted from "@/hooks/useMounted";
import { SearchProductWrapper } from "@/app/admin/products/get-all/get-products/styled";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import InputBitterCobra27 from "@/components/input-bitter-cobra-27";
import InputHusky from "@/components/input-pround-husky";
import DrawerComponent from "@/app/admin/products/get-all/components/drawer-components";
import { serverInstance } from "@/service/axios";

const AllProducts = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);
  const [pagination, setPagination] = useState({
    limit: 6,
    skip: 0,
  });

  const mutationSearch = useMutation({
    mutationFn: serverToSearchProducts,
    mutationKey: ["getSearchProducts"],
  });
  const handleChangePage = (page: number) => {
    setPagination((pre) => ({
      ...pre,
      skip: (page - 1) * pre.limit,
    }));
  };

  useEffect(() => {
    // Khi từ khóa thay đổi, luôn reset skip = 0
    setPagination((prev) => ({
      ...prev,
      skip: 0,
    }));
  }, [debouncedSearchTerm]);

  useEffect(() => {
    mutationSearch.mutate({
      ...pagination,
      q: debouncedSearchTerm,
    });
  }, [pagination, debouncedSearchTerm]);

  const columns: any = [
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
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 100,
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "",
      width: 300,
      ellipsis: true,
      align: "center",
      render: (_: any, record: any) => {
        return (
          <Flex gap={10} justify="center">
            <DrawerComponent mode="readOnly" id={record.id} />

            <DrawerComponent mode="edit" id={record.id} />

            <Button
              onClick={() => showModal(record.id)}
              color="primary"
              variant="outlined"
            >
              <DeleteOutlined />
            </Button>
            <Modal
              centered
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Are you sure delete?</p>
            </Modal>
          </Flex>
        );
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const showModal = (id: string) => {
    setCurrentId(id);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    if (currentId) {
      await handleDelete(currentId);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async (id: any) => {
    try {
      const res = await serverInstance.delete(`/products/${id}`);

      message.success("Delete success");
    } catch (error) {}
  };

  const { isMounted } = useMounted();
  if (!isMounted) return null;

  return (
    <SearchProductWrapper>
      <Loader isPending={mutationSearch.isPending} />
      <p
        style={{
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Note: This page is a simulation. Actions such as add / edit / delete
        will not affect real data.
      </p>
      <Flex
        style={{
          margin: "0 20px",
        }}
        justify="space-between"
        align="center"
      >
        <InputHusky search={search} setSearch={setSearch} />

        <DrawerComponent mode="create" />
      </Flex>

      <Table
        style={{
          margin: 20,
        }}
        dataSource={mutationSearch?.data?.data?.products}
        columns={columns}
        scroll={{ x: "" }}
        tableLayout="fixed"
        pagination={{
          disabled: false,
          position: ["bottomRight"],
          total: mutationSearch?.data?.data?.total || 0,
          showSizeChanger: false,
          pageSizeOptions: [10, 50, 100, 1000],
          // showTotal: (total, range) => `Total${total}-${range[0]}~${range[1]}`,
          current: pagination.skip / pagination.limit + 1,
          pageSize: pagination.limit,
          onChange: handleChangePage,
        }}
      />
    </SearchProductWrapper>
  );
};

export default AllProducts;
