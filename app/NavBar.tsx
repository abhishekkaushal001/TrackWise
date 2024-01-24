"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import React from "react";
import classNames from "classnames";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const pathName = usePathname();

  return (
    <nav className="flex space-x-6 border-b h-14 items-center mb-5 px-5 ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            id={link.href}
            href={link.href}
            className={classNames({
              "text-zinc-900": pathName === link.href,
              "text-zinc-500": pathName !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
