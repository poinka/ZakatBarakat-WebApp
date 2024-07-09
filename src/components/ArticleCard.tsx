import styles from './css/Course.module.css';
import Image from 'next/image';
import Article from '../app/types'
import Link from 'next/link';

  const ArticleCard: React.FC<Article> = ({ title, description, imageUrl, id }) => {
    return (
      <div>
        <Link href={`articles/${id}`}>
        <Image src={imageUrl} alt={title} width={1000} height={1000} />
        <h2>{title}</h2>
        <p>{description}</p>
        </Link>
      </div>
    );
  };
  
  export default ArticleCard;