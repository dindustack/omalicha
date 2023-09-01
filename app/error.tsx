"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(error.message);
  }, [error]);

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title="Ooops!!" subtitle="Something went wrong" />
      <div className="w-48 mt-4">
        <Button colored label="Try Again" onClick={() => reset()} />
      </div>
    </div>
  );
}
