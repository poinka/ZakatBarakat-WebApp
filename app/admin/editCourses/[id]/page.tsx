import EditCourseForm from "@/components/EditCourseForm";

type Props = {
  params: {
    id: number;
  };
};

export default function EditCourse({ params: { id } }: Props) {
  return (
    <div className="min-h-screen bg-inherit flex flex-col items-center justify-center pt-20 w-3/4 m-auto">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Edit the Course</h1>
      <EditCourseForm courseId={id} />
    </div>
  );
}
