'use client'
import News from "@/app/types";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

async function createNews(formData: FormData) {
  const { title, text, link } = Object.fromEntries(formData);

  const { data: news } = await supabase
    .from("news")
    .insert([{ title: title, text: text, link: link}])
    .select();

  if (!news || news.length === 0) {
    return <div>Fund not found.</div>;
  }

  const neww = news[0] as News;
  console.log(neww)
  redirect(`/`);
}

export default function NewFundForm() {

  return (
    <form
      action={createNews}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
          News Title
        </label>
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="text" className="block text-lg font-medium text-gray-700">
          Content
        </label>
        <textarea
          placeholder="Short text content (up to 230 characters)"
          required
          name="text"
          maxLength={230}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="link" className="block text-lg font-medium mb-2 text-gray-700">URL</label>
        <input
          required
          name="link"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="URL to the piece of news"
        ></input>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add a piece of News
      </button>
      <Link href="/admin" className="m-6">
      <Button variant="outline">
        Go back
      </Button>
      </Link>
    </form>
  );
}