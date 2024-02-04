"use client";

import {
  Avatar,
  Box,
  DropdownMenu,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Spinner from "./Spinner";
import UserDropdownMenu from "./UserDropdownMenu";

const UserDropdown = () => {
  const { status, data: session } = useSession();
  const image = session?.user?.image;

  return (
    <Box>
      {status === "loading" && <Spinner />}

      {status === "authenticated" && (
        <DropdownMenu.Root>
          {image && (
            <DropdownMenu.Trigger>
              <Avatar
                src={session.user?.image!}
                fallback={session.user?.name!.charAt(0)!}
                size="2"
                radius="full"
                className="cursor-pointer"
              />
            </DropdownMenu.Trigger>
          )}
          {(image === null || image === undefined) && (
            <DropdownMenu.Trigger>
              <IconButton radius="full" variant="soft">
                <Text className="cursor-pointer">
                  {session.user?.name!.charAt(0)!}
                </Text>
              </IconButton>
            </DropdownMenu.Trigger>
          )}
          <DropdownMenu.Content>
            <DropdownMenu.Label>{session.user!.email!}</DropdownMenu.Label>
            <DropdownMenu.Item>
              <Link href={"/me"}>My Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}

      {status === "unauthenticated" && (
        <Box className="md:hidden">
          <UserDropdownMenu />
        </Box>
      )}

      {status === "unauthenticated" && (
        <Box className=" hidden md:inline-block">
          <Flex gap="5" align="center">
            <Link href="/register" className="nav-link">
              Register
            </Link>

            <Link href="/api/auth/signin" className="nav-link">
              Login
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default UserDropdown;
