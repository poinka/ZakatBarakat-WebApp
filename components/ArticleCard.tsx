import Image from "next/image";
import Article from "../app/types"; // Ensure you have the correct import for Article type
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ArticleCard: React.FC<Article> = ({ title, description, imageUrl, id }) => {
  return (
    <Link className='hover:scale-105' href={`/articles/${id}`} style={{ textDecoration: "none" }}>
      <Card className="w-auto h-auto m-5 shadow-lg rounded-lg overflow-hidden bg-white p-6 relative z-10 border border-gray-200">
        <CardContent className="">
          <h2 className="text-lg font-bold mb-4 text-green-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
