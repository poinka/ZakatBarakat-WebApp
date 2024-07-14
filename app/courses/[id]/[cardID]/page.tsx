type Props = {
    params: {
      cardID: number;
    };
  };
  
  
export default async function CardPage({ params: { cardID } }: Props) {
    return (
        <h1>Card {cardID}</h1>
    )
}