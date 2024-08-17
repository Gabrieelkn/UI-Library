"use client";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (searchQuery.length > 0) {
      window.alert("Not found");
    }
    // Add your search logic here
  };

  return (
    <div className="w-3/4 h-96 grid place-items-center relative m-auto">
      <input
        type="text"
        className="w-full dark:placeholder:text-gray-300 px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 dark:bg-slate-700 ease-in-out dark:text-white"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="absolute p-4 rounded-lg inset-y-0 right-0 flex items-center"
      >
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
    </div>
  );
}
