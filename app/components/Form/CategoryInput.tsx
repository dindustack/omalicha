"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

export const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-[1px]
        p-4
        flex
        flex-col
        lg:flex-row
        lg:items-center
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${
          selected
            ? "border-black bg-primary"
            : "border-neutral-200 bg-transparent"
        }
    `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};
