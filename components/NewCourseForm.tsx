import Course from "@/app/types";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

async function createCourse(formData: FormData) {
  "use server";

  const { title, description, imageUrl } = Object.fromEntries(formData);

  const { data: courses } = await supabase
    .from("courses")
    .insert([{ title: title, description: description, imageUrl: imageUrl }])
    .select();

    if (!courses || courses.length === 0) {
      // Handle the case where no course is found for the ID
      return <div>Course not found.</div>;
    }
  
  const course = courses[0] as Course;

  redirect(`/courses/${course.id}`);
}

export default function NewCourseForm() {
  return (
    <form className="newCourseForm" action={createCourse}>
      <input type="text" placeholder="title" required name="title" />
      <textarea placeholder="description" required name="description" />

      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}
