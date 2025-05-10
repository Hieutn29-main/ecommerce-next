import styled from "styled-components";
export const LayoutPrivateWrapper = styled.div``;
export const ContentPrivateWrapper = styled.div`
  display: flex;
  .children {
    overflow: auto;
    flex: 1;
    max-height: calc(100vh - 64px - 50px);
    min-height: calc(100vh - 64px - 50px);
  }
  .children::-webkit-scrollbar {
    height: 7px; /* Chiều cao thanh cuộn ngang */
    width: 7px;
  }

  .children::-webkit-scrollbar-track {
    background: transparent; /* Màu nền của track */
  }

  .children::-webkit-scrollbar-thumb {
    background: #f79b72; /* Màu của thanh cuộn */
    border-radius: 10px; /* Làm tròn góc của thanh cuộn */
  }

  .children::-webkit-scrollbar-thumb:hover {
    background: #f69c5e; /* Màu khi hover thanh cuộn */
  }

  /* Loại bỏ mũi tên thanh cuộn */
  .children::-webkit-scrollbar-button {
    display: none;
  }
`;
