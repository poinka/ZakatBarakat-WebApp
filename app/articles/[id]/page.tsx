import Article from "@/app/types";
import { supabase } from "@/lib/supabase";

type Props = {
  params: {
    id: string;
  };
};

async function getById(
  jsonObject: Record<string, any>,
  id: string,
): Promise<any | undefined> {
  for (let objKey in jsonObject) {
    let obj = jsonObject[objKey];
    if (obj.id.toString() === id.toString()) {
      return obj;
    }
  }
  return undefined; // Explicitly return undefined if no matching object is found
}

export default async function ArticlePage({ params: { id } }: Props) {
  try {
    const { data: articles } = await supabase.from("articles").select().eq("id", id);
    if (!articles || articles.length === 0) {
      // Handle the case where no article is found for the ID
      return <div>Article not found.</div>;
    }
    const article = articles[0] as Article;
    return (
      <>
        <h1 style={{ color: "black" }}>Article {article.title}</h1>
        <p>{article.description}</p>
        <img src={article.imageUrl} />
      </>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
