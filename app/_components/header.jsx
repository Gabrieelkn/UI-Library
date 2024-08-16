"use client";

import Navbar from "./navbar";
import { DarkModeToggle } from "./darkModeToggle";
import UserIcon from "./userIcon";
import { useUser } from "@/lib/currentUserProvider";
import Link from "next/link";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";
import SearchBar from "@/shop/searchBar/ex";

export default function Header() {
  const { user, setUser } = useUser();

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase.auth.getUser();
      console.log(data);

      if (data) setUser(data.user);
      if (error) console.error("Error fetching user:", error);
    }
    if (!user) {
      fetchUser();
    }
  }, [user, setUser]);

  return (
    <header className="relative h-[10vh]">
      <div className="container h-full flex justify-between items-center">
        <Link className="hidden lg:block" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 300 80"
          >
            <text
              y="55"
              fontamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              fontSize="50"
              className="fill-mainColor"
              fontWeight="bold"
            >
              dev
            </text>

            <text
              x="90"
              y="55"
              fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
              fontSize="50"
              className="fill-current dark:text-white"
              fontWeight="bold"
            >
              UI
            </text>
          </svg>
        </Link>
        <SearchBar />
        <Navbar />
        <div className="flex">
          {user && <UserIcon />}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
