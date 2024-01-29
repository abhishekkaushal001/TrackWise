import { Box, Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import HomePageLogo from "@/app/components/HomePageLogo.jpg";

const LandigHomePage = () => {
  return (
    <Grid
      columns={{ initial: "1", sm: "3" }}
      align="center"
      gap="2"
      mb="9"
      mt="4"
    >
      <Image
        className=" sm:visible md:hidden"
        src={HomePageLogo}
        alt="Track Wise"
        width={1200}
        height={1100}
      />
      <Flex direction="column" gap="3" align="center">
        <Heading
          size="9"
          className=" font-bold text-9xl text-pretty"
          align="center"
        >
          Track Wisely
        </Heading>
        <Text className=" text-opacity-80 ps-2 text-lg">
          Create and track all Issues in one place.
        </Text>
        <Button radius="full" size="4" className=" w-2/3">
          <Link href={`/api/auth/signin`}>Get Started</Link>
        </Button>
      </Flex>
      <Image
        className="hidden sm:block md:col-span-2"
        src={HomePageLogo}
        alt="Track Wise"
        width={1200}
        height={1100}
      />
    </Grid>
  );
};

export default LandigHomePage;
