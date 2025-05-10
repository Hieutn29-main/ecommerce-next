import LayoutPageConfig from "@/components/layout-config";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutPageConfig>{children}</LayoutPageConfig>
      </body>
    </html>
  );
}
