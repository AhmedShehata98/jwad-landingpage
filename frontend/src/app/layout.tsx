import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/layout/Footer";
import Header from "@/components/header";
import FacebookPixel from "@/components/FacebookPixel";
import SnapchatPixel from "@/components/SnapchatPixel";
import TikTokPixel from "@/components/TikTokPixel";
import WhatsappBtn from "@/components/WhatsappBtn";
import StructuredDataMetadata from "@/components/StructuredDataMetadata";

const rubik = Rubik({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Jwad",
  description: "مشروعك مارح يضيع وسط الزحام",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>
        <StructuredDataMetadata />
        <FacebookPixel />
        <SnapchatPixel />
        <TikTokPixel />

        <Header />
        {children}
        <Footer />
        <WhatsappBtn />
        <div id="modal"></div>
      </body>
    </html>
  );
}
