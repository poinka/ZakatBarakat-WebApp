'use client'
import News from "@/app/types";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";

async function updateNews(formData: FormData, newsId: number) {
  const { title, text, link} = Object.fromEntries(formData);

  await supabase
    .from("news")
    .update({ title: title, text: text, link: link })
    .eq("id", newsId);

  window.location.href = `/`; 
}

type EditNewsFormProps = {
  newsId: number;
};

export default function EditCourseForm({ newsId }: EditNewsFormProps) {
  const [newsData, setNewsData] = useState<News | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateNews(formData, newsId);
  };

  useEffect(() => {
    async function fetchData() {
      const { data: neww } = await supabase
        .from("news")
        .select("*")
        .eq("id", newsId)
        .single();
      setNewsData(neww);
    }
    if (!isNaN(newsId)) {
        fetchData();
      }
  }, [newsId]);

  if (!newsData) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          News Title
        </label>
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          defaultValue={newsData.title}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          maxLength={230}
          placeholder="Short text content (up to 230 characters)"
          required
          name="text"
          defaultValue={newsData.text}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          URL
        </label>
        <input
          type="text"
          placeholder="URL to the piece of news"
          required
          name="url"
          defaultValue={newsData.link}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Changes
      </button>
      <Link href="/admin/editNews">
      <button
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-300 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
      >
        Go back
      </button>
      </Link>
    </form>
  );
}
