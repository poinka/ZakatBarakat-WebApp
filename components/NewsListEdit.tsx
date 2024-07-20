"use client"; 

import React, { useState } from 'react';
import News from "../app/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NewsListEditProps {
    newsInit: News;
    onDelete: (id: number) => void;
}

export default function CourseListEdit({ newsInit, onDelete }: NewsListEditProps) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        onDelete(newsInit.id);
        setShowConfirm(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', margin: '5%' }}>
            <div>{newsInit.title}</div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="secondary" asChild>
                    <Link href={`editNews/${newsInit.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" onClick={() => setShowConfirm(true)}>Delete</Button>
            </div>
            {showConfirm && (
                <div>
                    <p className="text-xs lg:text-lg">Are you sure you want to delete this piece of news?</p>
                    <Button variant="destructive" onClick={handleDelete}>Confirm</Button>
                    <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
                </div>
            )}
        </div>
    );
}
