"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Navbar({ user }) {

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="text-xl font-bold">Bookmark App</h1>

      <div>
        <span className="mr-4">{user.user_metadata?.name || user.user_metadata?.full_name || user.email}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:scale-105  active:scale-95 active:shadow-inner transition-all duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
