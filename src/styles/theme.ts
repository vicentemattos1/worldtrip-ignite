import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: {
      "200": "#F5F8FA",
    },
    gray: {
      "200": "#DADADA",
      "700": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.200",
        color: "gray.700",
      },
    },
  },
});
