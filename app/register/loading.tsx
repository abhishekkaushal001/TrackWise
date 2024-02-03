import { Box, Flex, Grid, Skeleton } from "@radix-ui/themes";

const RegisterUserLoadingpage = () => {
  return (
    <Grid columns={{ initial: "1", sm: "2" }} align="center" justify="center">
      <Skeleton className="hidden min-h-screen md:block" />
      <Flex
        direction="column"
        className=" py-12 px-6"
        align="center"
        justify="center"
        width="100%"
        height="100%"
      >
        <Skeleton className=" rounded-full mb-7 h-14 w-14" />
        <Skeleton className="w-1/2 h-9" />

        <Skeleton className="h-6 w-16 self-start " mt="7" />
        <Skeleton className="h-9 w-full" mt="1" />

        <Skeleton className="h-6 w-16 self-start " mt="5" />
        <Skeleton className="h-9 w-full" mt="1" />

        <Skeleton className="h-6 w-16 self-start " mt="5" />
        <Skeleton className="h-9 w-full" mt="1" />

        <Skeleton className=" h-9 w-full" mt="5" />

        <Skeleton className=" h-5 w-3/5 mt-10" />
      </Flex>
    </Grid>
  );
};

export default RegisterUserLoadingpage;
