"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const UserAssignee = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get<User[]>("/api/users");
        setUsers(data);
      } catch (ex) {
        setError(true);
      }
    };
    fetch();
  }, []);

  if (error) {
    return (
      <Select.Root>
        <Select.Trigger placeholder="Some Error Occured!" />
      </Select.Root>
    );
  }

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign User..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users.map((user) => (
            <Select.Item key={user.id} value={user.name!}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default UserAssignee;
