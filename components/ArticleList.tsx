import ArticleCard from "./ArticleCard";
import Article from "../app/types";

const ArticleList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="flex justify-center pt-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-screen-lg">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
    </div>
  );
};

export default ArticleList;
