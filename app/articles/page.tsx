import { supabase } from "@/lib/supabase";
import ArticleList from "@/components/ArticleList";
import Article from "../types";

export default async function ArticlesPage() {
  const { data: articles} = await supabase.from("articles").select();
  return (
    <div>
      <ArticleList articles={articles as Article[]} />
    </div>
  );
}
