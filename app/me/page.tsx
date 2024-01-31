import { Avatar, Box, Grid, Heading, Separator, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import authOptions from "../auth/authOptions";

const UserAccountPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return notFound();
  }
  const { user } = session;

  return (
    <Grid
      className="shadow-lg shadow-slate-200 p-3"
      columns={{ initial: "1", sm: "3" }}
      align="center"
      justify="center"
    >
      <Avatar
        fallback={user!.name!.charAt(0)}
        src={user!.image!}
        radius="full"
        size="9"
        my="3"
        mx="5"
      />
      <Box className="md:col-span-2" my="2">
        <Heading size="1">Name</Heading>
        <Text>{user?.name}</Text>
        <Separator size="4" my="3" />
        <Heading size="1">Email</Heading>
        <Text>{user?.email}</Text>
      </Box>
    </Grid>
  );
};

export default UserAccountPage;
