import { PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";

const UserDropdownMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <PersonIcon className=" h-5 w-5 cursor-pointer nav-link" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item color="gray">
          <Link href="/register" className=" mr-3">
            Register
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Link href="/api/auth/signin">Login</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default UserDropdownMenu;
