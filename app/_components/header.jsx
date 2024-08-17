"use client";

import Navbar from "./navbar";
import { DarkModeToggle } from "./darkModeToggle";
import UserIcon from "./userIcon";
import { useUser } from "@/lib/currentUserProvider";
import Link from "next/link";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";
import SearchBar from "@/shop/searchBar/ex";
import { usePathname } from "next/navigation";

export default function Header() {
  const { user, setUser } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();

      if (data) setUser(data.user);
    }
    if (!user) {
      fetchUser();
    }
  }, [user, setUser]);

  return (
    pathname !== "/sign-in" && (
      <header className=" h-[20vh] md:h-[10vh]">
        <div className="container flex-wrap md:flex-nowrap h-full flex justify-between items-center">
          <Link
            className="flex h-1/2 items-center justify-center w-[100px] h-[100px]" // Container styles
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80" // Adjust width as needed
              height="80" // Adjust height as needed
              fill="green"
              viewBox="0 0 300 80"
              className="text-center"
            >
              <text
                x="0"
                y="70"
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                fontSize="80"
                className="fill-mainColor"
                fontWeight="bold"
              >
                dev
              </text>

              <text
                x="170"
                y="70"
                fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                fontSize="80"
                className="fill-current dark:text-white"
                fontWeight="bold"
              >
                UI
              </text>
            </svg>
          </Link>

          <SearchBar />
          <Navbar />
          <div className="flex gap-3">
            <UserIcon user={user} />
            <DarkModeToggle />
          </div>
        </div>
      </header>
    )
  );
}
