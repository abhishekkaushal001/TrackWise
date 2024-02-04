import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Flex
      direction="column"
      gap="4"
      className="place-items-center text-center bg-transparent"
      width="100%"
      align="center"
      justify="center"
      style={{ minHeight: "65vh" }}
    >
      <Text className="text-base font-semibold text-indigo-600">404</Text>
      <Heading
        as="h1"
        size={{ initial: "8", sm: "9" }}
        className="font-bold tracking-tight text-gray-900 "
      >
        Page not found
      </Heading>
      <Text className="text-base leading-7 text-gray-600" mt="4">
        {"Sorry, we couldn’t find the page you’re looking for."}
      </Text>
      <Flex align="center" justify="center" gap="1" className="mt-5">
        <ArrowLeftIcon className="text-indigo-600" />
        <Link href="/">
          <p className="text-sm font-semibold text-indigo-600 hover:ml-2 ease-out transition-all">
            Back to home
          </p>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;
