"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { NavbarAvatar } from "../Avatar";
import { NavbarMenuItem } from "../MenuItem";

import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useProviderModal } from "@/app/hooks/useProviderModal";
import { SafeUser } from "@/app/types";

interface INavbarUserMenu {
  currentUser?: SafeUser | null;
}

export const NavbarUserMenu: React.FC<INavbarUserMenu> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const providerModal = useProviderModal();
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

  const isProvider = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    providerModal.onOpen();
  }, [currentUser, loginModal, providerModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={isProvider}
          className="
            hidden
            lg:block
            text-sm
            font-semibold
            py-3
            px-4
            border-[2px]
            border-primary
            hover:border-primary
            hover:bg-transparent
            transition 
            cursor-pointer
            bg-primary
            
            "
        >
          Register a venue
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
            <NavbarAvatar imageSrc={currentUser?.image} size={30} />
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
            {currentUser ? (
              <>
                <NavbarMenuItem
                  onClick={() => router.push("/bookings")}
                  label="Bookings"
                />
                <NavbarMenuItem
                  onClick={() => router.push("/favourites")}
                  label="Favourites"
                />
                <NavbarMenuItem
                  onClick={() => router.push("/reservations")}
                  label="Reservation"
                />
                <NavbarMenuItem onClick={() => {}} label="Venues" />

                <NavbarMenuItem
                  onClick={providerModal.onOpen}
                  label="Register a venue"
                />
                <hr />
                <NavbarMenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <NavbarMenuItem onClick={handleLoginClick} label="Login" />
                <NavbarMenuItem onClick={handleSignupClick} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
