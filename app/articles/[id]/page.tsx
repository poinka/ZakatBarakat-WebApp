import Article from "@/app/types";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function ArticlePage({ params: { id } }: Props) {
  try {
    const { data: articles } = await supabase.from("articles").select().eq("id", id);
    if (!articles || articles.length === 0) {
      // Handle the case where no article is found for the ID
      return <div>Article not found.</div>;
    }
    const article = articles[0] as Article;
    return (
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">{article.title}</h1>
      <div className="flex justify-center mb-6">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-lg"
          objectFit="cover"
        />
      </div>
      <p className="text-lg md:text-xl text-gray-700 mb-4">{article.description}</p>
      <article className="prose prose-lg max-w-none">
        {article.body}
      </article>
    </div>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
