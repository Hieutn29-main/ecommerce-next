"use client";
import { Section1Wrapper } from "@/app/home/styled";
import ButtonGiantDonkey36 from "@/components/button-giant-donkey-36";
import ButtonPinkLizard56 from "@/components/button-pink-lizard-56";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section1 = () => {
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
    <Section1Wrapper ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <div className="left">
            <h1>
              Free Fake REST API for Placeholder JSON Data
              <span className="heading-star"></span>
            </h1>
            <h3>Develop, Build, Test.</h3>
            <p>
              Get instant dummy JSON data for your frontend with DummyJSON
              Server — no backend setup needed!
            </p>
            <div className="action">
              <ButtonGiantDonkey36
                name={"View on GitHub"}
                href="https://github.com/Ovi/DummyJSON"
              />
              <ButtonPinkLizard56
                name={"Read Docs"}
                href="https://dummyjson.com/docs"
              />
            </div>
          </div>
        </motion.div>

        <img
          src="/images/hero-image.svg"
          alt=""
          style={{
            width: "40%",
          }}
        />
      </div>
    </Section1Wrapper>
  );
};

export default Section1;
