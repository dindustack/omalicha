import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Navbar } from "./components/Navbar/Main";
import { RegisterModal } from "./components/Modal/Register";
import { ToasterProvider } from "./providers/ToasterProvider";

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
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </>
        {children}
      </body>
    </html>
  );
}
