'use client'
import { supabase } from "@/lib/supabase";
import CourseListEdit from "@/components/CourseListEdit";
import Course from "@/app/types";
import React from 'react';

export default async function editCourse() {
    const { data: courses } = await supabase.from("courses").select();

    const handleDelete = async (id: number) => {
        await supabase.from("courses").delete().eq('id', id);
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (courses != null) {
        return (
            <div>
                {courses.map((course: Course) => (
                    <CourseListEdit key={course.id} courseInit={course} onDelete={handleDelete} />
                ))}
            </div>
        );
    } else {
        return (
            <h1>There are no courses</h1>
        );
    }
}
