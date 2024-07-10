import ArticleCard from "./ArticleCard";
import Article from "../app/types";

const ArticleList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  gap-6 p-10">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
