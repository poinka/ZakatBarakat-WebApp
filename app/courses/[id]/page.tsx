import Course from "@/app/types";
import { supabase } from "@/lib/supabase";
import MainEducationalCard from "@/components/MainEducationalCard";


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
    console.log(course);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-ornaments">
          <div className="card-container md:scale-90">
            <MainEducationalCard course={course} />
          </div>
        
        <div className="long-description md:mt-10">What is this course about:
        <p className="long-description pt-8 md:pt-10">{course.description}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
