import {
  Button,
  Container,
  Heading,
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
          h="100vh"
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
            alignItems={["flex-start", "center"]}
            h="100%"
            px={["2", "auto"]}
            gap={["2", "4"]}
          >
            <Heading>Get in Touch.</Heading>
            <Text
              maxW={["100%", "70%"]}
              textAlign={["left", "center"]}
              color={"gray.500"}
            >
              Currently I'm looking for a opportunitie, Give me a chance to help
              you to grow your company by developing fast websites with better
              user experience. If you have any query you can contact me without
              and hesitation.
            </Text>
            <Button
              variant={"outline"}
              color="current"
              colorScheme={"purple"}
              borderRadius="0"
            >
              <a href="mailto:gauravvaishnav8690@gmail.com">Let's Talk</a>
            </Button>
          </VStack>
        </Stack>
      </motion.div>
    </>
  );
};
export default Contact;
