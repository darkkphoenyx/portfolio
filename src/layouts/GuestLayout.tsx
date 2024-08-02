import { ReactNode, useRef } from "react";
import Navbar from "../components/navbar/Navbar";

interface GuestLayoutProps {
  children: ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProps) {
  const parentRef = useRef(null);

  return (
    <div
      className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden"
      ref={parentRef}
    >
      <Navbar paRrf={parentRef} />
      <div
        className={`bg-[--color-bg] text-[--color-text] h-full transition-all duration-1000`}
      >
        {children}
      </div>
    </div>
  );
}
