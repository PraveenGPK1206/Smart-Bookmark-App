"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AddBookmarkForm({ user, closeModal }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !url) return;

    setLoading(true);

    const { error } = await supabase.from("bookmarks").insert([
      {
        title,
        url,
        user_id: user.id
      }
    ]);

    setLoading(false);

    if (!error) {
      setTitle("");
      setUrl("");
      closeModal();
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#1f3850] p-6 rounded-lg w-[400px] text-white relative">

      <button
        onClick={closeModal}
        className="absolute right-4 top-2 text-lg font-semibold"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold mb-4">Add Bookmark</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          spellCheck={false}
          className="w-full p-2 rounded text-[#cdd9e5] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#668ba7]"
        />

        <input
          type="url"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          spellCheck={false}
          className="w-full p-2 rounded text-[#cdd9e5] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#668ba7]"
        />

        <button
          disabled={loading}
          className="w-full bg-[#b3d2ea] text-[#1f3850] py-2 rounded font-semibold hover:scale-105  active:scale-95 active:shadow-inner transition-all duration-200 ease-in-out"
        >
          {loading ? "Adding..." : "Add Bookmark"}
        </button>

      </form>
    </div>
  );
}
