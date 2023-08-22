"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const handleAddition = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const handleReduction = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={handleReduction}
          className="
          w-10 
          h-10 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-primary 
          text-black 
          cursor-pointer 
          hover:opacity-80 
          transition"
        >
          <AiOutlineMinus />
        </div>
        <div className="font-semibold text-xl text-black">{value}</div>
        <div
          onClick={handleAddition}
          className="
          w-10 
          h-10 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-primary 
          text-black 
          cursor-pointer 
          hover:opacity-80 
          transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};
