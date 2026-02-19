"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import AddBookmarkForm from "./AddBookmarkForm";
import BookmarkList from "./BookmarkList";

export default function Dashboard({ user }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar user={user} />

      <div className="p-4 max-w-6xl mx-auto">

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:scale-105 active:scale-95 active:shadow-inner transition-all duration-200 ease-in-out"
        >
          Add Bookmark
        </button>

        <BookmarkList user={user} />

      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <AddBookmarkForm
              user={user}
              closeModal={() => setShowModal(false)}
            />
        </div>
      )}
    </div>
  );
}

