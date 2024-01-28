"use client";

import { statusMap } from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EditIssueStatusButton = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Select.Root
        defaultValue=""
        onValueChange={(status) => {
          axios
            .patch(`/api/issues/${issue.id}`, { status })
            .then((res) => toast.success("Status successfully changed."))
            .catch((err) => toast.error("Changes could not be saved."));
        }}
      >
        <Select.Trigger
          color={statusMap[issue.status].color}
          variant="soft"
          placeholder="Set Status"
        />
        <Select.Content>
          <Select.Group>
            <Select.Label>Set Status</Select.Label>
            <Select.Item value="OPEN">Open</Select.Item>
            <Select.Item value="IN_PROGRESS">In progress</Select.Item>
            <Select.Item value="CLOSED">Closed</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default EditIssueStatusButton;
