import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Table,
  Text,
} from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import Link from "next/link";

const LatestIssues = async () => {
  const latest = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    include: { assignedToUser: true },
    take: 5,
  });

  return (
    <Card>
      <Heading mb="3">Latest Issues</Heading>
      <Table.Root>
        <Table.Body>
          {latest.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" gap="2" align="start">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback={issue.assignedToUser.name!.charAt(0)}
                      size="3"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
