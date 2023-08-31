"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import { useCountries } from "@/app/hooks/useCountries";
import { ListingCategory } from "./Category";
import { NavbarAvatar } from "../Navbar/Avatar";
import { SafeUser } from "@/app/types";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  capacity: number;
  restroom: number;
  parkingCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

export const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  capacity,
  restroom,
  category,
  parkingCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  const DynamicMap = useMemo(
    () =>
      dynamic(() => import("../Map").then((mod) => mod.Map), {
        ssr: false,
      }),
    [locationValue]
  );
  return (
    <div className="col-span-4 flex flex-col gap-8 mb-4">
      <div
        className="   
            flex
            flex-col
            gap-2  
        "
      >
        <div className="text-lg">Owner</div>
        <NavbarAvatar imageSrc={user?.image} size={60} />
        <div
          className="text-xl
            font-semibold"
        >
          {user?.name}
        </div>
      </div>
      <hr />
      <div
        className="
            flex
            flex-row
            items-center
            gap-2
            font-thin
            text-neutral-500
          "
      >
        <div>{`${capacity} guests`}</div>
        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
        <div>{`${restroom} restrooms`}</div>
        <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
        <div>{`${parkingCount} parking slots`}</div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}

      <hr />
      <DynamicMap center={coordinates} />
    </div>
  );
};
