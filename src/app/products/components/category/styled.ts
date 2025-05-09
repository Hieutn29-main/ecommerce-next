import styled from "styled-components";

export const CategoryWrapper = styled.div`
  padding-top: 50px;
  width: 80%;
  margin: 0 auto;
  .button-container {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    gap: 30px;
    padding: 20px;
  }
  .button-container::-webkit-scrollbar {
    height: 8px; /* Chiều cao thanh cuộn ngang */
  }

  .button-container::-webkit-scrollbar-track {
    background: transparent; /* Màu nền của track */
  }

  .button-container::-webkit-scrollbar-thumb {
    background: #f79b72; /* Màu của thanh cuộn */
    border-radius: 10px; /* Làm tròn góc của thanh cuộn */
  }

  .button-container::-webkit-scrollbar-thumb:hover {
    background: #f69c5e; /* Màu khi hover thanh cuộn */
  }

  /* Loại bỏ mũi tên thanh cuộn */
  .button-container::-webkit-scrollbar-button {
    display: none;
  }
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
  }
`;
