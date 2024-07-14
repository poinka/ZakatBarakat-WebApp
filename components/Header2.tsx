import React from "react";
import Link from "next/link"; // Import Next.js Link component for navigation
import backgroundImage from "./images/main-photo-header.png";
import Navigation from "./Navigation";

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
      <br />
        <Navigation navLinks={NavItems} />
      </div>
    </header>
  );
};
export default Header;
