import { Box, Image, Avatar, Text, Flex } from "@chakra-ui/react";

export function CityCard() {
  return (
    <Box w={["256px", "auto"]}>
      <Image src="/images/continents/europe/Londres.svg" alt="Londres" />
      <Flex
        border="solid 1px #FFBA08"
        borderTop="none"
        borderRadius="0px 0px 5px 5px"
        p="18px 24px 25px 24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text color="gray.700" fontWeight="600" fontSize="20px">
            Londres
          </Text>
          <Text color="gray.100" fontWeight="500" fontSize="16px">
            Reino Unido
          </Text>
        </Box>
        <Avatar
          w="30px"
          h="30px"
          src="/images/continents/europe/ReinoUnido.svg"
        ></Avatar>
      </Flex>
    </Box>
  );
}
