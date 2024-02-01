import { Box, Card, Flex, Grid, Separator, Skeleton } from "@radix-ui/themes";

const DashboardLoadingPage = () => {
  return (
    <Box>
      <Flex direction="column" gap="2" mt="2" mb="9" justify="center">
        <Skeleton
          style={{ height: "72px" }}
          className="place-self-center w-5/6"
          mb="2"
        />
        <Skeleton className="h-7 w-1/2 place-self-center" mb="3" />
      </Flex>

      <Grid columns={{ initial: "1", sm: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <Flex gap="3">
            <Skeleton
              style={{ height: "76px", width: "102px" }}
              className=" rounded-xl"
            />
            <Skeleton
              style={{ height: "76px", width: "135px" }}
              className=" rounded-xl"
            />
            <Skeleton
              style={{ height: "76px", width: "102px" }}
              className=" rounded-xl"
            />
          </Flex>
          <Skeleton
            className=" rounded-xl"
            style={{ height: "324px", width: "481px" }}
          />
        </Flex>
        <Card>
          <Skeleton className="h-7 w-1/4" />
          <Skeleton className="h-5 w-3/4" mt="5" />
          <Skeleton className="h-5 w-20" my="2" />
          <Separator size="4" />
          <Skeleton className="h-5 w-3/4" mt="4" />
          <Skeleton className="h-5 w-20" my="2" />
          <Separator size="4" />
          <Skeleton className="h-5 w-3/4" mt="4" />
          <Skeleton className="h-5 w-20" my="2" />
          <Separator size="4" />
          <Skeleton className="h-5 w-3/4" mt="4" />
          <Skeleton className="h-5 w-20" my="2" />
          <Separator size="4" />
          <Skeleton className="h-5 w-3/4" mt="4" />
          <Skeleton className="h-5 w-20" my="2" />
          <Separator size="4" />
        </Card>
      </Grid>
    </Box>
  );
};

export default DashboardLoadingPage;
