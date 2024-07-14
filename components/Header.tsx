import React from "react";
import Link from "next/link";
import backgroundImage from "./images/main-photo-header.png";
import Navigation from "../components/Navigation";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Articles", href: "/articles" },
  { label: "News", href: "/news" },
  { label: "Organizations", href: "/organizations" },
];

const Header = () => {
  return (
    <header
      className="bg-cover bg-top h-70 flex flex-col justify-between items-center text-white text-center py-12"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 m-3">Islamic Finance Academy</h1>
        <Link href="../courses">
          <button className="px-4 py-2 text-sm md:text-lg rounded-md cursor-pointer bg-white bg-opacity-70 border-none mt-4 text-gray-700 hover:bg-opacity-100">
            Start Education
          </button>
        </Link>
        <div className='m-3'>
          <Navigation navLinks={NavItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
