import { Flex } from "@chakra-ui/react";
import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      justifyContent="center"
      height="6.25rem"
      p="1.6875rem 1rem"
      position="relative"
    >
      {/* <BackButton /> */}
      <Logo />
    </Flex>
  );
}
