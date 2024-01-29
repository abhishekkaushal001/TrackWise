import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";
import HybridLink from "../components/Link";
import { Issue, Status } from "@prisma/client";

export interface IssueQuery {
  status: Status | "all";
  orderBy: keyof Issue;
  page: string;
}

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}

const columns: { label: string; value: keyof Issue; class?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", class: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", class: "hidden md:table-cell" },
];
export const values = columns.map((column) => column.value);

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell key={column.label} className={column.class}>
              <Link
                href={{
                  href: "/issues",
                  query: { ...searchParams, orderBy: column.value },
                }}
              >
                {column.label}
              </Link>
              {column.value === searchParams.orderBy && (
                <ArrowUpIcon className="inline" />
              )}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.RowHeaderCell>
              <HybridLink href={`/issues/${issue.id}`}>
                {issue.title}
              </HybridLink>
              <div className="block md:hidden">
                <IssueStatusBadge status={issue.status} />
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTable;
