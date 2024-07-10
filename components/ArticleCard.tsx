import styles from "./css/Course.module.css";
import Image from "next/image";
import Article from "../app/types"; // Ensure you have the correct import for Course type
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const ArticleCard: React.FC<Article> = ({
  title,
  description,
  imageUrl,
  id,
}) => {
  return (
    <Link href={`/articles/${id}`} style={{ textDecoration: "none" }}>
      <Card className="w-full h-full" style={{ margin: "5%" }}>
        <CardContent className="flex flex-col h-full">
          <div className="relative w-full aspect-w-1 aspect-h-1">
            <Image
              src={imageUrl}
              alt={title}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-t-lg"
            />
          </div>
          <div className="flex-grow p-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
