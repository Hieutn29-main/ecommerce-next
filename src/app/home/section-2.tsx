"use client";
import { Section1Wrapper, Section2Wrapper } from "@/app/home/styled";
import ButtonGiantDonkey36 from "@/components/button-giant-donkey-36";
import ButtonPinkLizard56 from "@/components/button-pink-lizard-56";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section2 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <Section2Wrapper ref={ref}>
      <div className="container">
        <img
          src="/images/lorem-placeholder.svg"
          alt=""
          style={{
            width: "40%",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 4, ease: "easeOut" }}
        >
          <div className="right">
            <h1>
              <span className="heading-star"></span>Say Goodbye to Boring
              Placeholder Text!
            </h1>

            <p>
              Say goodbye to Lorem Ipsum! DummyJSON brings real JSON data to
              your frontend, letting you focus on development while we take care
              of data serving.
            </p>
            <div className="action">
              <ButtonGiantDonkey36
                name={"Try it Now?"}
                href="https://dummyjson.com/docs"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section2Wrapper>
  );
};

export default Section2;
