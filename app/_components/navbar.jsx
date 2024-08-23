"use client";
import { useUser } from "@/lib/currentUserProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { links } from "@/utils/links";

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
        className="relative order-first grid place-items-center rounded-lg border-none hover:cursor-pointer md:hidden"
        onClick={toggleMenu}
        aria-label="hamburger"
      >
        <svg
          className="fill-current dark:text-white h-7 w-7"
          width="15px"
          height="15px"
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
        } shadow-sm dark:shadow-white dark:bg-muted bg-white shadow-slate-700 no-scrollbar md:bg-transparent fixed top-0 left-0 w-3/4 max-w-md h-[100vh] overflow-scroll md:overflow-hidden md:min-h-px flex justify-center items-start transition-all duration-500 ease-in-out z-50 md:static md:transform-none md:opacity-100 md:w-full md:max-w-full md:h-[100%] md:shadow-none`}
      >
        <ul className="list-none gap-2 w-full flex justify-around flex-col items-start pb-2 pl-2 md:pl-0 mb-10 md:flex-row md:justify-center md:items-center md:pt-0 md:h-full md:pb-0">
          <NavItem href="/components" text="Components" />
          <NavItem href="/documentation" text="Documentation" />
          <NavItem
            href={user ? "/all-access" : "/sign-in"}
            text={
              <>
                <span className="text-mainColor dark:text-foreground">
                  {" "}
                  Get all access
                </span>
                <span className="text-mainColor dark:text-foreground ml-1 transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                  ➜
                </span>
              </>
            }
          />
          <div className="md:hidden">
            {links.map(([title, link]) => (
              <li
                key={title}
                className="w-full text-start p-2 lg:border-none lg:text-center"
              >
                <Link
                  href={link}
                  className="block w-100 text-primary dark:text-foreground md:text-inherit no-underline hover:text-[#0056b3]"
                >
                  {title}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </>
  );
}

function NavItem({ href, text, key }) {
  return (
    <li
      key={key}
      className="w-full md:text-center p-2 lg:border-none lg:text-center"
    >
      <Link
        href={href}
        className="text-mainColor dark:text-foreground md:text-inherit font-semibold no-underline hover:text-[#0056b3]"
      >
        {text}
      </Link>
    </li>
  );
}
