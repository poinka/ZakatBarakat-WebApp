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
    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      {navLinks.map((link) => {
        const isActive = pathName === link.href;
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
