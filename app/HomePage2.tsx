import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Logo from "./components/Logo";

const HomePage2 = () => {
  return (
    <Grid
      columns={{ initial: "1", sm: "5" }}
      align="center"
      justify="center"
      mb="5"
    >
      <Box className="md:col-span-3">
        <Logo />
      </Box>
      <Flex
        direction="column"
        gap="4"
        justify="center"
        align="center"
        className="md:col-span-2"
      >
        <Heading size="8" align="center">
          Seamless & Powerful
        </Heading>
        <Text align="center" color="gray">
          Welcome to a centralized hub of efficiency and collaboration. Our
          Issue Tracker Dashboard is your command center for managing tasks,
          tracking progress, and conquering challenges seamlessly. Unleash the
          power of streamlined issue resolution as you navigate through a
          user-friendly interface designed to enhance productivity. Stay
          organized, communicate effortlessly, and achieve unparalleled project
          success. Your journey to unparalleled issue management starts here!
        </Text>
      </Flex>
    </Grid>
  );
};

export default HomePage2;
