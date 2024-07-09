import styles from './css/Course.module.css';
import Image from 'next/image';
import Course from '../app/types'
import Link from 'next/link';

  const CourseCard: React.FC<Course> = ({ title, description, imageUrl, id }) => {
    return (
      <div>
        <Link href={`/courses/${id}`}>
        <Image src={imageUrl} alt={title} width={1000} height={1000} />
        <h2>{title}</h2>
        <p>{description}</p>
        </Link>
      </div>
    );
  };
  
  export default CourseCard;