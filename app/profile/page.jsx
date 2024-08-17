"use client";
import { useUser } from "@/lib/currentUserProvider";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spinner from "@/shop/spinner/spinner";

export default function User() {
  const { user } = useUser(); // Get the user object
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      router.push("/"); // Redirect to homepage or sign-in page after logout
    }
  };

  return !user ? (
    <Spinner />
  ) : (
    <div className="relative container">
      <div className="flex items-center gap-2 p-2 rounded-lg focus:outline-none">
        <Image
          src={user.user_metadata.avatar_url}
          width={50}
          height={50}
          className=" rounded-full"
          alt="profile"
        />
        <span className="font-semibold">
          {user?.user_metadata?.full_name || "User"}
        </span>
      </div>

      <div className="mt-2 w-48 border rounded-lg shadow-lg">
        <ul>
          <li className="px-4 py-2  hover:bg-gray-100 hover:text-mainColor">
            <span className="block font-medium">Email:</span>
            <span className="block text-sm ">{user?.email}</span>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-mainColor">
            <span className="block font-medium">Name:</span>
            <span className="block text-sm">
              {user?.user_metadata?.full_name || "N/A"}
            </span>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100 hover:text-mainColor">
            <span className="block font-medium">Provider:</span>
            <span className="block text-sm">
              {user?.app_metadata.provider || "N/A"}
            </span>
          </li>
          <li>
            <button
              className="px-4 py-2 text-red-700
              cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
