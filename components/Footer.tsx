import Link from "next/link";

export default function Footer() {
  return (
      <div className="w-full p-6 bg-white rounded-lg shadow-lg mt-8">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-2">contact us:</h1>
            {/* Add contact details or links here */}
            <Link href="mailto:zakatapptech@gmail.com">zakatapptech@gmail.com</Link>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-2">about us:</h1>
            {/* Add about us details or links here */}
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold mb-2">useful links:</h1>
            {/* Add useful links here */}
          </div>
        </div>
      </div>
    );
}
