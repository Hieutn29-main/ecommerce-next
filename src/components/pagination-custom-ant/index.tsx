import { Pagination } from "antd";
import styled from "styled-components";

export const PaginationCustom = styled(Pagination)`
  /* Chỉnh màu sắc của các số trang */
  .ant-pagination-item {
    color: #f79b72;
    border: 1px solid #f79b72; /* Viền số trang */
  }

  /* Chỉnh màu sắc của trang hiện tại */
  .ant-pagination-item-active {
    background-color: #f79b72;
    border-color: #f79b72;
    color: white !impotant; /* Đổi màu chữ của trang hiện tại */
  }

  /* Chỉnh màu sắc của các nút Previous và Next */
  .ant-pagination-prev,
  .ant-pagination-next {
    color: #f79b72;
    border-color: #f79b72; /* Viền của các nút */
  }

  .ant-pagination-prev:hover,
  .ant-pagination-next:hover {
    background-color: #f79b72; /* Màu nền khi hover */
    border-color: #f79b72;
    color: white; /* Đổi màu chữ khi hover */
  }

  /* Chỉnh màu nền của các trang không phải trang hiện tại khi hover */
  .ant-pagination-item:hover {
    background-color: #f79b72;
    border-color: #f79b72;
    color: white;
  }
  .ant-pagination-item-active a {
    color: white;
  }
`;
