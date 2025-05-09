"use client";
import { HeaderWrapper, LinkWrapper } from "@/components/header/styled";
import { HEADER_NAV_LINK } from "@/constants/variable";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeaderApp = () => {
  const router = useRouter();
  const [hash, setHash] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);
  const handleNavigate = (hash: string) => {
    setHash(hash);
    router.push(hash);
  };

  const renderLink = (links: Record<string, string>) => {
    return Object.entries(links).map(([key, value]) => {
      return (
        <LinkWrapper
          key={key}
          onClick={() => handleNavigate(value)}
          className={`
        ${hash === value ? "active-link " : ""}
        
        `}
        >
          <button
            className={`
        ${hash === value ? "" : "btn-color "} btn
        `}
          >
            {value}
          </button>
        </LinkWrapper>
      );
    });
  };
  const pathname = usePathname();
  useEffect(() => {
    const clearPathname = pathname.replace("/", "");
    setHash(clearPathname);
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <HeaderWrapper>
      <div className="nav-link">{renderLink(HEADER_NAV_LINK)}</div>
    </HeaderWrapper>
  );
};

export default HeaderApp;
