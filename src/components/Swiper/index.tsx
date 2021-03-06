// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Text } from "@chakra-ui/react";

import Link from "next/link";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

export function SwiperComponent() {
  return (
    <Flex width="100%" maxW="1240px" h="450px" margin="0 auto" mb="2.5rem">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        style={{ flex: 1 }}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        <SwiperSlide>
          <Flex
            flexDir="column"
            bgImage="url(/images/continents/europe/SwiperImage.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            h="100%"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            textAlign="center"
          >
            <Link href="/continent/europe">
              <a>
                <Text color="white.200" fontSize={["24px", "48px"]}>
                  Europa
                </Text>
                <Text color="gray.200" fontSize={["14px", "24px"]} mt="0.5rem">
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
