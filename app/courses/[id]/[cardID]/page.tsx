import {supabase } from "@/lib/supabase";
import Card from "@/app/types"

type Props = {
    params: {
      cardID: number;
    };
  };
  
  
export default async function CardPage({ params: { cardID } }: Props) {
  const { data: cards } = await supabase.from("cards").select().eq("id", cardID);
  if (!cards || cards.length === 0) {
    // Handle the case where no card is found for the ID
    return <div>Information not found.</div>;
  }
  const card = cards[0] as Card;

    return (
      <>
        <h1>Card {cardID}</h1>
        <p>{card.body}</p>
        </>
    )
}