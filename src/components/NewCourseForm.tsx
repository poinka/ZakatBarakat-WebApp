import { redirect } from "next/navigation";

async function createCourse(data: FormData) {
    'use server';

    const {title, body, imageUrl} = Object.fromEntries(data);

    const response = await fetch("http://localhost:3000/api/Courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({title, body, imageUrl,  id: 4}),
    })

    const course = await response.json();

    redirect(`/Courses/${course.id}`)
}

export default function NewCourseForm() {
    return (
        <form className="newCourseForm" action={createCourse}>
            <input type="text" placeholder="title" required name="title" />
            <textarea placeholder="content" required name="body" />

            <div>
                <input type="submit" value="Add post" />
            </div>
        </form>
    )
}