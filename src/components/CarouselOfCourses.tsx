'use client'
import Course from '../app/types';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import { FC } from 'react';
import { useState } from 'react';
import styles from './css/CarouselOfCourses.module.css'

interface CoursesCarouselProps {
  courses: Course[];
}

const CourseCarousel: FC<CoursesCarouselProps> = ({ courses }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {courses.map((course, index) => (
        // Use course.id or another unique identifier instead of index as key
        <Carousel.Item key={course.id || index} className={styles.courseItem}>
          <Image src={course.imageUrl} alt={course.title} width={500} height={300} /> {/* Specify dimensions for Image */}
          <Carousel.Caption>
            <h3 className={styles.title}>{course.title}</h3>
            <p className={styles.description}>{course.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CourseCarousel;
