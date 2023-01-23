import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500
      `}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} />
          ) : (
            <img className="w-[160px]" src={LogoWhite} />
          )}
        </a>

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-base items-center uppercase lg:gap-x-8
      `}
        >
          {["home", "rooms", "restaurant", "spa", "contact"].map((elem) => {
            return (
              <a href="" className="hover:text-accent transition">
                {elem}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
