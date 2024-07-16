import React from 'react';
import Course from "@/app/types";
import Link from 'next/link';
import Card from "@/app/types"
type MainEducationalCardProps = {
  course: Course;
};

const MainEducationalCard: React.FC<MainEducationalCardProps> = ({ course }) => {
  return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full" style={{borderRadius: "15px"}}>
        <div className="bg-gray-200 h-6 w-24 rounded-full mb-4">
          <span className="block text-xs text-center text-gray-700 py-1">{course.level}</span>
        </div>
        <h1 className="text-2xl font-semibold mb-4">{course.title}</h1>
        <div className="bg-gray-300 h-24 rounded-md">
          {course.imageUrl && <img src={course.imageUrl} alt="Image" className="h-full w-full object-cover rounded-md" />}
        </div>
      </div>
  );
};

export default MainEducationalCard;
