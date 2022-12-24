import {
  Box,
  Text,
  Container,
  Heading,
  Stack,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import programming1 from "../assets/Programming1.jpg";
import computer from "../assets/computer.jpg";
import programming3 from "../assets/Programming3.jpg";

const Home = () => {
  return (
    <>
      <Stack
        px={["0", "6"]}
        display={"flex"}
        w="full"
        maxW={"container.xl"}
        mx="auto"
        direction={["column-reverse", "row"]}
        h={["auto","100vh"]}
        alignItems={"center"}
      >
        <VStack
          w="full"
          h="full"
          justifyContent="center"
          alignItems={"stretch"}
          lineHeight="1.3"
        >
          <Text fontSize={"3xl"} fontWeight="hairline">
            Hi There, This is
          </Text>
          <Heading >Gautam Vaishnav.</Heading>
          <Text fontSize={"2xl"}>
            I am a web developer, web designer and content creater. I teach
            about web technology on youtube.
          </Text>
        </VStack>
        <HStack w="full" h="100vh" overflow={"hidden"}>
          <Carousel
            autoPlay
            interval={1500}
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            <Box maxH={"fit-content"} overflow="hidden">
              <Image src={programming1} />
            </Box>
            <Box maxH={"fit-content"} overflow="hidden">
              <Image src={computer} />
            </Box>
            <Box maxH={"fit-content"} overflow="hidden">
              <Image src={programming3} />
            </Box>
          </Carousel>
        </HStack>
      </Stack>
    </>
  );
};

export default Home;
