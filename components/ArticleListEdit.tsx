"use client"; 

import React, { useState } from 'react';
import Article from "../app/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ArticleListEditProps {
    article: Article;
    onDelete: (id: number) => void;
}

export default function ArticleListEdit({ article, onDelete }: ArticleListEditProps) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        onDelete(article.id);
        setShowConfirm(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', margin: '5%' }}>
            <div>{article.title}</div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="secondary" asChild>
                    <Link href={`/admin/editArticles/${article.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" onClick={() => setShowConfirm(true)}>Delete</Button>
            </div>
            {showConfirm && (
                <div>
                    <p>Are you sure you want to delete this article?</p>
                    <Button variant="destructive" onClick={handleDelete}>Confirm</Button>
                    <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
                </div>
            )}
        </div>
    );
}
