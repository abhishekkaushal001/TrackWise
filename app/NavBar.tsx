"use client";

import { Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiFoodpanda } from "react-icons/si";
import UserDropdown from "./components/UserDropdown";

const NavBar = () => {
  const pathName = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="border-b items-center mb-5 mt-1 px-5 py-3">
      <Container>
        <Flex justify="between" align="center">
          <Flex align="center" gap="3">
            <Link href="/" className=" mr-3">
              <SiFoodpanda className=" w-7 h-7" />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "nav-link": true,
                      "!text-zinc-900": pathName === link.href,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <UserDropdown />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
