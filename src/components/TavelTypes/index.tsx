import { Grid, Flex, Image, Box, Text } from "@chakra-ui/react";

export function TavelTypes() {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr 1fr 1fr 1fr "
      margin="5rem auto"
      maxW="1160px"
      w="100%"
      color="gray.700"
      fontWeight="600"
    >
      <Flex flexDirection="column" alignItems="center">
        <Image src="./cocktail.svg" alt="cocktail" />
        <Text fontSize="1.5rem" mt="1.5rem">
          vida noturna
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Image src="./surf.svg" alt="surf" />
        <Text fontSize="1.5rem" mt="1.5rem">
          praia
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Image src="./building.svg" alt="building" />
        <Text fontSize="1.5rem" mt="1.5rem">
          moderno
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Image src="./museum.svg" alt="museum" />
        <Text fontSize="1.5rem" mt="1.5rem">
          clássico
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Image src="./earth.svg" alt="earth" />
        <Text fontSize="1.5rem" mt="1.5rem">
          e mais...
        </Text>
      </Flex>
    </Grid>
  );
}
