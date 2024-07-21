import Link from 'next/link';
import News from "@/app/types"

const NewsCard: React.FC<News> = ({ title, text, link }) => {
  return (
    <Link target="_blank" href={link} style={{ textDecoration: 'none' }}>
      <div className="w-11/12 max-w-md p-6 m-5 bg-inherit large-inner-shadow hover:shadow-lg transition-shadow duration-300 h-52" style={{borderRadius: "15px"}}>
        <h2 className="text-lg font-bold mb-2 text-green-900">{title}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
    </Link>
  );
};

export default NewsCard;