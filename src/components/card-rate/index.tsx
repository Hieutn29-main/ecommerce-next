import { UserOutlined } from "@ant-design/icons";
import { Avatar, Rate } from "antd";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

const CardRate = ({ review }: any) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Avatar size={100} icon={<UserOutlined />} />
            <p className="title">{review?.reviewerName}</p>
            <p className="date">{dayjs(review?.date).format("DD/MM/YYYY")}</p>
            <Rate
              style={{
                color: "#f79b72",
              }}
              allowHalf
              value={review?.rating}
            />
          </div>
          <div className="flip-card-back">
            <p className="comment">{review?.comment}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 190px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .title {
    font-size: 20px !important;
    color: #f79b72;
    text-align: center;
    margin: 0;
  }
  .date {
    font-size: 18px !important;
    color: #f79b72;
    text-align: center;
    margin: 0;
  }
  .comment {
    font-size: 20px !important;
    color: #2a4759;
    text-align: center;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    align-items: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 231, 222) 88%,
      rgb(255, 211, 195) 40%,
      rgba(255, 127, 80, 0.603) 48%
    );
    color: black;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotateY(180deg);
  }
`;
export default CardRate;
