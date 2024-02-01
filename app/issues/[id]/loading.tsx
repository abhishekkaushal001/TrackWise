import { Box, Card, Flex, Skeleton } from "@radix-ui/themes";

const IssueDetailsLoadingPage = () => {
  return (
    <Box className=" max-w-xl extend-vh">
      <Skeleton className=" h-7" />
      <Flex gap="3" my="2">
        <Skeleton className=" w-12" />
        <Skeleton className=" w-32" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton className=" block mb-3" />
        <Skeleton className=" block mb-3" />
        <Skeleton className=" block mb-3" />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoadingPage;
