"use client";
import { Section1Wrapper, Section5Wrapper } from "@/app/home/styled";
import ButtonGiantDonkey36 from "@/components/button-giant-donkey-36";
import ButtonPinkLizard56 from "@/components/button-pink-lizard-56";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardSection5 from "@/components/card-section-5";
import { HEADER_NAV_LINK, HEADER_NAV_LINK_CARD } from "@/constants/variable";
import { CardSection5_I } from "@/types";

const Section5 = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const renderCard = (links: CardSection5_I[]) => {
    return links.map((item: CardSection5_I) => {
      const { title, icon, color } = item;
      if (item.title === "home") return;
      return <CardSection5 title={title} icon={icon} color={color} />;
    });
  };
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  return (
    <Section5Wrapper ref={ref}>
      <div className="head-title">
        <h2 className="title">Top Resources:</h2>
        <p className="des">
          Access real-life data, fully organized and ready to use, all in one
          place.
        </p>
      </div>
      <div className="container">{renderCard(HEADER_NAV_LINK_CARD)}</div>
    </Section5Wrapper>
  );
};

export default Section5;
