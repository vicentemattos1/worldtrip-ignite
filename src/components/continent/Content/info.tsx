import { Flex, Text, Grid, Icon, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Info() {
  return (
    <Flex
      flexDir={["column", "row"]}
      alignItems="center"
      my={["24px", "5rem"]}
      mx={["16px", "0"]}
      justifyContent="space-between"
    >
      <Text
        fontWeight="400"
        fontSize={["14px", "24px"]}
        textAlign="justify"
        maxW="600px"
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        fontWeight="600"
        mt={["16px", "0px"]}
      >
        <Flex flexDir="column" alignItems="center">
          <Text color="yellow.500" fontSize={["24px", "48px"]}>
            50
          </Text>
          <Text fontSize={["18px", "24px"]}>países</Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Text color="yellow.500" fontSize={["24px", "48px"]}>
            60
          </Text>
          <Text fontSize={["18px", "24px"]}>linguas</Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Text color="yellow.500" fontSize={["24px", "48px"]}>
            27
          </Text>

          <Text
            fontSize={["18px", "24px"]}
            display="flex"
            textAlign="center"
            mt={["8px", "0"]}
          >
            cidades +100
            <Tooltip
              label="Mais de 100 habitantes"
              aria-label="Info cidades"
              ml="0.5.rem"
            >
              <Text as="span">
                <Icon as={RiInformationLine} w="16px" h="16px" />
              </Text>
            </Tooltip>
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
}
