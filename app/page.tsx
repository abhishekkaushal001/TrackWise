import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueChart from "./dashboard/IssueChart";
import IssueSummary from "./dashboard/IssueSummary";
import LandigHomePage from "./LandigHomePage";
import LatestIssues from "./dashboard/LatestIssues";
import Logo from "./components/Logo";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  return (
    <>
      <LandigHomePage />
      <Logo />
    </>
  );
}
