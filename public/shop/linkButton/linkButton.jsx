import Link from "next/link";

export default function LinkButton() {
  return (
    <div className="w-full h-96 grid place-items-center">
      <Link
        href="/documentation"
        className="px-4 py-2 rounded focus:outline-none transition-transform duration-300 transform hover:scale-105 shadow-lg bg-mainColor text-white hover:bg-indigo-600 text-sm py-3 px-5"
      >
        See docs
      </Link>
    </div>
  );
}
