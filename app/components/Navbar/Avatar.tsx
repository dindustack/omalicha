"use client";

import Image from "next/image";

interface INavbarAvatarProps {
  imageSrc: string | null | undefined;
}

export const NavbarAvatar: React.FC<INavbarAvatarProps> = ({ imageSrc }) => {
  return (
    <Image
      className="rounded-full ring-2 ring-primary object-cover"
      height="30"
      width="30"
      alt="Avatar"
      src={imageSrc || "/images/placeholder.jpg"}
    />
  );
};
