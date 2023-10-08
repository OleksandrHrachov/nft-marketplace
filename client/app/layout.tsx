import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Header } from "./components/Header";
import favicon from '../public/favicon.svg'

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "NFT marketplace",
  icons: [{ rel: 'icon', url: favicon.src }],
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header/>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
