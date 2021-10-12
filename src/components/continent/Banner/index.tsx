import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      position="relative"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage="url(/images/continents/europe/Banner.svg)"
      height="500px"
      bgPosition="0 85%"
    >
      <Text
        position="absolute"
        bottom="60px"
        left="140px"
        color="gray.200"
        fontWeight="600"
        fontSize="48px"
      >
        Europa
      </Text>
    </Flex>
  );
}
