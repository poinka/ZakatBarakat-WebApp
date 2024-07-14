import Header from "../components/Header";
import CarouselOfCourses from "@/components/CarouselOfCourses"; // Adjust the path based on your file structure
import { supabase } from "@/lib/supabase";
import Course from "./types";
import ArticleCard from "@/components/ArticleCard";

export default async function HomePage() {
  const { data: courses } = await supabase.from("courses").select();
  const { data: articles } = await supabase.from("articles").select();
  if (articles && articles?.length >= 2) {
    const article1 = articles[0];
    const article2 = articles[1];
    return (
      <div className=''>
        <Header />
        <div className="mt-5 mb-5">
          <h1 className='text-center'>Recommended Courses</h1>
          <CarouselOfCourses courses={courses as Course[]} />
          <h1 className='text-center'>Interesting Articles</h1>
          <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-screen-lg">
            <ArticleCard {...article1}>

            </ArticleCard>
            <ArticleCard {...article2}>

            </ArticleCard>
          </div>
        </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className=''>
        <Header />
        <h1 className='text-center'>Recommended Courses</h1>
        <CarouselOfCourses courses={courses as Course[]} />
        </div>
    )
  }
  
}
