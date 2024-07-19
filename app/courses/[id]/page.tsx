import Course from "@/app/types";
import { supabase } from "@/lib/supabase";
import MainEducationalCard from "@/components/MainEducationalCard"
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};


export default async function CoursePage({ params: { id } }: Props) {
  try {
    const { data } = await supabase.from("courses").select().eq("id", id).single();
    if (!data) {
      // Handle the case where no course is found for the ID
      return <div>Course not found.</div>;
    }
    const course = data as Course;
    console.log(course)
    return (
      <Link href={`/courses/${course.id}/${course.cardIDs[0]}`} style={{textDecoration: "none", color: "black"}}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <MainEducationalCard 
          course={course}
        />
        <p>{course.longDescription}</p>
      </div>
      </Link>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
