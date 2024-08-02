import { Link, useLocation } from "react-router-dom";
import { RefObject, useEffect } from "react";
import Logo from "../../logo/Logo";
import "./Navbar.css";

interface HeaderProps {
  paRrf: RefObject<HTMLDivElement>; // Adjust the type according to the actual element or component
}
export default function Navbar({ paRrf }: HeaderProps) {
  const location = useLocation();
  useEffect(() => {
    paRrf.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, paRrf]);

  const linkStyle = "mx-10 hover:text-[#F2FA9B]/60 ";
  return (
    <>
      <div className="h-10 bg-[#001E2B]">
        <p className="text-xs pl-10 pt-3 text-white font-mono">
          <a href="https://drive.usercontent.google.com/download?id=1PwKO1MOBPbMaGkvlqPse-fFzqU_HvQHY&export=download&authuser=0">
            <span className="bg-[#B1FF05] text-black font-thin p-1 px-2 rounded-3xl mr-3">
              Download CV
            </span>
          </a>
          Feel free to download My CV.
        </p>
      </div>
      <div className="bg-[--color-bg] text-[--color-text] sticky top-0 shadow-2xl overflow-hidden z-50">
        <div className="container mx-auto flex col-span-12">
          <div className="logo col-span-2">
            <Logo></Logo>
          </div>
          <div className="nav-link col-span-10 w-full my-auto">
            <ul className="flex items-center justify-end">
              <li>
                <Link className={linkStyle} to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={linkStyle} to={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className={linkStyle} to={"/projects"}>
                  My Projects
                </Link>
              </li>
              <li>
                <Link className={linkStyle} to={"/contact"}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
