import { Flex, Icon, Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { Logo } from "./Logo";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const router = useRouter();

  const isHome = router.asPath === "/";

  return (
    <Flex
      as="header"
      justifyContent="center"
      height={["50px", "6.25rem"]}
      px="1rem"
      py={["15px", "1.6875rem"]}
      position="relative"
      maxW="100vw"
      w="100%"
    >
      {!isHome && (
        <Box
          position="absolute"
          left={["16px", "140px"]}
          top="50%"
          transform="translate(0,-50%)"
        >
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                cursor="pointer"
                w={["20px", "32px"]}
                h={["20px", "32px"]}
              />
            </a>
          </Link>
        </Box>
      )}
      <Logo />
    </Flex>
  );
}
