import { ReactNode, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../footer/Footer";

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
      <div className={`bg-[--color-bg] h-screen transition-all duration-700`}>{children}</div>
      <Footer></Footer>
    </div>
  );
}
