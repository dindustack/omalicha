import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container overflow-hidden">
      <div className="absolute w-full h-screen flex justify-center items-center">
        <div className="header">
          <span className="relative text-[40vw]">4</span>
          <span className="relative text-[40vw]">0</span>
          <span className="relative text-[40vw]">4</span>
        </div>
      </div>

      <div className="fixed bottom-[5rem] w-full flex justify-center">
        <Link
          href="/"
          className="relative top-[30px] underline underline-offset-2 text-[1.4rem] transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
