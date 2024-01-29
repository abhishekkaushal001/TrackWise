import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";
import prisma from "@/prisma/client";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <div>
      <div>Hello world</div>
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
    </div>
  );
}
