# Smart Bookmark App

A simple bookmark manager built using Next.js App Router, Supabase Auth, Realtime Database, and Tailwind CSS.

Users can sign in with Google, add bookmarks, view them in real time, and delete their own bookmarks.

---

## Live Demo

Deployed on Vercel  
Live URL: <ADD AFTER DEPLOY>

GitHub Repo: <ADD REPO LINK>

---

## Tech Stack

- Next.js (App Router)
- Supabase (Auth + Database + Realtime)
- Tailwind CSS
- Google OAuth

---

## Features

- Google login (no email/password)
- Add bookmark (title + URL)
- Bookmarks are private per user
- Real-time updates without refresh
- Delete bookmarks
- Responsive UI

---

## How it Works

1. User logs in using Google OAuth via Supabase.
2. Supabase stores user session.
3. Bookmarks are stored in the `bookmarks` table with `user_id`.
4. Real-time subscription listens for database changes.
5. UI updates automatically without page refresh.

---

## Database Structure

Table: bookmarks

- id (uuid)
- title (text)
- url (text)
- user_id (uuid)
- created_at (timestamp)

Row Level Security (RLS) ensures users only access their own bookmarks.

---

## Problems Faced & Solutions

### 1. Google OAuth redirect issue
**Problem:** After login, the app was not redirecting correctly.

**Solution:**  
Configured correct redirect URLs in Supabase Auth settings and Vercel environment variables.

---

### 2. Real-time updates not working initially
**Problem:** UI was not updating automatically.

**Solution:**  
Used Supabase Realtime subscription with `postgres_changes` and refetched bookmarks.

---

### 3. User privacy (important requirement)
**Problem:** All users could see all bookmarks initially.

**Solution:**  
Enabled Row Level Security (RLS) and added policy:

```sql
auth.uid() = user_id
