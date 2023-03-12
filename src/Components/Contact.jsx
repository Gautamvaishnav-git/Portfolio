import {
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 1 }}
      >
        <Stack
          id="contact"
          h={["auto", "100vh"]}
          maxW={"container.xl"}
          mx="auto"
          display={"flex"}
          flexDirection={"column"}
          py={"16"}
          px={["0", "16"]}
          alignItems={"center"}
        >
          <VStack
            justifyContent="center"
            alignItems="center"
            h="100%"
            px={["2", "auto"]}
            gap={["2", "4"]}
          >
            <Heading>Get in Touch.</Heading>
            <Text maxW={["100%", "70%"]} textAlign="center" color={"gray.500"}>
              Currently I'm looking for a new opportunity. Give me a chance to
              help you to grow your company by developing fast web apps and backend. If you have any query you can contact me
              without any hesitation.
            </Text>
            <Link
              variant={"outline"}
              bg="brand.purple"
              py="2"
              px="4"
              borderRadius="8"
              _hover={{ textDecor: "none", bg: "brand.purple800" }}
              href="mailto:gauravvaishnav8690@gmail.com"
            >
              Let's Talk
            </Link>
          </VStack>
        </Stack>
      </motion.div>
    </>
  );
};
export default Contact;
