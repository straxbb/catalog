import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Каталог компьютерной техники",
  description: "Магазин компьютеров и комплектующих",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}