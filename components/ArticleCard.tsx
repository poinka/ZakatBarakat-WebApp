import Article from "../app/types"; // Ensure you have the correct import for Article type
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ArticleCard: React.FC<Article> = ({ title, description, imageUrl, id }) => {
  return (
    <Link className='hover:scale-105' href={`/articles/${id}`} style={{ textDecoration: "none" }}>
      <Card className="md:h-80 lg:h-56 h-96 m-3 md:max-w-md shadow-xl rounded-lg overflow-hidden bg-white p-5 border border-gray-200" style={{borderRadius: "15px"}}>
        <CardContent className="p-0">
          <h2 className="text-lg font-bold mb-4 text-green-900">{title}</h2>
          <p className="" style={{color: "#9EAC9E"}}>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
