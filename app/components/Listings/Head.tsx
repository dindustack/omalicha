"use client";

import { useCountries } from "@/app/hooks/useCountries";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { staticBlurDataUrl } from "@/app/utils/staticBlurUrl";
import { SafeUser } from "@/app/types";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

export const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  const getBlurSvg = staticBlurDataUrl();

  return (
    <>
      <div>
        <div className="text-[30px] md:text-[60px] font-bold">{title}</div>
        <div className="font-light text-neutral-500">{`${location?.label}, ${location?.region}`}</div>
      </div>

      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative mb-2">
        <Image
          alt="Image"
          src={imageSrc}
          placeholder="blur"
          blurDataURL={getBlurSvg}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover bg-center w-full border-2 border-black rounded-xl"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};
