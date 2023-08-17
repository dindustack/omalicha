"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface ICategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export const CategoryBox: React.FC<ICategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: Record<string, string | string[]> = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
    flex
    flex-row
    md:flex-col
    items-center
    justify-center
    gap-2
    text-black
    hover:text-neutral-600
    transition
    cursor-pointer
    
    
    `}
    >
      <div
        className={`
        border-[1px]
        rounded-full
      border-black
        px-2
        py-2  
        ${selected ? "bg-primary" : "bg-transparent"}
      `}
      >
        <Icon size={26} />
      </div>
      <div className="font-medium text-md whitespace-nowrap">{label}</div>
    </div>
  );
};
