import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";

const PageFooter = () => {
  const gmail = "mailto:abhishekkaushal121@gmail.com";
  const classNames =
    " h-11 w-11 p-2 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0";
  const socials: { href: string; Icon: ReactNode }[] = [
    {
      href: "https://github.com/abhishekkaushal001",
      Icon: <GitHubLogoIcon className={classNames} />,
    },
    {
      href: "https://www.linkedin.com/in/abhishekkaushal001",
      Icon: <LinkedInLogoIcon className={classNames} />,
    },
    { href: gmail, Icon: <InstagramLogoIcon className={classNames} /> },
    {
      href: gmail,
      Icon: <FaGooglePlus className={classNames} />,
    },
    { href: gmail, Icon: <TwitterLogoIcon className={classNames} /> },
    {
      href: gmail,
      Icon: <FaFacebook className={classNames} />,
    },
  ];

  return (
    <footer>
      <Flex
        direction="column"
        className="bg-neutral-900 text-center text-white"
        mt="9"
      >
        <Flex
          align="center"
          justify="center"
          gap="3"
          className="h-32"
          wrap="wrap"
        >
          {socials.map((social) => (
            <Box key={social.href}>
              <Link href={social.href} target="_blank">
                {social.Icon}
              </Link>
            </Box>
          ))}
        </Flex>
        <Box
          className="w-full p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:{" "}
          <Link className="text-whitehite" href="/">
            TrackWise
          </Link>
        </Box>
      </Flex>
    </footer>
  );
};

export default PageFooter;
