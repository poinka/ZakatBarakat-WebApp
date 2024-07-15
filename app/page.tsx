import Header from "../components/Header";
import CarouselOfCourses from "@/components/CarouselOfCourses"; // Adjust the path based on your file structure
import { supabase } from "@/lib/supabase";
import Course from "./types";
import ArticleCard from "@/components/ArticleCard";
import StartEducation from "@/components/StartEducation";
import NewsCard from "@/components/NewsCard";

export default async function HomePage() {
  const { data: courses } = await supabase.from("courses").select();
  const { data: articles } = await supabase.from("articles").select();
  const { data: news } = await supabase.from("news").select();
  if (articles && articles?.length >= 2) {
    const article1 = articles[0];
    const article2 = articles[1];
    return (
      <div className=''>
        <div className="bg-ornaments bg-ornaments-sm p-10">
          <StartEducation />

          <div className="mt-16">
            <h1 className='text-lg md:text-xl lg:text-2xl lg:pl-72 pl-9'>Recommended Courses</h1>
            <CarouselOfCourses courses={courses as Course[]} />
          </div>
          </div>
          <div className="p-10 bg-ornaments-right">
            <h1 className='text-lg md:text-xl lg:text-2xl lg:pl-72 pl-9'>Recommended Articles</h1>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 max-w-screen-lg">
                <ArticleCard {...article1}>

                </ArticleCard>
                <ArticleCard {...article2}>

                </ArticleCard>
              </div>
            </div>
            <h1 className='text-lg md:text-xl lg:text-2xl lg:pl-72 pl-9'>Financial News</h1>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 max-w-screen-lg">
                {news?.map((newPiece) => (
                  <NewsCard key={newPiece.id} {...newPiece} />
                ))}
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
