import {
  Box,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  useDisclosure,
  IconButton,
  DrawerOverlay,
  DrawerFooter,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import MediaLinks from "./Media";
import ProgressBar from "react-progressbar-on-scroll";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [position, setPosition] = useState("static");
  window.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) setPosition("sticky");
    else setPosition("static");
  });
  return (
    <>
      <Box zIndex="overlay" position="fixed">
        <ProgressBar color="#9d52ff" gradient={true} gradientColor="#ff1aae" />
      </Box>
      <Box
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="4"
        bg="brand.900"
        backdropFilter="blur(5px)"
        color="white"
        zIndex="1000"
        top="0"
        className={position === "static" ? "hide" : "show"}
        h={["10", "auto"]}
        px={["0", "10"]}
      >
        <HStack display={["flex", "none"]} position="fixed" left="4">
          <MobileMenu mediaLinks={MediaLinks} />
        </HStack>
        <HStack
          w="full"
          display={["none", "flex"]}
          justifyContent="space-between"
          p="5"
        >
          <Box display="flex" gap="8">
            <Link to="/" className="links__border">
              Home
            </Link>
            <Link to="/about" className="links__border">
              About
            </Link>
            <Link to="/projects" className="links__border">
              Projects
            </Link>
            <Link to="/contact" className="links__border">
              Contact
            </Link>
            <Link to="/skills" className="links__border">
              Tools and Technologies
            </Link>
          </Box>
          <Box display="flex" gap="4">
            {MediaLinks.map((media) => {
              return (
                <ChakraLink {...media.attribs} isExternal key={media.key}>
                  {media.Icon}
                </ChakraLink>
              );
            })}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;

const MobileMenu = ({ mediaLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        variant="ghost"
        color="current"
        colorScheme="whiteAlpha"
        onClick={onOpen}
        p="0"
        borderRadius="full"
        icon={<AiOutlineMenu />}
      />

      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerOverlay />
        <DrawerContent h="100vh">
          <DrawerCloseButton borderRadius="full" />
          <DrawerBody bg="brand.dark">
            <VStack pt="10" alignItems="flex-start">
              <Link href="#" onClick={onClose} className="links__border">
                Home
              </Link>
              <Link href="#about" onClick={onClose} className="links__border">
                About
              </Link>
              <Link href="#contact" onClick={onClose} className="links__border">
                Contact
              </Link>
            </VStack>
          </DrawerBody>
          <DrawerFooter bg="brand.dark">
            <HStack w="full" gap="2" justifyContent={["center", "flex-start"]}>
              {mediaLinks.map((media) => (
                <Link
                  href={media.attribs.href}
                  _hover={media.attribs._hover}
                  py="1.5"
                  key={media.key}
                  targe="_blank"
                >
                  {media.Icon}
                </Link>
              ))}
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
