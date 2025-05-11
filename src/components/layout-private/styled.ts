import styled from "styled-components";
export const LayoutPrivateWrapper = styled.div``;
export const ContentPrivateWrapper = styled.div`
  display: flex;
  background: #fff1d5;
`;
export const ChildrenWrapper = styled.div`
  overflow: auto;
  flex-basis: 80%;
  max-height: calc(100vh - 64px - 130px);
  min-height: calc(100vh - 64px - 130px);
  margin: 40px 30px;
  background: white;
  border-radius: 8px;
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
`;
