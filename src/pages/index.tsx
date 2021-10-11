import { Flex, Divider, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TavelTypes } from "../components/TavelTypes";
import { SwiperComponent } from "../components/Swiper";
import { Separator } from "../components/Separator";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TavelTypes />
      <Separator />
      <Text
        fontWeight="500"
        fontSize="36px"
        textAlign="center"
        maxWidth="850px"
        margin="3.125rem auto"
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Text>
      <SwiperComponent />
    </Flex>
  );
}
