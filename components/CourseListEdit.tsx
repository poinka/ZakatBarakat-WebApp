"use client"; 

import React, { useState } from 'react';
import Course from "../app/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CourseListEditProps {
    courseInit: Course;
    onDelete: (id: number) => void;
}

export default function CourseListEdit({ courseInit, onDelete }: CourseListEditProps) {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        onDelete(courseInit.id);
        setShowConfirm(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ccc', margin: '5%' }}>
            <div>{courseInit.title}</div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button variant="secondary" asChild>
                    <Link href={`editCourses/${courseInit.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" onClick={() => setShowConfirm(true)}>Delete</Button>
            </div>
            {showConfirm && (
                <div>
                    <p className="text-xs lg:text-lg">Are you sure you want to delete this course?</p>
                    <Button variant="destructive" onClick={handleDelete}>Confirm</Button>
                    <Button variant="outline" onClick={() => setShowConfirm(false)}>Cancel</Button>
                </div>
            )}
        </div>
    );
}
