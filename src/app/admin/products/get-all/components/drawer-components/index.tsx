"use client";
import { serverToGetProductsDetail } from "@/api-requests/products";
import { DrawerWrapper } from "@/app/admin/products/get-all/components/drawer-components/styled";
import Loader from "@/components/loaders";
import { serverInstance } from "@/service/axios";
import { EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Drawer, Flex, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";

const DrawerComponent = ({ mode, id }: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    try {
      if (mode === "create") {
        const res = await serverInstance.post("/products/add", values);
        onClose();
        message.success("Create success");
      } else if (mode === "edit") {
        const res = await serverInstance.put(`/products/${id}`, values);
        onClose();
        message.success("Update success");
      }
    } catch (error: any) {
      message.error(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const renderButton = (mode: string) => {
    switch (mode) {
      case "create":
        return (
          <Button type="primary" onClick={showDrawer}>
            <PlusOutlined />
            Create
          </Button>
        );
      case "readOnly":
        return (
          <Button color="primary" onClick={showDrawer} variant="outlined">
            <EyeOutlined />
          </Button>
        );
      case "edit":
        return (
          <Button color="primary" onClick={showDrawer} variant="outlined">
            <EditOutlined />
          </Button>
        );

      default:
        break;
    }
  };
  const renderTitle = (mode: string) => {
    switch (mode) {
      case "create":
        return "Create product";
      case "readOnly":
        return "Watch product";
      case "edit":
        return "Update product";

      default:
        break;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => serverToGetProductsDetail(id as string),
    enabled: !!id && openDrawer,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    form.setFieldsValue(data?.data);
  }, [data]);

  return (
    <>
      {renderButton(mode)}

      <DrawerWrapper
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openDrawer}
        title={renderTitle(mode)}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Title" name="title">
            <Input disabled={mode === "readOnly"} placeholder="title..." />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input
              disabled={mode === "readOnly"}
              placeholder="description..."
            />
          </Form.Item>
          <Form.Item label="Brand" name="brand">
            <Input disabled={mode === "readOnly"} placeholder="brand..." />
          </Form.Item>

          <Flex justify="center" align="center" gap={10}>
            <Button
              style={{
                flexBasis: "50%",
              }}
              onClick={onClose}
            >
              Cancle
            </Button>
            <Button
              style={{
                flexBasis: "50%",
                display: mode === "readOnly" ? "none" : "inline-block",
              }}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Flex>
        </Form>
      </DrawerWrapper>
    </>
  );
};

export default DrawerComponent;
