import {
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export function TavelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <UnorderedList
      display={["flex", "grid"]}
      gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr 1fr 1fr "]}
      flexWrap="wrap"
      justifyContent="space-between"
      my="5rem"
      gap={["10px", "0"]}
      mx={["50px", "auto"]}
      maxW="1160px"
      w={["275px", "100%"]}
      color="gray.700"
      fontWeight="600"
    >
      <ListItem
        display={isWideVersion && "flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color={["yellow.500", "initial"]}
      >
        {isWideVersion && <Image src="./cocktail.svg" alt="cocktail" />}
        <Text color="gray.700" fontSize="1.5rem" mt="1.5rem">
          vida noturna
        </Text>
      </ListItem>
      <ListItem
        color={["yellow.500", "initial"]}
        display={isWideVersion && "flex"}
        flexDirection="column"
        alignItems="center"
      >
        {isWideVersion && <Image src="./surf.svg" alt="surf" />}
        <Text color="gray.700" fontSize="1.5rem" mt="1.5rem">
          praia
        </Text>
      </ListItem>
      <ListItem
        color={["yellow.500", "initial"]}
        display={isWideVersion && "flex"}
        flexDirection="column"
        alignItems="center"
      >
        {isWideVersion && <Image src="./building.svg" alt="building" />}
        <Text color="gray.700" fontSize="1.5rem" mt="1.5rem">
          moderno
        </Text>
      </ListItem>
      <ListItem
        color={["yellow.500", "initial"]}
        display={isWideVersion && "flex"}
        flexDirection="column"
        alignItems="center"
      >
        {isWideVersion && <Image src="./museum.svg" alt="museum" />}
        <Text color="gray.700" fontSize="1.5rem" mt="1.5rem">
          clássico
        </Text>
      </ListItem>
      <Box flex="1" display="flex" justifyContent="center">
        <ListItem
          color={["yellow.500", "initial"]}
          display={isWideVersion && "flex"}
          flexDirection="column"
          alignItems="center"
        >
          {isWideVersion && <Image src="./earth.svg" alt="earth" />}
          <Text color="gray.700" fontSize="1.5rem" mt="1.5rem">
            e mais...
          </Text>
        </ListItem>
      </Box>
    </UnorderedList>
  );
}
