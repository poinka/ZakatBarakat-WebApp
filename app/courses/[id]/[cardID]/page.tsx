'use client'
import {supabase } from "@/lib/supabase";
import Card from "@/app/types"
import Link from "next/link";
import Course from "@/app/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EducationalCard from "@/components/EducationalCard";

type Props = {
    params: {
      cardID: number;
    };
  };
  
  async function fetchCourseWithCards(courseId: number) {
    const { data: courses, error: courseError } = await supabase
    .from("courses")
    .select("*, cardIDs")
    .eq("id", courseId)
    .single();

  if (courseError || !courses) {
    throw new Error("Course not found");
  }

  const course = courses as Course;
  const { data: cards, error: cardsError } = await supabase
    .from("cards")
    .select("*")
    .in("id", course.cardIDs);

  if (cardsError) {
    throw new Error("Cards not found");
  }

  return {
    course,
    cards: cards as Card[]
  };
}

export default async function CardPage({ params: { cardID } }: Props) {
  const params = useParams();
  const courseId = params.id;
  const cardId = params.cardID;

  const courseIdNum = Number(courseId);
  const cardIdNum = Number(cardId);

  const [cards, setCards] = useState<Card[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isNaN(courseIdNum)) {
      fetchCourseWithCards(courseIdNum)
        .then(({ cards }) => {
          setCards(cards);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [courseIdNum]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (currentCardIndex >= cards.length) {
    return <div>
      <p>Congrats! You've completed the course.</p>
      <Link href="/">On main page</Link>
      </div>;
  }

  const currentCard = cards[currentCardIndex];

  return (
    <div className="flex justify-center flex-col">
      <div >
        <h2>Card {currentCardIndex + 1}</h2>
        <EducationalCard {...currentCard}></EducationalCard>
      </div>
      <button className="m-4" onClick={handleNextCard}>Next</button>
    </div>
  );
}