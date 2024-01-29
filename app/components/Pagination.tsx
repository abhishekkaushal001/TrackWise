"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pagesize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, currentPage, pagesize }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pagesize);
  if (pageCount <= 1) return null;

  const pageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button disabled={currentPage === 1} onClick={() => pageChange(1)}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button
        disabled={currentPage === 1}
        onClick={() => pageChange(currentPage - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => pageChange(currentPage + 1)}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => pageChange(pageCount)}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
