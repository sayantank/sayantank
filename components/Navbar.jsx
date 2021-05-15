import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between">
      <Link href="/">
        <h3
          className={`cursor-pointer title text-sm ${
            router.pathname === "/" ? "text-w-1 font-medium" : "text-w-5"
          }`}
        >
          HOME
        </h3>
      </Link>
      <Link href="/resume">
        <h3
          className={`cursor-pointer title text-sm ${
            router.pathname === "/resume" ? "text-w-1 font-medium" : "text-w-5"
          }`}
        >
          RESUME
        </h3>
      </Link>
      <Link href="contact">
        <h3
          className={`cursor-pointer title text-sm ${
            router.pathname === "/contact" ? "text-w-1 font-medium" : "text-w-5"
          }`}
        >
          CONTACT
        </h3>
      </Link>
    </div>
  );
};

export default Navbar;
