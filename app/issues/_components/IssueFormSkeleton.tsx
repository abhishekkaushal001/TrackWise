import { Box, Skeleton } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box className=" max-w-xl">
      <Skeleton className=" h-8 mb-3" />
      <Skeleton className=" h-96" />
    </Box>
  );
};

export default IssueFormSkeleton;
