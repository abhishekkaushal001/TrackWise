import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "../components/IssueStatusBadge";

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
