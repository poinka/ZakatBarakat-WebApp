import React from 'react';
import Link from 'next/link'; // Import Next.js Link component for navigation
import backgroundImage from './images/main-photo-header.png';
import Navigation from './Navigation';

const NavItems = [
  {label: "Home", href: "/"},
  {label: "Courses", href: "/courses"},
  {label: "Articles", href: "/articles"},
  {label: "News", href: "/news"},
  {label: "Organizations", href: "/organizations"},

]

const Header = () => {
  return (
    <header style={ {
      backgroundImage: `url(${backgroundImage.src})`,
      height: '30%', // Adjust based on your image size
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column', // Change to column direction
      justifyContent: 'space-between', // Space between items vertically
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '50px 0', // Add vertical padding
    }
  }>
      <div>
        <h1>Islamic Finance Academy</h1>
        <br />
        <Navigation navLinks={NavItems} />
      </div>
    </header>
  );
};
export default Header;