'use client'
import Article from "@/app/types";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

async function createArticle(formData: FormData) {
  const { title, description, imageUrl, content } = Object.fromEntries(formData);

  const { data: articles } = await supabase
    .from("articles")
    .insert([{ title: title, description: description, body: content}])
    .select();

  if (!articles || articles.length === 0) {
    return <div>Course not found.</div>;
  }

  const article = articles[0] as Article;
  redirect(`/articles/${article.id}`);
}

export default function NewArticleForm() {

  return (
    <form
      action={createArticle}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Article Title
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
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          placeholder="Short description"
          required
          name="description"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Content</h3>
        <textarea
          required
          name="content"
          maxLength={5000}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter article text (up to 5000 characters)"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Article
      </button>
      <Link href="/admin" className="m-6">
      <Button variant="outline">
        Go back
      </Button>
      </Link>
    </form>
  );
}