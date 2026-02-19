"use client";

import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-white text-center">
        Smart Bookmark App
      </h1>
      <p className="mb-8 text-center text-gray-300 max-w-md">
        Sign in with Google to manage your bookmarks securely and access them anywhere.
      </p>

      <button
        onClick={handleLogin}
        className="flex items-center justify-center bg-[#4285F4] hover:bg-[#357ae8] active:scale-95 transition-transform px-6 py-3 rounded-lg shadow-md text-white font-semibold space-x-2"
      >
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
