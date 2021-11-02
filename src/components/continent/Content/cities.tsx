import { Flex, Text, Grid } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function Cities() {
  return (
    <Flex flexDirection="column" mx={["16px", "0px"]}>
      <Text
        color="gray.700"
        fontSize={["24px", "36px"]}
        fontWeight="500"
        mb="40px"
      >
        Cidades +100
      </Text>
      <Grid
        d={["flex", "grid"]}
        flexDirection="column"
        alignItems="center"
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        gap="45px"
      >
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </Grid>
    </Flex>
  );
}
