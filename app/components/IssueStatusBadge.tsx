import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

export const statusMap: Record<
  Status,
  {
    label: string;
    color: "red" | "violet" | "green";
    rgb?: string;
    hover?: string;
  }
> = {
  OPEN: {
    label: "Open",
    color: "red",
    rgb: "#f3000d14",
    hover: "hover:#eb8e90 transition-colors",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "violet",
    rgb: "#4400ee0f",
    hover: "hover:#aa99ec transition-colors",
  },
  CLOSED: {
    label: "Closed",
    color: "green",
    rgb: "#00a43319",
    hover: "hover:#5bb98b transition-colors",
  },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
