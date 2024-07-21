import Link from 'next/link';
import News from "@/app/types"

const NewsCard: React.FC<News> = ({ title, text, link }) => {
  return (
    <Link target="_blank" href={link} style={{ textDecoration: 'none' }}>
      <div className="w-11/12 max-w-md p-6 m-5 bg-inherit large-inner-shadow hover:shadow-lg transition-shadow duration-300 md:h-80 lg:h-56 h-80" style={{borderRadius: "15px"}}>
        <h2 className="text-lg font-bold mb-2 text-green-900">{title}</h2>
        <p className="" style={{color: "#667266"}}>{text}</p>
      </div>
    </Link>
  );
};

export default NewsCard;