'use client'
import ArticleList from "@/components/ArticleList";
import Article from "../types";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "../error";
import LoadingPage from "../loading";

export default function ArticlesPage() {
  const { data: articles, error } = useSWR<Article[]>('articles', fetcher)
  if (error) return errorWrapper(error);
  if (!articles) return LoadingPage();
  return (
    <div className="bg-ornaments">
      <ArticleList articles={articles} />
    </div>
  );
}
