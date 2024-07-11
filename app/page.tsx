import Header from "../components/Header";
import CarouselOfCourses from "@/components/CarouselOfCourses"; // Adjust the path based on your file structure
import { supabase } from "@/lib/supabase";
import Course from "./types";

export default async function HomePage() {
  const { data } = await supabase.from("courses").select();
  return (
    <>
      <Header />
      {/* <CoursesCarousel courses={courses} /> */}
      {/* Other content for your homepage */}
      <h1>Recommended Courses</h1>
      <CarouselOfCourses courses={data as Course[]} />
    </>
  );
}
