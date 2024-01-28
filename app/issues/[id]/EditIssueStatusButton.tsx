"use client";

import { statusMap } from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const EditIssueStatusButton = ({ issue }: { issue: Issue }) => {
  return (
    <Select.Root defaultValue={issue.status}>
      <Select.Trigger
        color={statusMap[issue.status].color}
        variant="soft"
        placeholder="Set Status"
      />
      <Select.Content color={statusMap[issue.status].color}>
        <Select.Group>
          <Select.Label>Set Status</Select.Label>
          <Select.Item value="OPEN">Open</Select.Item>
          <Select.Item value="IN_PROGRESS">In progress</Select.Item>
          <Select.Item value="CLOSED">Closed</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default EditIssueStatusButton;
