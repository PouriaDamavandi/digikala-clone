import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digikala Clone",
  description: "Clone made from Pouria Damavandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
