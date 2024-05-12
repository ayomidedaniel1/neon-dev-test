import type { Metadata } from "next";
import "./globals.css";
import { monument, satoshi } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Neon Test",
  description: "Frontend dev test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monument.variable} ${satoshi.variable}`}>
        {children}
      </body>
    </html>
  );
}
