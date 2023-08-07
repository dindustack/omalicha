"use client";

interface NavbarContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w-[157.5rem]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
      "
    >
      {children}
    </div>
  );
};
