import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Navbar } from "./components/Navbar/Main";

import { RegisterModal } from "./components/Modal/Register";
import { ProviderModal } from "./components/Modal/ProviderModal";
import { LoginModal } from "./components/Modal/Login";

import { ToasterProvider } from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import { SearchModal } from "./components/Modal/Search";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venuefy",
  description: "A venue booking platform",
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
          <SearchModal />
          <ProviderModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </>
        <div className="pt-28 pb-20">{children}</div>
      </body>
    </html>
  );
}
