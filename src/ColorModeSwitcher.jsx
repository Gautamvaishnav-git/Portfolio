import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("light", "dark");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme={"blue"}
        // bgColor="cyan.900"
        pos="fixed"
        p="0"
        w="10"
        h="10"
        zIndex={"overlay"}
        borderRadius="full"
        right="4"
        top="0.5"
        title={text}
        aria-label={`Switch to ${text} mode`}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </>
  );
};

export default ColorModeSwitcher;
