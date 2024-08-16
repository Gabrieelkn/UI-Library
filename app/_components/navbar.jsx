"use client";
import { useUser } from "@/lib/currentUserProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { user } = useUser();
  const path = usePathname();
  const navRef = useRef();
  const hamburgerRef = useRef();

  const toggleMenu = () => {
    setVisible(!visible);
    console.log(visible);
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

  return (
    <>
      <button
        ref={hamburgerRef}
        className="order-first w-10 h-10 grid place-items-center rounded-lg border-none hover:cursor-pointer lg:hidden"
        onClick={toggleMenu}
        aria-label="hamburger"
      >
        <svg
          className="fill-current dark:text-white"
          width="20px"
          height="20px"
          viewBox="0 0 52 52"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
          <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
          <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z" />
        </svg>
      </button>
      <nav
        ref={navRef}
        className={`${
          visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } shadow-lg bg-transparent bg-white lg:bg-transparent absolute top-full left-0 w-full max-w-md h-[90vh] flex justify-center items-start transition-all duration-500 ease-in-out z-50 lg:static lg:transform-none lg:opacity-100 lg:w-full lg:max-w-full lg:h-[100%] lg:shadow-none`}
      >
        <ul className="list-none h-[80%] gap-2 w-full flex justify-around flex-col items-center pb-2 md:flex-row md:justify-center md:items-center md:pt-0 md:h-full md:pb-0">
          <NavItem href="/components" text="Components" />
          <NavItem href="/documentation" text="Documentation" />

          <li className="inline-flex items-center transition-colors duration-300 ease hover:text-blue-500 w-full text-start p-2 lg:border-none lg:text-center">
            <Link
              href={user ? "/all-access" : "/sign-in"}
              className="text-mainColor hover:text-blue-500"
            >
              Get all access{" "}
              <span className="ml-1 transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                ➜
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function NavItem({ href, text }) {
  return (
    <li className="w-full text-start p-2 lg:border-none lg:text-center">
      <Link
        href={href}
        className="text-mainColor md:text-inherit font-semibold no-underline hover:text-[#0056b3]"
      >
        {text}
      </Link>
    </li>
  );
}
