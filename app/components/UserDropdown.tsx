"use client";

import prisma from "@/prisma/client";
import { Avatar, Box, DropdownMenu } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Spinner from "./Spinner";

const UserDropdown = () => {
  const { status, data: session } = useSession();

  return (
    <Box>
      {status === "loading" && <Spinner />}

      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              src={session.user!.image!}
              fallback={session.user!.name!.charAt(0)!}
              size="2"
              radius="full"
              className="cursor-pointer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>{session.user!.email!}</DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href={`/me`}>My Account</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}

      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="nav-link">
          Login
        </Link>
      )}
    </Box>
  );
};

export default UserDropdown;
