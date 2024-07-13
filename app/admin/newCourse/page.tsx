import NewCourseForm from "../../../components/NewCourseForm";

export default function NewCourse() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Add New Course</h1>
      <NewCourseForm />
    </div>
  );
}
