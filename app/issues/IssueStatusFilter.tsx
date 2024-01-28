"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const status: { label: string; value: Status | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("orderBy");

  const applyFilter = (status: string) => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (orderBy) params.append("orderBy", orderBy);

    const query = params.size ? `?${params.toString()}` : "";
    router.push(`/issues${query}`);
    router.refresh();
  };

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || ""}
      onValueChange={applyFilter}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {status.map((status) => (
          <Select.Item key={status.label} value={status.value}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
