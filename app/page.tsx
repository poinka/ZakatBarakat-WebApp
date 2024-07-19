'use client'
import Header from "../components/Header";
import CarouselOfCourses from "@/components/CarouselOfCourses"; // Adjust the path based on your file structure
import Course from "./types";
import Article from "./types";
import News from "./types";
import ArticleCard from "@/components/ArticleCard";
import StartEducation from "@/components/StartEducation";
import NewsCard from "@/components/NewsCard";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import LoadingPage from "./loading";
import { useState } from "react";
import TelegramWebApp from "@/components/TelegramWebApp";

export default function HomePage() {
  const [userId, setUserId] = useState<number | null>(null);
  const { data: courses } = useSWR<Course[]>('courses', fetcher)
  const { data: articles } = useSWR<Article[]>("articles", fetcher)
  const { data: news } = useSWR<News[]>('news', fetcher)
  if (!courses || !articles || !news) return LoadingPage();
  if (articles && articles?.length >= 2) {
    const article1 = articles[0];
    const article2 = articles[1];
    return (
      <div className=''>
        <TelegramWebApp setUserId={setUserId} />
        <div className="bg-ornaments bg-ornaments-sm p-10">
          <StartEducation />

          <div className="mt-16">
            <h1 className='text-lg md:text-xl lg:text-2xl lg:pl-72 pl-9 pb-6'>Recommended Courses</h1>
            <CarouselOfCourses courses={courses} />
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
            <h1 className='pt-10 text-lg md:text-xl lg:text-2xl lg:pl-72 pl-9'>Financial News</h1>
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
        <CarouselOfCourses courses={courses} />
        </div>
    )
  }
  
}
