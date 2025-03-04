import CourseCard from "./CourseCard";
import Course from "../app/types";
import RecommendedCourse from "./RecommendedCourse";

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <div className="pt-16 md:px-32">
      <RecommendedCourse {...courses[0]}></RecommendedCourse>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 pt-10 p-6">
      {courses.map((course) => (
        <div key={course.id} className="" style={{width: "100%", margin: "auto"}}>
        <CourseCard {...course} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseList;
