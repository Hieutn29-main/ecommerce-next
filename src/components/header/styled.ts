import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
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
    justify-content: space-between;
    align-items: center;
    .active-link {
      color: #1e1e2b !important;
      background-color: #f79b72;
    }
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
