'use client'
import { supabase } from "@/lib/supabase";
import News from "@/app/types";
import NewsListEdit from "@/components/NewsListEdit"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";

export default function EditNews() {
    const { data: news, error } = useSWR<News[]>('news', fetcher)
    if (error) return errorWrapper(error);
    if (!news) return LoadingPage();

    const handleDelete = async (id: number) => {
        await supabase.from("news").delete().eq('id', id);
        window.location.reload();
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (news != null) {
        return (
            <div>
                {news.map((neww) => (
                    <NewsListEdit key={neww.id} newsInit={neww} onDelete={handleDelete} />
                ))}
                <div className="w-20 m-auto">
                <Link href="/admin">
                    <Button variant="outline">
                        Go back
                    </Button>
                </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-20 m-auto">
            <h1>There are no news</h1>
            <Link href="/admin">
                <Button variant="outline">
                    Go back
                </Button>
            </Link>
            </div>
        );
    }
}
