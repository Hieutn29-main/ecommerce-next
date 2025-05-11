import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: #2a4759;
  .nav-link {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    .active-link {
      color: #1e1e2b !important;
      background-color: #f79b72;
    }
  }
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

export const LinkWrapper = styled.div`
  z-index: 10;
  .btn {
    font-size: 17px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    text-transform: uppercase;
    position: relative;
    transition: 0.5s ease;
    cursor: pointer;
  }
  .btn-color {
    color: #ffedd3;
  }
  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #f79b72;
    transition: 0.5s ease;
  }

  .btn:hover {
    color: #1e1e2b;
    transition-delay: 0.5s;
  }

  .btn:hover::before {
    width: 100%;
  }

  .btn::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #f79b72;
    transition: 0.4s ease;
    z-index: -1;
  }

  .btn:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
`;
