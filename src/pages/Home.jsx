import { Text, Heading, Stack, VStack, Link } from "@chakra-ui/react";
import Resume from "../assets/Resume.pdf";
const Home = () => {
  return (
    <>
      <Stack
        id="#"
        w="full"
        maxW="container.xl"
        mx="auto"
        direction={["column-reverse", "row"]}
        px={["0", "10"]}
        py="8"
      >
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
          py={["8", "16"]}
          alignItems="stretch"
          lineHeight="1.3"
          gap={["5px", "1rem"]}
          px={["2", "2"]}
        >
          <Text fontSize="2xl" fontFamily={"mono"} color="gray.300">
            Hi there, This is
          </Text>
          <Heading
            fontSize={["3xl", "6xl"]}
            lineHeight="1"
            textTransform="capitalize"
          >
            Gautam Vaishnav.
            <Text opacity="0.5" pt="2">
              FullStack web developer.
            </Text>
          </Heading>
          <Text
            fontSize={["sm", "xl"]}
            color="gray.500"
            w={["full", "80%"]}
            lineHeight="170%"
          >
            My profession is web development. JavaScript is my area of
            expertise. I have created projects with React, Express, NodeJS ,
            MongoDB etc. <br /> Learning the latest web technologies is one of
            my favorite things to do.
          </Text>
          <Link
            lineHeight="2rem"
            alignSelf={["center", "flex-start"]}
            bg="brand.purple"
            textTransform="capitalize"
            borderRadius="8"
            px="4"
            py="2"
            href={Resume}
            isExternal
            _hover={{ bg: "brand.purple800" }}
            download
          >
            Download Resume
          </Link>
        </VStack>
      </Stack>
    </>
  );
};

export default Home;
