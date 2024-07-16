import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-inherit flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
      <div className="space-y-4 flex flex-col items-center">
          <Link href="admin/newCourse" className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 inline-block text-center no-underline">
              Add New Course
          </Link>
          <Link href="admin/editCourses" className="bg-slate-400 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 inline-block text-center no-underline">
              Edit Courses
          </Link>

          <Link href="admin/newArticle" className="bg-green-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 inline-block text-center no-underline">
              Add New Article
          </Link>
          <Link href="admin/editArticles" className="bg-slate-400 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 inline-block text-center no-underline">
              Edit Articles
          </Link>
      </div>
    </div>
  );
}
