'use client'
import Fund from "@/app/types";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

async function createFund(formData: FormData) {
  const { name, description, url } = Object.fromEntries(formData);

  const { data: funds } = await supabase
    .from("funds")
    .insert([{ name: name, description: description, url: url}])
    .select();

  if (!funds || funds.length === 0) {
    return <div>Fund not found.</div>;
  }

  const fund = funds[0] as Fund;
  redirect(`/funds`);
}

export default function NewFundForm() {

  return (
    <form
      action={createFund}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Fund Name
        </label>
        <input
          type="text"
          placeholder="Fund name"
          required
          name="name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="description" className="block text-lg font-medium text-gray-700">
          Description
        </label>
        <textarea
          placeholder="Short description (up to 150 characters)"
          required
          name="description"
          maxLength={150}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="url" className="block text-lg font-medium text-gray-700">URL</label>
        <input
          required
          name="url"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Url to the site of the fund"
        ></input>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Fund
      </button>
      <Link href="/admin" className="m-6">
      <Button variant="outline">
        Go back
      </Button>
      </Link>
    </form>
  );
}