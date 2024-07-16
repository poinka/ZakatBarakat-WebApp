import Image from "next/image";
import Course from "../app/types"; // Ensure you have the correct import for Course type
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const CourseCard: React.FC<Course> = ({ title, description, imageUrl, id }) => {
  return (
    <Link href={`/courses/${id}`} style={{ textDecoration: "none"}}>
      <Card className='aspect-square shadow-xl' style={{borderRadius: "15px"}}>
        <CardContent className="flex flex-col p-3">
          <div className="relative w-20 sm:w-24 lg:w-full m-auto">
            <Image
              src={imageUrl}
              alt={title}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-t-lg"
            />
          </div>
          <div className="flex-grow p-0 text-center">
            <h2 className="text-xs sm:text-xs lg:text-sm pt-4">{title}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
