import { ReactNode, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Preloader from "../components/preloader/Preloader";
import { useLoading } from "./LoadingContent";

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { loading } = useLoading();

  return (
    <div
      className="max-h-screen max-w-screen overflow-y-auto overflow-x-hidden"
      ref={parentRef}
    >
      {loading && <Preloader />}
      {!loading && (
        <>
          <Navbar paRrf={parentRef} />
          <div className="bg-[--color-bg] text-[--color-text] h-full transition-all duration-1000">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default GuestLayout;
