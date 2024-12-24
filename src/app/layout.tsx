import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "./(landing)/_components/layout/mainLayout";

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
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
