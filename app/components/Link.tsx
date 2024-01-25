import NextLink from "next/link";
import { Link } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const HybridLink = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link>{children}</Link>
    </NextLink>
  );
};

export default HybridLink;
