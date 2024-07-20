'use client'
import { supabase } from "@/lib/supabase";
import Fund from "@/app/types";
import Link from "next/link";
import FundsListEdit from "@/components/FundsListEdit";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "@/app/error";
import LoadingPage from "@/app/loading";

export default function Editfunds() {
    const { data: funds, error } = useSWR<Fund[]>('funds', fetcher)
    if (error) return errorWrapper(error);
    if (!funds) return LoadingPage();

    const handleDelete = async (id: number) => {
        await supabase.from("funds").delete().eq('id', id);
        window.location.reload();
        // You might want to re-fetch the courses list here or remove the deleted course from the local state.
    };

    if (funds != null) {
        return (
            <div>
                {funds.map((fund) => (
                    <FundsListEdit key={fund.id} fund={fund} onDelete={handleDelete} />
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
            <h1>There are no articles</h1>
            <Link href="/admin">
                <Button variant="outline">
                    Go back
                </Button>
            </Link>
            </div>
        );
    }
}
