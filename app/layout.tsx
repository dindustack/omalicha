import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Navbar } from "./components/Navbar/Main";
import { Modal } from "./components/Modal";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omalicha",
  description: "A beauty marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <>
          <Modal isOpen />
          <Navbar />
        </>
        {children}
      </body>
    </html>
  );
}
