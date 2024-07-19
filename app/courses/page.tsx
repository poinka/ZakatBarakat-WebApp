'use client'
import useSWR from 'swr'
import CourseList from "@/components/CourseList";
import Course from "../types";
import { fetcher } from "@/lib/fetcher";
import LoadingPage from '../loading';
import errorWrapper from '../error';

export default function CoursesPage() {
  const { data: courses, error } = useSWR<Course[]>('courses', fetcher)
  if (error) return errorWrapper(error);
  if (!courses) return LoadingPage();
  return (
    <div className="bg-ornaments">
      <CourseList courses={courses} />
    </div>
  );
}
