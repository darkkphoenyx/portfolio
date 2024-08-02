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
      <div className="bg-white h-screen w-screen">
        <div className={`mx-auto transition-all duration-700`}>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}
