import { supabase } from "@/lib/supabase";
import Header2 from "@/components/Header2";
import CourseList from "@/components/CourseList";
import Course from "../types";

export default async function CoursesPage() {
  const { data: courses} = await supabase.from("courses").select();
  
  return (
    <div>
      <Header2 />
      <CourseList courses={courses as Course[]} />
    </div>
  );
}
