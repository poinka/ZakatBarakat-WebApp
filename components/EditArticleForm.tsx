'use client'
import Article from "@/app/types";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";

async function updateArticle(formData: FormData, articleId: number) {
  const { title, description, body} = Object.fromEntries(formData);

  await supabase
    .from("articles")
    .update({ title: title, description: description, body: body })
    .eq("id", articleId);

  window.location.href = `/articles/${articleId}`; 
}

type EditArticleProp = {
  articleId: number;
};

export default function EditFundsForm({ articleId }: EditArticleProp) {
  const [articleData, setArticleData] = useState<Article | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateArticle(formData, articleId);
  };

  useEffect(() => {
    async function fetchData() {
      const { data: article } = await supabase
        .from("articles")
        .select("*")
        .eq("id", articleId)
        .single();
      setArticleData(article);
    }
    if (!isNaN(articleId)) {
        fetchData();
      }
  }, [articleId]);

  if (!articleData) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit}
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
          defaultValue={articleData.title}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          maxLength={200}
          placeholder="Short description (up to 200 characters)"
          required
          name="description"
          defaultValue={articleData.description}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">Content</h3>
        <textarea
          required
          name="content"
          defaultValue={articleData.body}
          maxLength={5000}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter article text (up to 5000 characters)"
        ></textarea>
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Changes
      </button>
      <Link href="/admin/editArticles">
      <button
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-300 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
      >
        Go back
      </button>
      </Link>
    </form>
  );
}
