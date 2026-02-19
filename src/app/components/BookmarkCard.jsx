
"use client";

import { supabase } from "@/lib/supabaseClient";

export default function BookmarkCard({ bookmark, number }) {

  const handleDelete = async () => {
    await supabase
      .from("bookmarks")
      .delete()
      .eq("id", bookmark.id);
  };

  const favicon = `https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=64`;

  return (
    <div className="bg-[#1f3850] text-[#cdd9e5] p-4 rounded-lg shadow 
                    hover:scale-[1.03] transition-all duration-200">

      <div className="flex items-center gap-3 mb-2">

        <img
          src={favicon}
          alt="favicon"
          className="w-8 h-8 rounded"
        />

        <h3
          className="font-semibold truncate"
          title={bookmark.title}
        >
          {number}. {bookmark.title}
        </h3>

      </div>

      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        title={bookmark.url}
        className="text-blue-400 text-sm truncate block hover:underline mb-3"
      >
        {bookmark.url}
      </a>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded 
                   hover:scale-105 active:scale-95 
                   transition-all duration-150"
      >
        Delete
      </button>

    </div>
  );
}
