import CourseCard from "./CourseCard";
import Course from "../app/types";

const CourseList: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  gap-6 p-10">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
