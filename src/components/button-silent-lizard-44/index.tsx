import React from "react";
import styled from "styled-components";

const ButtonSilentLizard44 = () => {
  return (
    <StyledWrapper>
      <button className="synthwave-laser-button">Buy now</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .synthwave-laser-button {
    position: relative;
    padding: 10px 20px;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
    background: #101020; /* Base color */
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    text-shadow: 0 0 5px #00ffe0, 0 0 15px #00ffe0, 0 0 25px #00ffe0;
    box-shadow: inset 0 0 15px #00ffe0, 0 0 20px rgba(0, 255, 224, 0.7);
    overflow: hidden;
    border-radius: 10px;
    z-index: 1;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .synthwave-laser-button::before,
  .synthwave-laser-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 224, 0.6),
      transparent
    );
    z-index: -1;
    filter: blur(5px);
    transform: translateX(-100%);
    animation: laser-glow 2.5s infinite linear;
  }

  .synthwave-laser-button::after {
    animation-delay: 1.25s;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 0, 144, 0.6),
      transparent
    );
  }

  @keyframes laser-glow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .synthwave-laser-button:hover {
    transform: translateY(-5px);
  }

  .synthwave-laser-button:active {
    transform: scale(0.95);
    box-shadow: inset 0 0 15px #00ffe0, 0 0 25px rgba(255, 0, 144, 0.7);
  }
`;

export default ButtonSilentLizard44;
