"use client"
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export default function LogoutButton() {
    // const router = useRouter();
    const handleLogout = async () => {
        redirect("/login");
    }

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg"
        >
            Logout
        </button>
    );
}
