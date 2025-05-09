import styled from "styled-components";

interface WrapperProps {
  color?: string;
}

export const CardSextion5Wrapper = styled.div<WrapperProps>`
  flex-basis: 40%;
  min-width: 350px;
  .card {
    height: 100px;
    background: ${(props) => props.color || "#353535"};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    backdrop-filter: blur(10px);
    transition: 0.5s ease-in-out;
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 10px;
    background: linear-gradient(#d7cfcf, #9198e5);
  }

  .card:hover > .img {
    transition: 0.5s ease-in-out;
    background: linear-gradient(#9198e5, #712020);
  }

  .textBox {
    width: 100%;
    padding: 30px;
    margin-left: 10px;
    color: white;
    font-family: "Poppins" sans-serif;
  }

  .textContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .span {
    font-size: 10px;
  }

  .h1 {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .p {
    font-size: 12px;
    font-weight: lighter;
  }
`;
