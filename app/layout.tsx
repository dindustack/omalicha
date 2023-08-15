import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Navbar } from "./components/Navbar/Main";
import { RegisterModal } from "./components/Modal/Register";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/Modal/Login";
import getCurrentUser from "./actions/getCurrentUser";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omalicha",
  description: "A beauty marketplace",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={urbanist.className} suppressHydrationWarning={true}>
        <>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </>
        {children}
      </body>
    </html>
  );
}
