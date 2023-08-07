"use client";

interface NavbarMenuItemProps {
  onClick: () => void;
  label: string;
}

export const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  onClick,
  label,
}) => {
  return (
    <div
      onClick={onClick}
      className="
      px-4
      py-3
      hover:bg-neutral-100
      transition
      font-semibold
    "
    >
      {label}
    </div>
  );
};
