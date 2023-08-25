"use client";

import { useCountries } from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import { Heading } from "../Heading";
import Image from "next/image";
import { HeartButton } from "../HeartButton";
import { ReactNode } from "react";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
  children: ReactNode;
}

export const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
  children,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <div className="">
      <div className="grid md:grid-cols-2 h-screen lg:h-[80vh]">
        <div className="order-2 md:order-1 flex flex-col gap-8 pr-0 md:pr-16">
          <div className="">
            <div className="text-[30px] md:text-[60px] font-bold">{title}</div>
            <div className="font-light text-neutral-500 mt-2">{`${location?.label}, ${location?.region}`}</div>
          </div>

          {children}
        </div>

        <div className="order-1 md:order-2 overflow-hidden rounded-xl relative mb-2">
          <Image
            alt="Image"
            src={imageSrc}
            fill
            className="object-cover w-full border-2 border-black rounded-xl"
          />
          <div className="absolute top-5 right-5">
            <HeartButton listingId={id} currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
};
