import { Flex, Text, Image } from "@chakra-ui/react";
// import Image from "next/image";
import Airplane from "../../../public/Airplane.svg";

export function Banner() {
  return (
    <Flex
      bgImage="url('/bannerBackground.jpg')"
      w="100vw"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition="100% 30%"
      maxH="20.9375rem"
      height="100%"
      padding="0 8.75rem"
      justifyContent="space-between"
    >
      <Flex flexDir="column" mt="5rem" maxW="600px">
        <Text
          fontWeight="500"
          fontSize="2.25rem"
          lineHeight="54px"
          color="white.200"
          mb="1.25rem"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text fontSize="1.25rem" lineHeight="30px" color="gray.200">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
      </Flex>
      <Image
        mt="4.75rem"
        mb="-2rem"
        src="/Airplane.svg"
        transform="rotate(3deg)"
      />
    </Flex>
  );
}
