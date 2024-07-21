import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Course from "../app/types";
import Image from "next/image";
import styles from "./css/CarouselOfCourses.module.css";
import Link from "next/link";

interface CoursesCarouselProps {
  courses: Course[];
}

export default function CarouselOfCourses({ courses }: CoursesCarouselProps) {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        <CarouselPrevious
          className={`${styles.carouselButton} ${styles.carouselPrevious}`}
        />
        <CarouselContent className={`${styles.carouselContent} -ml-5`}>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className={styles.courseLink}
            >
              <CarouselItem
                className={`${styles.courseItem} md:basis-1/2 lg:basis-1/3 basis-1 pl-10`}
              >
                <Card className="aspect-square shadow-md" style={{borderRadius: "15px"}}>
                  <CardContent className="aspect-square items-center justify-center">
                    <Image
                      src={course.imageUrl}
                      layout="responsive"
                      alt={course.title}
                      width={300}
                      height={300}
                      className={styles.courseImage}
                    />
                    <CardTitle className={`p-2 pt-8 ${styles.title}`}>
                      {course.title}
                    </CardTitle>
                  </CardContent>
                </Card>
              </CarouselItem>
            </Link>
          ))}
        </CarouselContent>
        <CarouselNext
          className={`${styles.carouselButton} ${styles.carouselNext}`}
        />
      </Carousel>
    </div>
  );
}
