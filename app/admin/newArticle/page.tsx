import NewArticleForm from "@/components/NewArticleForm";

export default function NewArticle() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Add New Article</h1>
      <NewArticleForm />
    </div>
  );
}
