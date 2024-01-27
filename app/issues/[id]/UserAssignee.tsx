"use client";
import { Select } from "@radix-ui/themes";

const UserAssignee = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign User..." />
      <Select.Content>
        <Select.Group>Users</Select.Group>
        <Select.Item value="User">User 1</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default UserAssignee;
