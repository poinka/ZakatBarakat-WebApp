import React from 'react';
import Course from "@/app/types";
import Link from 'next/link';
import Image from 'next/image';
import Card from "@/app/types"
type MainEducationalCardProps = {
  course: Course;
};

const MainEducationalCard: React.FC<MainEducationalCardProps> = ({ course }) => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm aspect-square h-1/2" style={{borderRadius: "15px"}}>
        <div className="h-6 w-24 rounded-full mb-4 shadow-inner text-center pl-5">
          <span className="block text-sm  text-gray-700 py-1 w-2/3">{course.level}</span>
        </div>

        <h1 className="text-2xl font-semibold mb-4 pl-3">{course.title}</h1>
        <div className="rounded-md">
          {course.imageUrl && <Image src={course.imageUrl} alt="Image" className="h-full w-full object-cover rounded-md" width={300} height={300} />}
        </div>

        
          <div className="m-auto w-3/4 pt-10" >
            <Link href={`/courses/${course.id}/${course.cardIDs[0]}`} style={{ textDecoration: "none", color: "black" }}>
            <button className="bg-green-800 text-white font-semibold py-2 px-4 rounded-md m-auto w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
              Start course
            </button>
            </Link>
          </div>
       
      </div>
  );
};

export default MainEducationalCard;
