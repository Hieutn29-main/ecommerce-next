import LayoutPageConfig from "@/components/layout-config";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecormmerce dummy json",
  description: "ecormmerce dummy json project code by hieutn29",
};

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
