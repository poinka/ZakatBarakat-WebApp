import { supabase } from "@/lib/supabase";
import CourseList from "@/components/CourseList";
import Course from "../types";

export default async function CoursesPage() {
  const { data: courses} = await supabase.from("courses").select();
  
  return (
    <div className="bg-ornaments">
      <CourseList courses={courses as Course[]} />
    </div>
  );
}
