'use client'
import Fund from "@/app/types";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import Link from "next/link";

async function updateNews(formData: FormData, fundId: number) {
  const { name, description, url} = Object.fromEntries(formData);

  await supabase
    .from("funds")
    .update({ name: name, description: description, url: url })
    .eq("id", fundId);

  window.location.href = `/admin/editFunds`; 
}

type EditFundsProp = {
  fundId: number;
};

export default function EditFundsForm({ fundId }: EditFundsProp) {
  const [fundData, setFundData] = useState<Fund | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateNews(formData, fundId);
  };

  useEffect(() => {
    async function fetchData() {
      const { data: fund } = await supabase
        .from("funds")
        .select("*")
        .eq("id", fundId)
        .single();
      setFundData(fund);
    }
    if (!isNaN(fundId)) {
        fetchData();
      }
  }, [fundId]);

  if (!fundData) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Fund Name
        </label>
        <input
          type="text"
          placeholder="Fund name"
          required
          name="name"
          defaultValue={fundData.name}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          maxLength={230}
          placeholder="Short description (up to 230 characters)"
          required
          name="description"
          defaultValue={fundData.description}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
          URL
        </label>
        <input
          type="text"
          placeholder="URL to the site of the fund"
          required
          name="url"
          defaultValue={fundData.url}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Changes
      </button>
      <Link href="/admin/editFunds">
      <button
        className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-300 hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
      >
        Go back
      </button>
      </Link>
    </form>
  );
}
