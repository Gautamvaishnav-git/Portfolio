import {
  Box,
  Text,
  Container,
  Heading,
  Stack,
  VStack,
  Image,
  HStack,
  filter,
  Button,
  Link,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import programming1 from "../assets/Programming1.jpg";
import computer from "../assets/computer.jpg";
import programming3 from "../assets/Programming3.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";
import MediaLinks from "./MediaLinks";

const Home = () => {
  const [mediaLinks, setMediaLinks] = useState(MediaLinks);
  return (
    <>
      <Stack
        id="#"
        w="full"
        maxW="container.xl"
        mx="auto"
        direction={["column-reverse", "row"]}
        h={["auto", "100vh"]}
        alignItems="center"
        px={["0", "16"]}
      >
        <VStack
          h={["auto", "100vh"]}
          w="fit-content"
          alignItems="center"
          justifyContent="flex-end"
          display={["none", "flex"]}
          px="5"
          py="40"
          pos="fixed"
          top="0"
          left="0"
        >
          {mediaLinks.map((media) => {
            return (
              <Link {...media.attribs} isExternal py="1.5" key={media.key}>
                {media.Icon}
              </Link>
            );
          })}
        </VStack>
        <VStack
          h="100vh"
          w="fit-content"
          alignItems="center"
          justifyContent="flex-end"
          px="5"
          py="40"
          pos="fixed"
          top="0"
          right="0"
          display={["none", "flex"]}
        >
          <Link
            href="mailto:gauravvaishnav8690@gmail.com"
            css={{ writingMode: "vertical-rl" }}
            fontSize="1rem"
            py="2"
            className="border__vertical mail__border"
            position="relative"
            color="purple.400"
          >
            gauravvaishnav8690@gmail.com
          </Link>
        </VStack>
        <VStack
          w="full"
          h="full"
          justifyContent="center"
          alignItems="stretch"
          lineHeight="1.3"
          gap={["5px", "1rem"]}
          px={["2", "0"]}
        >
          <Text fontSize={["xl", "2xl"]} fontWeight="medium" color="purple.400">
            Hi There, This is
          </Text>
          <Heading
            fontSize={["2xl", "5xl"]}
            lineHeight="1"
            textTransform="capitalize"
          >
            Gautam Vaishnav.
            <Text color="gray" opacity="0.8">
              develop websites with enthusiasm.
            </Text>
          </Heading>
          <Text fontSize={["sm", "xl"]} color="gray.500">
            I am a passionate web developer, web designer and content creater. I
            build things for the web.
          </Text>
          <Button
            lineHeight="2rem"
            alignSelf="flex-start"
            variant="outline"
            borderColor="purple.400"
            color="current"
            borderRadius="0"
            textTransform="capitalize"
          >
            <a href="https://www.youtube.com/@fornext_GV" target="_blank">
              Checkout my channel
            </a>
          </Button>
        </VStack>
        <HStack w="full" overflow="hidden">
          <Carousel
            autoPlay
            interval={1500}
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            <Box
              maxH="fit-content"
              overflow="hidden"
              bgColor="purple.400"
              _hover={{ bgColor: "purple.100", transition: "all 0.3s ease" }}
            >
              <Image
                src={programming1}
                mixBlendMode="multiply"
                filter="hue-rotate(10deg)"
              />
            </Box>
            <Box
              maxH="fit-content"
              overflow="hidden"
              _hover={{ bgColor: "purple.100", transition: "all 0.3s ease" }}
            >
              <Image
                src={computer}
                mixBlendMode="multiply"
                filter="hue-rotate(10deg)"
              />
            </Box>
            <Box
              maxH="fit-content"
              overflow="hidden"
              bgColor="purple.400"
              _hover={{ bgColor: "purple.100", transition: "all 0.3s ease" }}
            >
              <Image
                src={programming3}
                filter="hue-rotate(2deg)"
                mixBlendMode="multiply"
              />
            </Box>
          </Carousel>
        </HStack>
      </Stack>

      <About />
      <Contact />

      <Box px={["0", "16"]} py="4" textAlign="center" color="purple.500">
        <Link className="links__border">Develpoed by Gautam Vaishnav.</Link>
      </Box>

      <Box
        display={["flex", "none"]}
        alignItems="center"
        justifyContent="center"
        gap="2"
      >
        <Link
          href="https://github.com/Gautamvaishnav-git"
          isExternal
          py="1.5"
          _hover={{ color: "purple.500", transform: "translateY(-2px)" }}
        >
          <AiFillGithub size="1.5rem" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/gautamvaishnav/"
          isExternal
          py="1.5"
          _hover={{ color: "linkedin.400", transform: "translateY(-2px)" }}
        >
          <AiFillLinkedin size="1.5rem" />
        </Link>
        <Link
          href="https://www.instagram.com/gautam_vaishnav_0234/"
          isExternal
          py="1.5"
          _hover={{ color: "pink.400", transform: "translateY(-2px)" }}
        >
          <AiFillInstagram size="1.5rem" />
        </Link>
      </Box>
    </>
  );
};

export default Home;
