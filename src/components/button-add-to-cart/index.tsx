import React from "react";
import styled from "styled-components";

const ButtonAddToCart = () => {
  return (
    <StyledWrapper>
      <button className="box">
        <p className="text-button">Add to cart</p>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .box {
    position: relative;
    width: 120px;
    height: 45px;
    overflow: hidden;
    border: none;
    background-color: rgb(218, 203, 177);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    border-top-left-radius: 20px;
    cursor: pointer;
    border-bottom-right-radius: 20px;
    box-shadow: 0 0 10px rgb(104, 134, 218);
  }

  .box::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 200px;
    margin-top: -92px;
    background: linear-gradient(#00ccff, #d400d4);
    animation: amm 4s linear infinite;
  }

  @keyframes amm {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .text-button {
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    z-index: 1;
  }

  .box::after {
    content: "";
    position: absolute;
    inset: 4px;
    background-color: rgb(218, 203, 177);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export default ButtonAddToCart;
