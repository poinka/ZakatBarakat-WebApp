import EditCourseForm from "@/components/EditCourseForm";

type Props = {
  params: {
    id: number;
  };
};

export default function EditCourse({ params: { id } }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Edit the Course</h1>
      <EditCourseForm courseId={id} />
    </div>
  );
}
