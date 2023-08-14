"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { NavbarAvatar } from "../Avatar";
import { useCallback, useState } from "react";
import { NavbarMenuItem } from "../MenuItem";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";

export const NavbarUserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSignupClick = useCallback(() => {
    registerModal.onOpen();
    setIsOpen(!isOpen);
  }, [registerModal, isOpen]);

  const handleLoginClick = useCallback(() => {
    loginModal.onOpen();
    setIsOpen(!isOpen);
  }, [loginModal, isOpen]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            lg:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            "
        >
          Become a Pro
        </div>
        <div
          onClick={toggleOpen}
          data-cy="user-menu-button"
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <NavbarAvatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          data-cy="user-menu-dropdown"
          className="
          absolute
          rounded-xl
          shadow-md
          w-[40vw]
          md:w-[20vw]
          lg:w-3/4
          bg-white
          overflow-hidden
          right-0
          top-14
          md:top-12
          text-sm
        "
        >
          <div
            data-cy="user-menu-list"
            className="flex flex-col cursor-pointer"
          >
            <NavbarMenuItem onClick={handleLoginClick} label="Login" />
            <NavbarMenuItem onClick={handleSignupClick} label="Sign up" />
          </div>
        </div>
      )}
    </div>
  );
};
