'use client'
import Course from "@/app/types";
import Card from "@/app/types";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

async function updateCourse(formData: FormData, courseId: number) {
  const { title, description, imageUrl } = Object.fromEntries(formData);

  let index = 0;
  const cardIds: number[] = [];
  while (formData.get(`${index}`) !== null) {
    const cardId = formData.get(`cardId-${index}`);
    const body = formData.get(`${index}`);
    if (cardId) {
      await supabase
        .from("cards")
        .update({ body: body })
        .eq("id", Number(cardId));
      cardIds.push(Number(cardId));
    } else {
      const { data: newCards, error } = await supabase
        .from("cards")
        .insert([{ body: body }])
        .select();
      if (error || !newCards || newCards.length === 0) {
        throw new Error("Error creating new card");
      }
      cardIds.push(newCards[0].id);
    }
    index++;
  }

  await supabase
    .from("courses")
    .update({ title: title, description: description, cardIDs: cardIds, imageUrl: imageUrl })
    .eq("id", courseId);

  window.location.href = `/courses/${courseId}`; // Redirect using window.location
}

type EditCourseFormProps = {
  courseId: number;
};

export default function EditCourseForm({ courseId }: EditCourseFormProps) {
  const [showCardForm, setShowCardForm] = useState(true);
  const [courseData, setCourseData] = useState<Course | null>(null);
  const [cardContents, setCardContents] = useState<{ id?: number, body: string }[]>([]);
  const [images, setImages] = useState<{ url: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: course } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();
      setCourseData(course);

      const { data: cards } = await supabase
        .from("cards")
        .select("*")
        .in("id", course?.cardIDs || []);
      setCardContents(cards || []);

      const numberOfImages = 6;
      let imagesUrls = [] as { url: string }[];
      for (let i = 1; i <= numberOfImages; i++) {
        const { data } = await supabase.storage.from('images').getPublicUrl(`img_${i}.png`);
        imagesUrls.push({url: data.publicUrl});
      }
      setImages(imagesUrls);
    }
    if (!isNaN(courseId)) {
      fetchData();
    }
  }, [courseId]);

  const handleAddCard = () => {
    setCardContents([...cardContents, { body: "" }]);
  };

  const handleCardContentChange = (index: number, value: string) => {
    const newCardContents = [...cardContents];
    newCardContents[index].body = value;
    setCardContents(newCardContents);
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedImage(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await updateCourse(formData, courseId);
  };

  if (!courseData) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-md space-y-6 w-full max-w-lg"
    >
      <div className="space-y-2">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Course Title
        </label>
        <input
          type="text"
          placeholder="Title"
          required
          name="title"
          defaultValue={courseData.title}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          placeholder="Short description"
          required
          name="description"
          defaultValue={courseData.description}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Select Image
        </label>
        <select
          name="imageUrl"
          value={selectedImage || courseData.imageUrl}
          onChange={handleImageSelect}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="https://cqwnxtngxmuzpomxeztt.supabase.co/storage/v1/object/public/images/noimg.png">Select an image</option>
          {images.map((image, index) => (
            <option key={index} value={image.url}>Image №{index + 1}</option>
          ))}
        </select>
      </div>
      <Image src={selectedImage || courseData.imageUrl} alt='Selected Image' width={200} height={200}/>
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setShowCardForm(true)}
          className="bg-green-500 text-white rounded-md px-4 py-2"
        >
          Add Card
        </button>
      </div>

      {showCardForm && (
        <div className="mb-4 bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Add Cards to Course</h3>
          {cardContents.map((content, index) => (
            <div key={index} className="mb-2">
              <textarea
                required
                name={`${index}`}
                maxLength={700}
                value={content.body}
                onChange={(e) => handleCardContentChange(index, e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter card text (up to 700 characters)"
              ></textarea>
              {content.id && <input type="hidden" name={`cardId-${index}`} value={content.id} />}
            </div>
          ))}
          <div className="flex justify-end mt-2">
            <button
              type="button"
              onClick={() => setShowCardForm(false)}
              className="bg-red-500 text-white rounded-md px-4 py-2 mr-2"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddCard}
              className="bg-green-500 text-white rounded-md px-4 py-2"
            >
              Add Another Card
            </button>
          </div>
        </div>
      )}
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Changes
      </button>
    </form>
  );
}
