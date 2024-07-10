import Course from "@/app/types";
import { supabase } from "@/lib/supabase";

type Props = {
  params: {
    id: string;
  };
};

async function getById(
  jsonObject: Record<string, any>,
  id: string,
): Promise<any | undefined> {
  for (let objKey in jsonObject) {
    let obj = jsonObject[objKey];
    if (obj.id.toString() === id.toString()) {
      return obj;
    }
  }
  return undefined; // Explicitly return undefined if no matching object is found
}

export default async function CoursePage({ params: { id } }: Props) {
  try {
    const { data: courses } = await supabase.from("courses").select().eq("id", id);
    if (!courses || courses.length === 0) {
      // Handle the case where no course is found for the ID
      return <div>Course not found.</div>;
    }
    const course = courses[0] as Course;
    return (
      <>
        <h1 style={{ color: "black" }}>Course {course.title}</h1>
        <p>{course.description}</p>
        <img src={course.imageUrl} />
      </>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
