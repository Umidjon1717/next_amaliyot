"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ILink {
  path: string;
  title: string;
}

const LINKS: ILink[] = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/product",
    title: "product",
  },
];

const Header = () => {
  const pathname = usePathname();

  const activeClassName = (path: string) => {
    if (path === pathname) return "text-red-500 underline";
    return "";
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        <nav className="flex space-x-6">
          {LINKS.map((item: ILink) => (
            <Link
            key={item.path}
              href={item.path}
              className={` transition font-bold ${activeClassName(item.path)}`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
