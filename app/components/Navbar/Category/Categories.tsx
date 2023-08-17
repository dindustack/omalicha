"use client";

import React from "react";
import { Container } from "../Container";
import { categories } from "@/app/utils/categories";
import { CategoryBox } from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const NavbarCategories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-8 flex flex-row items-center gap-14 md:gap-2 justify-between overflow-x-scroll no-scrollbar overscroll-none">
        {React.Children.toArray(
          categories.map((item) => (
            <CategoryBox
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          ))
        )}
      </div>
    </Container>
  );
};
