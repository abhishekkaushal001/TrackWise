import prisma from "@/prisma/client";
import IssueForm from "../../_components/IssueForm";

const IssueEditPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return <IssueForm issue={issue} />;
};

export default IssueEditPage;
