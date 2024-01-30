import { Grid, Flex, Heading, Text, Box, Card } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";
import { Metadata } from "next";

const page = async () => {
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
    <>
      <Flex
        direction="column"
        gap="2"
        align="center"
        justify="center"
        mt="2"
        mb="9"
      >
        <h1 className="text-zinc-900 text-center text-5xl font-bold md:text-7xl ">
          Welcome to Dashboard
        </h1>
        <Text size="4" className=" text-zinc-500" align="center">
          Empower Your Workflow, Resolve Every Challenge
        </Text>
      </Flex>

      <Grid columns={{ initial: "1", sm: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <IssueSummary open={open} inProgress={inProgress} closed={closed} />
          <IssueChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
        <LatestIssues />
      </Grid>
    </>
  );
};

export const metadata: Metadata = {
  title: "TrackWise - Dashboard",
  description: "Compact information of Issues & all the Issue stats.",
};

export default page;
