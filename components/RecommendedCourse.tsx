import Course from "@/app/types";
import CourseCard from "./CourseCard";

export default function RecommendedCourse(course: Course) {
    return (
      <div className='flex-row flex p-6 pt-16 justify-center items-center'> 
        <div className="lg:w-72 m-0 w-40">
          <CourseCard {...course} />
        </div>
        <div className="flex flex-col items-start text-end text-green-800 text-sm lg:text-xl p-5 w-40">
          <p className="pl-8 md:p-10">recommended for beginners</p>
          <hr className="w-32 md:w-44 border-t-2 border-green-900 mt-2" />
        </div>
        </div>
  );
}