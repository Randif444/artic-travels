import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artic Travel",
  description:
    "Discover the world with Artic Travel - Your ultimate travel companion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`{inter.className} w-full max-w-[100vw] overflow-x-hidden `}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
