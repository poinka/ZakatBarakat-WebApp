'use client'
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import errorWrapper from "../error";
import LoadingPage from "../loading";
import Fund from "@/app/types"
import Link from "next/link";
  
export default function Funds() {
    const { data: funds, error } = useSWR<Fund[]>('funds', fetcher);
    if (error) return errorWrapper(error);
    if (!funds) return LoadingPage();

    console.log(funds)

    return (
        <div className="bg-ornaments">
        <div className="flex justify-center items-center py-10 pt-20">
        <Link href={funds[0].url} className="bg-white shadow-xl p-6 mb-6 w-3/4 max-w-md hover:scale-105" style={{borderRadius: "15px"}} >
                <div>
                    <h2 className="text-2xl text-green-800 mb-2">{funds[0].name}</h2>
                    <p className="text-gray-600">{funds[0].description}</p>
                </div>
            </Link>
        </div>
        <div className="flex justify-center pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg "> 
                {funds.slice(1).map((fund, index) => (
                <Link key={index} href={fund.url} className="bg-white shadow-xl p-6 mb-6 md:max-w-md w-3/4 m-auto hover:scale-105" style={{borderRadius: "15px"}} >
                    <div>
                        <h2 className="text-2xl text-green-800 mb-2">{fund.name}</h2>
                        <p className="text-gray-600">{fund.description}</p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
        </div>
      );
}
