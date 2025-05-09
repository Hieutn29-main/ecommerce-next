"use client";
import { StyledWrapper } from "@/components/card/styled";
import { truncateText } from "@/utils";
import React from "react";

interface CardComponent_I {
  title: string;
  description: string;
  thumbnail: string;
}
const CardComponent = ({ title, description, thumbnail }: CardComponent_I) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-details">
          <p className="text-title">{title}</p>
          <p className="text-body">{truncateText(description, 100)}</p>
          <img className="image" src={thumbnail} alt="sss" />
        </div>
        <button
          className="card-button"
          onClick={() => {
            console.log("mua");
          }}
        >
          Show More
        </button>
      </div>
    </StyledWrapper>
  );
};

export default CardComponent;
