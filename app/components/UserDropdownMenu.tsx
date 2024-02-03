import { PersonIcon } from "@radix-ui/react-icons";
import { Box, DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const UserDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <PersonIcon className=" h-5 w-5 cursor-pointer nav-link" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <Link href="/register">Register</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/api/auth/signin">Login</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserDropdownMenu;
