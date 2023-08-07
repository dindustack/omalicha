"use client";

import { useRouter } from "next/navigation";

export const NavbarLogo = () => {
  const router = useRouter();
  return (
    <div className="text-black font-bold text-2xl ">
      Omalicha
      <span className="w-2 h-2 bg-primary inline-flex items-center rounded-[3px]"></span>
    </div>
  );
};
