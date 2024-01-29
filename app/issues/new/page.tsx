import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import { Metadata } from "next";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return (
    <>
      <IssueForm />
    </>
  );
};

export const metadata: Metadata = {
  title: "TrackWise - Create new Issue",
  description: "Create new Issue.",
};

export default NewIssuePage;
