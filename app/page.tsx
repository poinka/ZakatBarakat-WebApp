import Header from '../components/Header';
import CarouselOfCourses from '@/components/CarouselOfCourses';// Adjust the path based on your file structure
import { promises as fs } from 'fs';

export default async function HomePage () {
  const file = await fs.readFile(process.cwd() + '/app/data/coursesData.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <>
      <Header />
      {/* <CoursesCarousel courses={courses} /> */}
      {/* Other content for your homepage */}
      <h1>Recommended Courses</h1>
      <CarouselOfCourses courses={data} />
    </>
  );
};

