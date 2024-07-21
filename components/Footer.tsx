import Link from "next/link";
import Image from "next/image";

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
            <h1 className="text-lg font-bold mb-2">social media:</h1>
            <div className="flex flex-row justify-start pl-1 gap-3 md:justify-center">
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=61551552044986">
              <Image src="/facebook.png" alt="facebook" width={300} height={300} className="h-5 w-5"></Image>
            </Link>
            
            <Link target="_blank" href="https://x.com/ZakatAppIslamic">
              <Image src="/x.png" alt="x" width={300} height={300} className="h-5 w-6"></Image>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/zakatapp.pro/">
              <Image src="/instagram.png" alt="instagram" width={300} height={300} className="h-5 w-6"></Image>
              </Link>
              </div>
          </div>
        </div>
      </div>
    );
}
