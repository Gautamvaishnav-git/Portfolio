import {
  Box,
  HStack,
  VStack,
  Link,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  useDisclosure,
  IconButton,
  DrawerOverlay,
  DrawerFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.svg";
import MediaLinks from "./MediaLinks";
import ProgressBar from "react-progressbar-on-scroll";

const Header = () => {
  const [navClass, setNavClass] = useState("nav__hide");
  document.body.onwheel = (event) => {
    if (event.deltaY === -166.66665649414062) {
      setNavClass("nav__show");
    } else {
      setNavClass("nav__hide");
    }
  };
  return (
    <>
      <Box zIndex="overlay" position="fixed">
        <ProgressBar color="#9d52ff" gradient={true} gradientColor="#ff1aae" />
      </Box>
      <Box
        w="100%"
        h="fit-content"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        gap={"4"}
        bg="purple.500"
        backdropFilter="blur(5px)"
        color="white"
        zIndex="1000"
        className={navClass}
      >
        <HStack display={["flex", "none"]} position="fixed" left="4">
          <MobileMenue />
        </HStack>
        <Link w="fit-content" px="4" py="2">
          <Image src={logo} w={["8", "8"]} fill={"white"} />
        </Link>
        <HStack w="full" justifyContent={"center"} display={["none", "flex"]}>
          <Link px={["0", "2"]} href={"#"} className="links__border">
            Home
          </Link>
          <Link px={["0", "2"]} href={"/#about"} className="links__border">
            About
          </Link>
          <Link px={["0", "2"]} href={"/#contact"} className="links__border">
            Contact
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default Header;

const MobileMenue = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mediaLinks, setMediaLinks] = useState(MediaLinks);
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
          <DrawerBody>
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
          <DrawerFooter>
            <HStack w="full">
              {mediaLinks.map((media) => (
                <Link
                  href={media.attribs.href}
                  _hover={media.attribs._hover}
                  py="1.5"
                  key={media.key}
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
