import LayoutPageConfig from "@/components/layout-config";
import "./globals.css";

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
