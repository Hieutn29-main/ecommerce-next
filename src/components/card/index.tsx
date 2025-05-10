"use client";
import { StyledWrapper } from "@/components/card/styled";
import { truncateText } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface CardComponent_I {
  title: string;
  description: string;
  thumbnail: string;
  id?: string | number;
}
const CardComponent = ({
  title,
  description,
  thumbnail,
  id = "",
}: CardComponent_I) => {
  const router = useRouter();
  return (
    <StyledWrapper key={id}>
      <div className="card">
        <div className="card-details">
          <p className="text-title">{title}</p>
          <p className="text-body">{truncateText(description, 100)}</p>
          <img className="image" src={thumbnail} alt={title} />
        </div>
        <button
          className="card-button"
          onClick={() => {
            console.log(id);
            router.push(`/products/${id}`);
          }}
        >
          Show More
        </button>
      </div>
    </StyledWrapper>
  );
};

export default CardComponent;
