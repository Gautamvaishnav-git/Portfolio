import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#181321",
        color: "white",
      },
    },
  },
  colors: {
    brand: {
      purple: "#693CB9",
      purple800: "#572F9D",
      descriptionBox: "#271F37",
      dark: "#181321"
    },
  },
});

export default theme;
