'use client'
import { supabase } from "@/lib/supabase";
import ArticleListEdit from "@/components/ArticleListEdit";
import Article from "@/app/types";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";

export default function EditArticles() {
    const { data: articles, error } = useSWR<Article[]>('articles', fetcher)
    if (error) return errorWrapper(error);
    if (!articles) return LoadingPage();

    const handleDelete = async (id: number) => {
        await supabase.from("articles").delete().eq('id', id);
        window.location.reload();
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (articles != null) {
        return (
            <div>
                {articles.map((article) => (
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
