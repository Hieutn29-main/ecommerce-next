"use client";
import { Section4Wrapper } from "@/app/home/styled";
import ButtonFoolisShrimp59 from "@/components/button-foolish-shrimp-59";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section4 = () => {
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
    <Section4Wrapper ref={ref}>
      <div className="container">
        <img
          src="/images/placeholder-image.svg"
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
              <span className="heading-star"></span>Placeholder Images? No
              Problem!
            </h1>

            <p>
              Need images on the fly? DummyJSON Server creates dynamic
              placeholders instantly, no more image hunting or complex setups.
              Just add the URL and you're good to go!
            </p>
            <div className="action">
              <ButtonFoolisShrimp59
                name={"Generate Now"}
                href="https://dummyjson.com/docs/image"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section4Wrapper>
  );
};

export default Section4;
