import Course from "@/app/types";
import CourseCard from "./CourseCard";

export default function RecommendedCourse(course: Course) {
    return (
      <div className='flex-row flex p-6 pt-16 justify-center items-center'> 
        <div className="w-full lg:w-52 m-0">
          <CourseCard {...course} />
        </div>
        <div className="flex flex-col items-start text-start text-green-800 text-sm lg:text-xl p-5 w-40">
          <p>recommended for beginners</p>
          <hr className="w-40 border-t-2 border-green-900 mt-2" />
        </div>
        </div>
  );
}