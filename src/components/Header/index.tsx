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
      height="6.25rem"
      p="1.6875rem 1rem"
      position="relative"
      maxW="100vw"
      w="100%"
    >
      {!isHome && (
        <Box
          position="absolute"
          left="140px"
          top="50%"
          transform="translate(0,-50%)"
        >
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} cursor="pointer" w="32px" h="32px" />
            </a>
          </Link>
        </Box>
      )}
      <Logo />
    </Flex>
  );
}
