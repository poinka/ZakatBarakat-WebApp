'use client'
import { supabase } from "@/lib/supabase";
import ArticleListEdit from "@/components/ArticleListEdit";
import Article from "@/app/types";
import React from 'react';

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
            </div>
        );
    } else {
        return (
            <h1>There are no articles</h1>
        );
    }
}
