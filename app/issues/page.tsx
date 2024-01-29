import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Flex, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";
import HybridLink from "../components/Link";
import IssueActions from "./IssueActions";
import Pagination from "../components/Pagination";
import IssueTable, { IssueQuery, values } from "./IssueTable";
import { Metadata } from "next";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const { status, orderBy, page } = searchParams;
  let issues, count;
  const pageSize = 10;
  const currentPage = parseInt(page) || 1;

  if (status !== "all" && status in Status) {
    count = await prisma.issue.count({ where: { status } });

    if (orderBy && values.includes(orderBy)) {
      issues = await prisma.issue.findMany({
        where: { status: status },
        orderBy: { [orderBy]: "asc" },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      });
    } else {
      issues = await prisma.issue.findMany({
        where: { status: status },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      });
    }
  } else {
    count = await prisma.issue.count();

    if (orderBy && values.includes(orderBy)) {
      issues = await prisma.issue.findMany({
        orderBy: { [orderBy]: "asc" },
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      });
    } else {
      issues = await prisma.issue.findMany({
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
      });
    }
  }

  return (
    <Flex direction="column" gap="4">
      <IssueActions />

      <IssueTable searchParams={searchParams} issues={issues} />

      <Pagination
        currentPage={currentPage}
        itemCount={count}
        pagesize={pageSize}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "TrackWise - Issues",
  description: "Get the details of all Issues.",
};

export default IssuesPage;
