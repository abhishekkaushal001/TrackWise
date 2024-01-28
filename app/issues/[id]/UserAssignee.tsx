"use client";
import { Issue, User } from "@prisma/client";
import { Select, Skeleton } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const UserAssignee = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton className="h-8" />;

  if (error) {
    return (
      <Select.Root>
        <Select.Trigger placeholder="Some Error Occured!" />
      </Select.Root>
    );
  }

  const assignIssue = (value: string) => {
    let userId: string | null = value;
    userId = userId === "null" ? null : userId;
    axios
      .patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId,
      })
      .then((res) =>
        toast.success(
          `User successfully ${userId ? "assigned" : "unassigned"}.`
        )
      )
      .catch((err) => toast.error("Changes could not be saved."));
  };

  return (
    <>
      <Select.Root onValueChange={assignIssue}>
        <Select.Trigger placeholder="Assign User..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Unassign the Issue</Select.Label>
            <Select.Item value="null">Unassigned</Select.Item>
            <Select.Separator />
            <Select.Label>Suggestions</Select.Label>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

export default UserAssignee;
