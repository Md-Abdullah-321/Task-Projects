import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full justify-between px-20 h-20 items-center bg-black">
      <h3 className="text-3xl bg-gradient-to-r from-red-600 to-white ... inline-block ... text-transparent ... bg-clip-text font-extrabold">
        ContentCanvas
      </h3>
      <div className="flex gap-x-4">
        <Link href="/" className="text-white uppercase hover:text-">
          Home
        </Link>
        <Link href="/articles" className="text-white uppercase hover:text-">
          Articles
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
