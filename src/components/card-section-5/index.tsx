"use client";
import { CardSextion5Wrapper } from "@/components/card-section-5/styled";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardSection5_I } from "@/types";
import { ArrowRightOutlined } from "@ant-design/icons";

const CardSection5 = ({ title, icon, color = "" }: CardSection5_I) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <CardSextion5Wrapper ref={ref} color={color}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 4, ease: "easeOut" }}
      >
        <div className="card">
          <div>{icon}</div>
          <div className="textBox">
            <div className="textContent">
              <p className="h1">{title}</p>
              <span className="span">
                <ArrowRightOutlined style={{ fontSize: "40px" }} />
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </CardSextion5Wrapper>
  );
};

export default CardSection5;
