import CourseCard from "../../components/CourseCard"; // Adjust the path based on your file structure
import { JSX, Key } from "react";
import Header2 from "../../components/Header2";
import { promises as fs } from "fs";
import CourseList from "@/components/CourseList";

export default async function CoursesPage() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/coursesData.json",
    "utf8",
  );
  const courses = JSON.parse(file);
  // const courses = await (await fetch ("http://localhost:3000/api/courses")).json();
  return (
    <div>
      <Header2 />
      <CourseList courses={courses} />
    </div>
  );
}
