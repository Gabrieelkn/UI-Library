"use client";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function NavigationBar() {
  const [visible, setVisible] = useState(false);
  const path = usePathname();
  const navRef = useRef();
  const hamburgerRef = useRef();

  const toggleMenu = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }, [path, setVisible]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    ["Home", "/#"],
    ["Team", "/#"],
    ["Projects", "/#"],
    ["Reports", "/#"],
  ];

  return (
    <div className="bg-mainColor p-1 grid place-items-end relative overflow-visible">
      <button
        ref={hamburgerRef}
        className="w-10 h-10  grid place-items-center rounded-md border-none bg-transparent lg:hidden hover:cursor-pointer"
        onClick={toggleMenu}
        aria-label="hamburger"
      >
        <RiMenu2Fill className="w-9 h-9 mx-auto text-white" />
      </button>

      <nav
        ref={navRef}
        className={`${
          visible
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-[1000px] opacity-0"
        } bg-mainColor shadow-[0px_5px_15px_rgba(0,0,0,0.35)] absolute w-full border-t border-slate-800  top-full h-[50vh] left-0 flex justify-center items-start transition-all duration-500 ease-in-out z-[99] lg:static lg:order-1 lg:transform-none lg:bg-transparent lg:border-none lg:z-0 lg:w-[60%] lg:max-w-[1000px] lg:h-auto lg:shadow-none lg:opacity-100 lg:text-sm`}
      >
        <ul className="list-none h-full gap-2 w-full flex justify-around flex-col items-center pb-2 lg:flex-row lg:justify-center lg:items-center lg:pt-0 lg:h-full lg:pb-0">
          {navLinks.map(([title, href]) => (
            <li
              key={title}
              className="w-full text-start p-2 lg:border-none lg:text-center"
            >
              <Link
                className="flex justify-center items-start text-white uppercase transition-all duration-300 ease-in-out hover:font-bold hover:cursor-pointer"
                href={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
