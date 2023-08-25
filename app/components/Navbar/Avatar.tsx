"use client";

import Image from "next/image";

interface INavbarAvatarProps {
  imageSrc: string | null | undefined;
  size: number;
}

export const NavbarAvatar: React.FC<INavbarAvatarProps> = ({
  imageSrc,
  size,
}) => {
  return (
    <Image
      className="rounded-full ring-2 ring-primary object-cover"
      height={size}
      width={size}
      alt="Avatar"
      src={imageSrc || "/images/placeholder.jpg"}
    />
  );
};
