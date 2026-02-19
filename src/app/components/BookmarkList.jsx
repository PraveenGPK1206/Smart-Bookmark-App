
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import BookmarkCard from "./BookmarkCard";

export default function BookmarkList({ user }) {
  const [bookmarks, setBookmarks] = useState([]);

  const fetchBookmarks = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    setBookmarks(data || []);
  };

  useEffect(() => {
    fetchBookmarks();

    const channel = supabase
      .channel("bookmarks-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks" },
        fetchBookmarks
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  if (bookmarks.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        No bookmarks yet. Add one 🚀
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto hide-scrollbar">
      {bookmarks.map((bookmark, index) => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} number={index + 1} />
      ))}
    </div>
  );
}
