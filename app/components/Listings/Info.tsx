"use client";

import { useCountries } from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import { NavbarAvatar } from "../Navbar/Avatar";

interface ListingInfoProps {
  user: User;
  description: string;
  clientCount: number;
  experience: number;
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
  description,
  clientCount,
  experience,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8 mb-4">
      <hr />
      <div className="flex flex-col gap-2">
        <div
          className="
            
            flex
            flex-col
            gap-2  
        "
        >
          <div className="text-lg ">Owner</div>
          <NavbarAvatar imageSrc={user?.image} size={60} />
          <div
            className="text-xl
            font-semibold"
          >
            {user?.name}
          </div>
        </div>
        <div
          className="
            flex
            flex-row
            items-center
            gap-2
            md:gap-4
            font-light
            text-neutral-500
          "
        >
          <div>{`${clientCount} Maximum clients a day`}</div>
          <div className="w-1 h-1 bg-neutral-500 rounded-full"></div>
          <div>{`${experience} Years of Experience`}</div>
        </div>
      </div>
    </div>
  );
};
