import Header from '../components/Header';
import CoursesCarousel from '../components/CarouselOfCourses'; // Adjust the path based on your file structure
import { promises as fs } from 'fs';

export default async function HomePage () {
  const file = await fs.readFile(process.cwd() + '/src/app/data/coursesData.json', 'utf8');
  const data = JSON.parse(file);
  return (
    <>
      <Header />
      {/* <CoursesCarousel courses={courses} /> */}
      {/* Other content for your homepage */}
      <CoursesCarousel courses={data} />
    </>
  );
};

