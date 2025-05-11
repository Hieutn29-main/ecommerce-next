"use client";
import { LoaderWrapper } from "@/components/loaders/styled";
import useMounted from "@/hooks/useMounted";
import { Loader_I } from "@/types";
import React, { useEffect } from "react";

const Loader = ({ isPending }: Loader_I) => {
  useEffect(() => {
    if (isPending) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isPending]);

  const { isMounted } = useMounted();
  if (!isMounted) return null;
  return (
    isPending && (
      <LoaderWrapper>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className="wheel-and-hamster"
        >
          <div className="wheel" />
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear" />
                <div className="hamster__eye" />
                <div className="hamster__nose" />
              </div>
              <div className="hamster__limb hamster__limb--fr" />
              <div className="hamster__limb hamster__limb--fl" />
              <div className="hamster__limb hamster__limb--br" />
              <div className="hamster__limb hamster__limb--bl" />
              <div className="hamster__tail" />
            </div>
          </div>
          <div className="spoke" />
        </div>
      </LoaderWrapper>
    )
  );
};

export default Loader;
