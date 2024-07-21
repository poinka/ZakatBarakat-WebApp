import Course from "@/app/types";
import MainEducationalCard from "@/components/MainEducationalCard";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";
import { fetcherForOne } from "@/lib/fetcherForOne";
import useSWR from "swr";

type Props = {
  params: {
    id: number;
  };
};

export default async function CoursePage({ params: { id } }: Props) {
    const { data: courses, error, isLoading } = useSWR<Course[]>(`courses ${id}`, fetcherForOne)
    if (error) return errorWrapper(error);
    if (isLoading) return LoadingPage();
    if (!courses || courses.length === 0) {
      // Handle the case where no course is found for the ID
      return <div>Course not found.</div>;
    }
    const course = courses[0] as Course;
    console.log(course);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 pt-20 bg-ornaments">
          <div className="w-3/4 flex justify-center">
            <MainEducationalCard course={course} />
          </div>
        
        <div className="long-description md:mt-10 p-16 pt-8 text-lg font-bold md:w-1/2">What is this course about:
        <p style={{ whiteSpace: 'pre-wrap' }} className="long-description pt-8 md:pt-10 text-lg font-normal">
          <MarkdownDisplay text={course.description} />
          </p>
        </div>
      </div>
    );
}
