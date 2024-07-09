import CourseCard from '../../components/CourseCard'; // Adjust the path based on your file structure
import { JSX, Key } from 'react';
import Header2 from '../../components/Header2';
import { promises as fs } from 'fs';


export default async function CoursesPage() {
  // const file = await fs.readFile(process.cwd() + '/src/app/data/coursesData.json', 'utf8');
  // const data = JSON.parse(file);
  const data = await (await fetch ("http://localhost:3000/api/courses")).json();
  return (
    <div>
      <Header2 />
      <h2 style={{textAlign: 'center'}}> Recommended Courses </h2>
      {data.map((course: JSX.IntrinsicAttributes & { title: string; description: string; imageUrl: string; id: number}, index: Key | null | undefined) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

