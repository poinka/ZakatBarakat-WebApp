import Header2 from "@/components/Header2";
import { supabase } from "@/lib/supabase";
import ArticleList from "@/components/ArticleList";
import Article from "../types";

export default async function ArticlesPage() {
  const { data: articles} = await supabase.from("articles").select();
  return (
    <div>
      <Header2 />
      <ArticleList articles={articles as Article[]} />
    </div>
  );
}
