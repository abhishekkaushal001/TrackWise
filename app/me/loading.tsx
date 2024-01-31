import { Box, Grid, Separator, Skeleton } from "@radix-ui/themes";

const loading = () => {
  return (
    <Grid
      className="shadow-lg shadow-slate-200 p-3"
      columns={{ initial: "1", sm: "3" }}
      align="center"
      justify="center"
    >
      <Skeleton className="w-40 h-40 rounded-full" my="3" mx="5" />
      <Box className="md:col-span-2" my="2">
        <Skeleton my="2" className="w-1/4 h-4" />
        <Skeleton className="w-1/2 h-8" />
        <Separator size="4" my="3" />
        <Skeleton my="2" className="w-1/4 h-4" />
        <Skeleton className="w-4/5 h-8" />
      </Box>
    </Grid>
  );
};

export default loading;
