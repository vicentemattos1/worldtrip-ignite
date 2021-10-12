import { Flex } from "@chakra-ui/react";
import { Cities } from "./cities";
import { Info } from "./info";

export function Content() {
  return (
    <Flex
      as="article"
      maxW="1160px"
      w="100%"
      mx="auto"
      flexDir="column"
      mb="35px"
    >
      <Info />
      <Cities />
    </Flex>
  );
}
