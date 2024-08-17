"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";

export default function ComponentsNavMenu() {
  const pathname = usePathname();

  return (
    <>
      <h3>Components</h3>
      <ul className="mt-7">
        {links.map(([title, href]) => (
          <li key={title} className="flex items-center gap-1">
            <Link
              className={`${
                pathname === href ? "text-blue-500" : "text-slate-400"
              }`}
              href={href}
            >
              {title}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 200 200"
            >
              <circle cx="100" cy="100" r="90" fill="gold" />
              <polygon
                points="100,40 119,80 160,85 130,115 140,155 100,135 60,155 70,115 40,85 81,80"
                fill="white"
              />
            </svg>
          </li>
        ))}
      </ul>
    </>
  );
}
