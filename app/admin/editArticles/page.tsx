'use client'
import { supabase } from "@/lib/supabase";
import ArticleListEdit from "@/components/ArticleListEdit";
import Article from "@/app/types";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function editCourse() {
    const { data: articles } = await supabase.from("articles").select();

    const handleDelete = async (id: number) => {
        await supabase.from("courses").delete().eq('id', id);
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (articles != null) {
        return (
            <div>
                {articles.map((article: Article) => (
                    <ArticleListEdit key={article.id} article={article} onDelete={handleDelete} />
                ))}
                <div className="w-20 m-auto">
                <Link href="/admin">
                    <Button variant="outline">
                        Go back
                    </Button>
                </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-20 m-auto">
            <h1>There are no articles</h1>
            <Link href="/admin">
                <Button variant="outline">
                    Go back
                </Button>
            </Link>
            </div>
        );
    }
}
