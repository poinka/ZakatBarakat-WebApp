'use client'
import { supabase } from "@/lib/supabase";
import CourseListEdit from "@/components/CourseListEdit";
import Course from "@/app/types";
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";

export default function EditCourse() {
    const { data: courses, error } = useSWR<Course[]>('courses', fetcher)
    if (error) return errorWrapper(error);
    if (!courses) return LoadingPage();

    const handleDelete = async (id: number) => {
        await supabase.from("courses").delete().eq('id', id);
        window.location.reload();
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (courses != null) {
        return (
            <div className="bg-inherit pt-20">
                {courses.map((course) => (
                    <CourseListEdit key={course.id} courseInit={course} onDelete={handleDelete} />
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
            <h1>There are no courses</h1>

            <Link href="/admin" className="m-auto">
                <Button variant="outline">
                    Go back
                </Button>
            </Link>
            </div>
        );
    }
}
