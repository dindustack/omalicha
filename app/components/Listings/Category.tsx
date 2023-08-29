"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

export const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-grow-[1]">
      <div className="flex flex-row items-center gap-4">
        <div
          className="
            border-[1px]
            rounded-full
            bg-primary
          border-black
            px-2
            py-2
        "
        >
          <Icon size={24} className="text-black" />
        </div>
        <div className="text-2xl font-semibold">{label}</div>
      </div>
      <div className="text-neutral-500 font-light break-normal">
        {description}
      </div>
    </div>
  );
};
