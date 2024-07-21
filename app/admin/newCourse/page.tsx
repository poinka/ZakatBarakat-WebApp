import NewCourseForm from "../../../components/NewCourseForm";

export default function NewCourse() {
  return (
    <div className="min-h-screen bg-inherit flex flex-col items-center justify-center w-3/4 m-auto pt-20">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Add New Course</h1>
      <NewCourseForm />
    </div>
  );
}
