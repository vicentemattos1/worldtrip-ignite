import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
// import Image from "next/image";
import Airplane from "../../../public/Airplane.svg";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      bgImage="url('/bannerBackground.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundPosition={["100% 25%", "100% 30%"]}
      height={["165px", "335px"]}
      padding={["0 1rem", "0 8.75rem"]}
      justifyContent="space-between"
      position="relative"
      marginBottom="33.21px"
    >
      <Flex flexDir="column" mt={["28px", "5rem"]} maxW="600px">
        <Text
          fontWeight="500"
          fontSize={["1.25rem", "2.25rem"]}
          lineHeight={["30px", "54px"]}
          color="white.200"
          mb="1.25rem"
        >
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text
          fontSize={["14px", "1.25rem"]}
          lineHeight={["21px", "30px"]}
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Image
          w="26.25rem"
          h="16.875rem"
          right="8.75rem"
          bottom="-2rem"
          transform="rotate(3deg)"
          position="absolute"
          src="/Airplane.svg"
          alt="Avião"
        />
      )}
    </Flex>
  );
}
