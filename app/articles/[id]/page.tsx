import Article from "@/app/types";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import MarkdownDisplay from "@/components/MarkdownDisplay";
import useSWR from "swr";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";
import { fetcherForOne } from "@/lib/fetcherForOne";

type Props = {
  params: {
    id: string;
  };
};

export default async function ArticlePage({ params: { id } }: Props) {
    const { data: articles, error, isLoading } = useSWR<Article[]>(`articles ${id}`, fetcherForOne)
    if (error) return errorWrapper(error);
    if (isLoading) return LoadingPage();
    if (!articles || articles.length === 0) {
      // Handle the case where no article is found for the ID
      return <div>Article not found.</div>;
    }
    const article = articles[0];
    return (
      <div className="pt-16 bg-ornaments">
      <Card className="p-5 m-auto w-10/12 lg:w-2/3">
      <CardTitle className="text-xl md:text-4xl font-bold text-center p-5 pb-10 lg:p-10 text-green-900">{article.title}</CardTitle>
      <CardContent className="">
        <p style={{ whiteSpace: 'pre-wrap', color: " #1D411D" }} className="text-l lg:p-10 md:text-l text-green-950">
        <MarkdownDisplay text={article.body} >
        </MarkdownDisplay>
        </p>
      </CardContent>
      <div className="flex justify-center items-center">
      <Link href="/articles" className="p-5 bg-green-800 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-900 text-sm md:text-base lg:text-lg">Go back</Link>
      </div>
    </Card>
    </div>
    );
}
