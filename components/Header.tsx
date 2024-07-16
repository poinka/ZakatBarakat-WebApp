import React from "react";
import Link from "next/link";
import backgroundImage from "./images/main-photo-header.png";
import Navigation from "../components/Navigation";

const NavItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Articles", href: "/articles" },
  { label: "Funds", href: "/funds" },
];

const Header = () => {
  return (
    <header
      className="bg-cover bg-top h-70 flex flex-col justify-between items-center text-center pt-12">
      <Navigation navLinks={NavItems} />
    </header>
  );
};

export default Header;
