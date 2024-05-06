import type { Metadata } from "next";
import local from 'next/font/local';
import "./globals.css";

const satoshi = local({
  src: [
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-satoshi'
});

const monument = local({
  src: [
    {
      path: '../../public/fonts/MonumentExtended-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-monument'
});

export const metadata: Metadata = {
  title: "Neon Test",
  description: "Frontend dev test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monument.variable} ${satoshi.variable}`}>{children}</body>
    </html>
  );
}
