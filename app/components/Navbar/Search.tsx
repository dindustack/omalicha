"use client";

import { BiSearch } from "react-icons/bi";
import { useSearchModal } from "@/app/hooks/useSearchModal";

export const NavbarSearch = () => {
  const searchModal = useSearchModal();
  return (
    <div
      onClick={searchModal.onOpen}
      className="
     border-[1px]
      md:w-auto
      py-2
      rounded-full
      shadow-sm
      hover:shadow-md
      transition
      cursor-pointer
    "
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
       "
      >
        <div
          className="
          hidden
          sm:block
          text-sm
          font-semibold
          px-6
        "
        >
          What are you looking for?
        </div>
        <div
          className="
          hidden
          sm:block
          text-sm
          font-semibold
          px-6
          border-x-[1px]
          flex-1
          text-center
        "
        >
          Nigeria
        </div>
        <div
          className="
          text-sm
          pl-2
          md:pl-6
          pr-2
          text-secondary
          flex
          flex-row
          items-center
          gap-3
        "
        >
          <div
            className="
            p-2
            bg-primary
            rounded-full
            text-black
          "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
