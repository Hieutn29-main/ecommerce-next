import { StyledWrapper } from "@/components/card/styled";
import React from "react";

const CardComponent = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <p className="text-title">Card title</p>
          <p className="text-body">Here are the details of the card</p>
          <img src="/images/bg-login.jpg" alt="sss" />
        </div>
        <button
          className="card-button"
          onClick={() => {
            console.log("mua");
          }}
        >
          buy now
        </button>
      </div>
    </StyledWrapper>
  );
};

export default CardComponent;
