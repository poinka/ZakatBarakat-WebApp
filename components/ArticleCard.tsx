import Image from "next/image";
import Article from "../app/types"; // Ensure you have the correct import for Article type
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ArticleCard: React.FC<Article> = ({ title, description, imageUrl, id }) => {
  return (
    <Link href={`/articles/${id}`} style={{ textDecoration: "none" }}>
      <Card className="w-80 h-90 m-5 shadow-lg rounded-lg overflow-hidden bg-beige p-4 relative z-10 -mt-10 mx-4 border border-gray-300">
        <CardContent className="">
        {/* <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div> */}
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-md">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
