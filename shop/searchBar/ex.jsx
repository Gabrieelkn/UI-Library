"use client";
import { useState } from "react";
import { links } from "@/utils/links";
import Link from "next/link";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLinks, setFilteredLinks] = useState([]); // Use a separate state for filtered results

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Convert query to lowercase for case-insensitive search
    setSearchQuery(query);

    const filtered = links.filter(
      (link) => link[0].toLowerCase().includes(query) // Search titles only, case-insensitive
    );
    setFilteredLinks(filtered); // Update filteredLinks state
  };

  return (
    <div className="w-full order-2 md:order-none md:w-[30%] grid place-items-center relative m-auto">
      <input
        type="text"
        className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out dark:bg-slate-700 dark:placeholder:text-gray-300 dark:text-white"
        placeholder="Search components..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button className="absolute p-4 rounded-lg inset-y-0 right-0 flex items-center">
        <svg
          className="w-5 h-5 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </button>
      {!!filteredLinks.length && searchQuery.length > 1 && (
        <ul className="mt-2 w-full bg-background no-scrollbar overflow-scroll  rounded-md absolute top-full z-20 shadow-sm shadow-foreground list-none">
          {filteredLinks.map(([title, value]) => (
            <li
              onClick={() => setSearchQuery("")}
              key={title}
              className=" px-4 mb-1 w-full"
            >
              <Link href={value}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
