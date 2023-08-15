"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">
        {`${title} to Omalicha`}
        <span className="w-2 h-2 bg-primary inline-flex items-center rounded-[3px]"></span>
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};
