import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UserIcon() {
  return (
    <Button variant="secondary">
      <Link href="/profile" className=" rounded-full" aria-label="User Profile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-white"
        >
          <path
            fillRule="evenodd"
            d="M12 2a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 116 0 3 3 0 01-6 0zM4 19a8 8 0 0116 0v1H4v-1zm2 0a6 6 0 0112 0v1H6v-1z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </Button>
  );
}
