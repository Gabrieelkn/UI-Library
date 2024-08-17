"use client";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function NavigationBar() {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const path = usePathname();
  const navRef = useRef();
  const hamburgerRef = useRef();

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const showDropdown = (index) => {
    setDropdownVisible(index);
  };

  const hideDropdown = () => {
    setDropdownVisible(null);
  };

  useEffect(() => {
    setVisible(false);
    setDropdownVisible(null); // Close any open dropdowns
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setVisible(false);
        setDropdownVisible(null); // Close any open dropdowns
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    ["Home", "/#", []],
    [
      "Team",
      "/#",
      [
        ["Our Mission", "/mission"],
        ["Our Values", "/values"],
      ],
    ],
    [
      "Projects",
      "/#",
      [
        ["Ongoing", "/ongoing-projects"],
        ["Completed", "/completed-projects"],
      ],
    ],
    ["Reports", "/#", []],
  ];

  return (
    <div className="bg-mainColor p-1 grid place-items-end relative overflow-visible">
      <button
        ref={hamburgerRef}
        className="w-10 h-10 grid place-items-center rounded-md border-none bg-transparent lg:hidden hover:cursor-pointer"
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
        } bg-mainColor shadow-[0px_5px_15px_rgba(0,0,0,0.35)] absolute w-full border-t border-slate-800 top-full h-[50vh] left-0 flex justify-center items-start transition-all duration-500 ease-in-out z-[99] lg:static lg:order-1 lg:transform-none lg:bg-transparent lg:border-none lg:z-0 lg:w-full lg:max-w-[1000px] lg:h-auto lg:shadow-none lg:opacity-100 lg:text-sm`}
      >
        <ul className="list-none h-full gap-2 w-full flex justify-around flex-col items-center pb-2 lg:flex-row lg:justify-center lg:items-center lg:pt-0 lg:h-full lg:pb-0">
          {navLinks.map(([title, href, dropdownLinks], index) => (
            <li
              key={title}
              className="relative w-full text-start p-2 lg:border-none lg:text-center"
              onMouseEnter={() => showDropdown(index)}
              onMouseLeave={hideDropdown}
            >
              <div className="flex justify-between items-center lg:justify-center">
                <Link
                  className="text-white uppercase transition-all duration-300 ease-in-out hover:font-bold hover:cursor-pointer"
                  href={href}
                >
                  {title}
                </Link>
                {dropdownLinks.length > 0 && (
                  <span className="ml-2 text-white">
                    {dropdownVisible === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                )}
              </div>
              {dropdownLinks.length > 0 && (
                <ul
                  className={`${
                    dropdownVisible === index
                      ? "block transition-all duration-500 ease-in-out"
                      : "transition-all duration-500 ease-in-out hidden"
                  } left-0 top-full mt-2 w-full bg-mainColor lg:absolute lg:mt-full lg:top-auto lg:left-auto lg:w-auto`}
                >
                  {dropdownLinks.map(([subTitle, subHref]) => (
                    <li key={subTitle} className="lg:inline-block">
                      <Link
                        className="block py-2 text-white lg:px-2 lg:hover:text-blue-300"
                        href={subHref}
                      >
                        {subTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
