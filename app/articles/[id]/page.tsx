import Article from "@/app/types";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

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
      <div className="pt-16 bg-ornaments">
      <Card className="p-5" style={{width: "70%", margin: "auto"}}>
      <CardTitle className="text-sm md:text-3xl font-bold text-start p-5 text-green-900">{article.title}</CardTitle>
      <CardContent className="">
        <p className="text-xs md:text-sm text-green-950">
        {article.body}
        </p>
      </CardContent>
      <div className="flex justify-center items-center">
      <Link href="/articles" className="p-5 bg-green-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-900 text-sm md:text-base lg:text-lg">Go back</Link>
      </div>
    </Card>
    </div>
    );
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course data.</div>;
  }
}
