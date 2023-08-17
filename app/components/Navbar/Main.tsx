"use client";

import { User } from "@prisma/client";
import { Container } from "./Container";
import { NavbarLogo } from "./Logo";
import { NavbarSearch } from "./Search";
import { NavbarUserMenu } from "./UserMenu";
import { NavbarCategories } from "./Category/Categories";

interface INavbarProps {
  currentUser?: User | null;
}

export const Navbar: React.FC<INavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white backdrop-blur-[10px] z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0         
          "
          >
            <NavbarLogo />
            <NavbarSearch />
            <NavbarUserMenu currentUser={currentUser} />
          </div>
        </Container>
        <NavbarCategories />
      </div>
    </div>
  );
};
