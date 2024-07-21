'use client'
import { supabase } from "@/lib/supabase";
import Card from "@/app/types";
import Link from "next/link";
import Course from "@/app/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EducationalCard from "@/components/EducationalCard";
import { useSwipeable } from 'react-swipeable';

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
    cards: cards as Card[],
  };
}

export default function CardPage({ params: { cardID } }: Props) {
  const params = useParams();
  const courseId = params.id;
  const cardId = params.cardID;

  const courseIdNum = Number(courseId);
  const cardIdNum = Number(cardId);

  const [cards, setCards] = useState<Card[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState('left');

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
    if (currentCardIndex < cards.length && !animating) {
      setSwipeDirection('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
        setAnimating(false);
      }, 300); // Match the transition duration
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0 && !animating) {
      setSwipeDirection('left');
      setAnimating(true);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => prevIndex - 1);
        setAnimating(false);
      }, 300); // Match the transition duration
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextCard,
    onSwipedRight: handlePreviousCard,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const progress = ((currentCardIndex) / cards.length) * 100;

  return (
    <div className="flex justify-center flex-col items-center h-screen pt-20 bg-ornaments">
      <div className="w-full max-w-md">
        
        {currentCardIndex < cards.length ? (
          <div 
          {...swipeHandlers}
          className={`relative ${
            animating
              ? swipeDirection === 'left'
                ? 'swipe-enter swipe-exit-right'
                : 'swipe-enter-right swipe-exit'
              : ''
          }`}
          >
            <EducationalCard {...cards[currentCardIndex]} />
            <div className="flex justify-between w-full mt-4">
              <button onClick={handlePreviousCard} className="hidden md:block">
                ← Previous
              </button>
              <button onClick={handleNextCard} className="hidden md:block">
                Next →
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="p-6 pt-16 bg-white rounded-lg shadow-md space-y-4 max-w-md aspect-square mx-auto mt-6 w-3/4" style={{ borderRadius: "15px" }}>
              <div className="flex flex-col justify-between h-full">
                <p className="list-disc space-y-2 px-6 text-xl" style={{color: " #1D411D"}}>
                  Congratulations! You have completed the course.
                </p>

                <div className="mt-auto">
                  <Link href="/">
                    <button className="bg-green-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                      On main page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        )}
        <div className="m-20">
          <div className="h-4 rounded-full overflow-hidden bg-gray-300">
            <div
              className="h-full bg-green-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
