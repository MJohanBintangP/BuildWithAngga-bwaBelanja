import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bwa-mjohanbintangp",
  description: "build with angga course - leaarning purpose - mjohanbintangp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
