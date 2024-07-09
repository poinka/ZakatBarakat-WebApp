import React from 'react';
import Link from 'next/link'; // Import Next.js Link component for navigation
import backgroundImage from './images/main-photo-header.png';
import Navigation from "./Navigation";

const NavItems = [
  {label: "Home", href: "/"},
  {label: "Courses", href: "/courses"},
  {label: "Articles", href: "/articles"},
  {label: "News", href: "/news"},
  {label: "Organizations", href: "/organizations"},

]


const Header = () => {
  const linkStyle = {
    textDecoration: 'none', // Remove underline from links
    color: 'white', // Set link color
    fontSize: '18px', // Set font size
    margin: '10px 10px', // Add margin for spacing
    fontWeight: 'bold', // Bold text for links
  };

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
        <Link href="../courses">
          <button style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: 'transparent', margin: '10%' }}>Start Education</button>
        </Link>
        <br />
        <Navigation navLinks={NavItems} />
      </div>
    </header>
  );
};
export default Header;