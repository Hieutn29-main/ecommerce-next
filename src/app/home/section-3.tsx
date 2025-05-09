"use client";
import { Section3Wrapper } from "@/app/home/styled";
import ButtonQuietDuck78 from "@/components/button-quiet-duck-78";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section3 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  return (
    <Section3Wrapper ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <div className="left">
            <h1>
              Ready-to-Use Resources for Your Projects{" "}
              <span className="heading-star"></span>
            </h1>
            <p>
              Instantly access over 10 diverse datasets with our JSON
              Placeholder Data, speeding up frontend development and creating
              dynamic prototypes without backend hassles.
            </p>
            <div className="action">
              <ButtonQuietDuck78
                name={"View more"}
                href="https://dummyjson.com/docs"
              />
            </div>
          </div>
        </motion.div>

        <img
          src="/images/multiple-options.svg"
          alt=""
          style={{
            width: "40%",
          }}
        />
      </div>
    </Section3Wrapper>
  );
};

export default Section3;
