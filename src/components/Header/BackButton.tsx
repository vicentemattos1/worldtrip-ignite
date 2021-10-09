import Back from "../../../public/Back.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

export function BackButton() {
  return (
    <Button
      as="a"
      textDecoration="none"
      cursor="pointer"
      border="0"
      position="absolute"
      bg="none"
      left="8.75rem"
      top="2.125rem"
      variant="link"
    >
      <Image src={Back} />
    </Button>
  );
}
