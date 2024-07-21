"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();
  return (
    <nav style={{width: "90%", margin: "auto"}}>
      {navLinks.map((link) => {
        const isActive = `/${pathName.split('/')[1]}` === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              isActive ? "activeNavLink" : "navLink"
            } text-sm md:text-lg`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
