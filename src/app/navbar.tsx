"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex  w-full justify-between px-6 sm:px-20 h-20 items-center bg-black">
      <h3 className="text-xl sm:text-3xl bg-gradient-to-r from-red-600 to-white ... inline-block ... text-transparent ... bg-clip-text font-extrabold">
        ContentCanvas
      </h3>
      <div className="flex gap-x-4">
        <Link
          href="/"
          className={
            pathname === "/" ? "text-red-600 uppercase" : "text-white uppercase"
          }
        >
          Home
        </Link>
        <Link
          href="/articles"
          className={
            pathname === "/articles"
              ? "text-red-600 uppercase"
              : "text-white uppercase"
          }
        >
          Articles
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
