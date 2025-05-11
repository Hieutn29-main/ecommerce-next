import { Table } from "antd";
import styled from "styled-components";

export const SearchProductWrapper = styled.div`
  padding-top: 50px;

  .title {
    font-size: 46px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  .product-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px 50px;
    padding-bottom: 50px;
    margin-top: 50px;
  }

  .ant-table-thead > tr > th {
    background-color: #eb5b00;
    color: white;
    font-weight: bold;
  }

  .ant-table-tbody {
    background-color: #f0f0f0; /* Chọn màu nền cho các cột không cố định */
  }

  .ant-table-fixed-left .ant-table-thead > tr > th,
  .ant-table-fixed-left .ant-table-tbody > tr > td {
    background-color: #f0f0f0; /* Màu nền cho các cột cố định */
  }

  .ant-table-tbody > tr > td {
    background-color: #f0f0f0; /* Màu nền cho các cột cố định */
  }

  .ant-table-tbody > tr:hover {
    background-color: #eb5b00 !important;
  }

  .ant-table-fixed .ant-table-tbody > tr:hover {
    background-color: #eb5b00 !important;
  }
`;
