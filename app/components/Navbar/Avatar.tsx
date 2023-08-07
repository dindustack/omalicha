"use client";

import Image from "next/image";

export const NavbarAvatar = () => {
  return (
    <Image
      className="rounded-full ring-2 ring-primary object-cover"
      height="30"
      width="30"
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};
