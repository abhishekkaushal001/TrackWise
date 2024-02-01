import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import UserAssignee from "./UserAssignee";
import EditIssueStatusButton from "./EditIssueStatusButton";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchIssue = cache((id: number) =>
  prisma.issue.findUnique({ where: { id } })
);

const IssueDetailsPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5" className="extend-vh">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <UserAssignee issue={issue} />
            <EditIssueStatusButton issue={issue} />
            <EditIssueButton issue={issue} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchIssue(parseInt(params.id));

  return {
    title: issue?.title,
    description: `Details of Issue "${issue?.title}"`,
  };
}

export default IssueDetailsPage;
