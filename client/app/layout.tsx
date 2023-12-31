import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans, Space_Mono } from "next/font/google";
import { Header } from "./components/Header";
import favicon from "../public/favicon.svg";
import { Footer } from "./components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "NFT marketplace",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${workSans.className} ${spaceMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
