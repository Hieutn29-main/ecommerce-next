import styled from "styled-components";

export const SidebarPrivateWrapper = styled.div`
  flex-basis: 20%;
  max-width: 300px;
  max-height: calc(100vh - 64px - 50px);
  min-height: calc(100vh - 64px - 50px);
  overflow: auto;
  border-right: 1px solid #bfbba9;
  &::-webkit-scrollbar {
    height: 7px; /* Chiều cao thanh cuộn ngang */
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Màu nền của track */
  }

  &::-webkit-scrollbar-thumb {
    background: #f79b72; /* Màu của thanh cuộn */
    border-radius: 10px; /* Làm tròn góc của thanh cuộn */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #f69c5e; /* Màu khi hover thanh cuộn */
  }

  /* Loại bỏ mũi tên thanh cuộn */
  &::-webkit-scrollbar-button {
    display: none;
  }

  .ant-menu-title-content {
    font-size: 16px;
    font-weight: 500;
  }
`;
