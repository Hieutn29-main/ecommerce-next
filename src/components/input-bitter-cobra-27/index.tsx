import React from "react";
import styled from "styled-components";

const InputBitterCobra27 = ({ setSearch, search }: any) => {
  return (
    <StyledWrapper>
      <div>
        <div className="grid" />
        <div id="poda">
          <div className="glow" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="white" />
          <div className="border" />
          <div id="main">
            <input
              className="input"
              name="text"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div id="pink-mask" />

            <div id="search-icon">
              <svg
                className="feather feather-search"
                fill="none"
                height={24}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={8} stroke="url(#search)" />
                <line
                  x1={22}
                  x2="16.65"
                  y1={22}
                  y2="16.65"
                  stroke="url(#searchl)"
                />
                <defs>
                  <linearGradient id="search" gradientTransform="rotate(50)">
                    <stop offset="0%" stopColor="#f8e7f8" />
                    <stop offset="50%" stopColor="#b6a9b7" />
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop offset="0%" stopColor="#b6a9b7" />
                    <stop offset="50%" stopColor="#837484" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .grid {
    height: 800px;
    width: 800px;
    background-image: linear-gradient(to right, #4d4030 1px, transparent 1px),
      linear-gradient(to bottom, #4d4030 1px, transparent 1px);
    background-size: 1rem 1rem;
    background-position: center center;
    position: absolute;
    z-index: -1;
    filter: blur(1px);
  }

  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-height: 70px;
    max-width: 314px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 12px;
    filter: blur(3px);
  }

  .input {
    background-color: #f2e2c4; /* Muted beige for retro */
    color: #3a2e20; /* Dark brown for contrast */
    border: none;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    padding-inline: 59px;
    font-size: 18px;
  }

  #poda {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .input::placeholder {
    color: #857754; /* Soft, warm brown */
  }

  .input:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }
  #main {
    width: 100%;
  }

  #input-mask {
    pointer-events: none;
    width: 100px;
    height: 20px;
    position: absolute;
    background: linear-gradient(90deg, transparent, #3a2e20);
    top: 18px;
    left: 70px;
  }

  #pink-mask {
    pointer-events: none;
    width: 30px;
    height: 20px;
    position: absolute;
    background: #f28e8e; /* Warm coral */
    top: 10px;
    left: 5px;
    filter: blur(20px);
    opacity: 0.8;
    transition: all 2s;
  }

  #main:hover > #pink-mask {
    opacity: 0;
  }

  .white {
    max-height: 63px;
    max-width: 307px;
    border-radius: 10px;
    filter: blur(2px);
  }

  .white::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.4);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #dcb483,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #d16e5a,
      rgba(0, 0, 0, 0) 58%
    );
    transition: all 2s;
  }

  .border {
    max-height: 59px;
    max-width: 303px;
    border-radius: 11px;
    filter: blur(0.5px);
  }

  .border::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 600px;
    height: 600px;
    filter: brightness(1.3);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #3a2e20,
      #c98f65 5%,
      #3a2e20 14%,
      #3a2e20 50%,
      #f28e8e 60%,
      #3a2e20 64%
    );
    transition: all 2s;
  }

  .darkBorderBg {
    max-height: 65px;
    max-width: 312px;
  }

  .darkBorderBg::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #725d4a,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #d16e5a,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }

  #poda:hover > .darkBorderBg::before,
  #poda:focus-within > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(262deg);
    transition: all 4s; /* Added transition for focus-within */
  }

  #poda:hover > .glow::before,
  #poda:focus-within > .glow::before {
    transform: translate(-50%, -50%) rotate(240deg);
    transition: all 4s; /* Added transition for focus-within */
  }

  #poda:hover > .white::before,
  #poda:focus-within > .white::before {
    transform: translate(-50%, -50%) rotate(263deg);
    transition: all 4s; /* Added transition for focus-within */
  }

  #poda:hover > .border::before,
  #poda:focus-within > .border::before {
    transform: translate(-50%, -50%) rotate(250deg);
    transition: all 4s; /* Added transition for focus-within */
  }

  .glow {
    overflow: hidden;
    filter: blur(30px);
    opacity: 0.4;
    max-height: 130px;
    max-width: 354px;
  }

  .glow::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 999px;
    height: 999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #000,
      #c98f65 5%,
      #000 38%,
      #000 50%,
      #f28e8e 60%,
      #000 87%
    );
    transition: all 2s;
  }

  #filter-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 40px;
    max-width: 38px;
    height: 100%;
    width: 100%;
    isolation: isolate;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(180deg, #a57d52, #846846, #6b5342);
    border: 1px solid transparent;
  }

  .filterBorder {
    height: 42px;
    width: 40px;
    position: absolute;
    overflow: hidden;
    top: 7px;
    right: 7px;
    border-radius: 10px;
  }

  .filterBorder::before {
    content: "";
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.35);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #a57d52,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 50%,
      #a57d52,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }

  #main {
    position: relative;
    font-family: "Courier New", Courier, monospace; /* Retro-style font */
  }

  #search-icon {
    position: absolute;
    left: 20px;
    top: 15px;
    color: #c98f65;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
`;

export default InputBitterCobra27;
