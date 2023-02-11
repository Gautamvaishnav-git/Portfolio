import { motion } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";
import {
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/react";

import gautam from "../assets/gautam.webp";

const About = () => {
  const variant = {
    hidden: { opacity: 0, y: "100px" },
    view: { opacity: 1, y: "0px" },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="view"
        variants={variant}
        transition={{ ease: "linear", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <VStack
          id="about"
          w="full"
          maxH={["auto", "100vh"]}
          maxW="container.xl"
          mx="auto"
          px={["0", "16"]}
          py={["0", "16"]}
        >
          <Heading
            pb={["1", "10"]}
            letterSpacing="wide"
            fontWeight="normal"
            fontStyle="italic"
            className="mainHeads"
          >
            about.
          </Heading>

          <HStack
            alignItems="flex-start"
            flexDir={["column-reverse", "row"]}
            gap={["6", "2"]}
          >
            <Box
              h="full"
              as={motion.div}
              initial="hidden"
              whileInView="view"
              variants={variant}
              transition={{ ease: "linear", duration: 0.5, delay: 1 }}
              w={["full", "70%"]}
              experimental_spaceY={["0", "6"]}
              lineHeight="170%"
              fontSize="md"
              fontWeight="light"
              letterSpacing="1px"
              px={["2", "0"]}
            >
              <Text>
                Hello! My name is Gautam Vaishnav. I enjoy things that are
                created on the web. My interest is in web development. started
                web development in the last 2 years. I started with HTML, CSS
                and Javascript. After some time, I decided to learn ReactJS and
                create some projects with it.
              </Text>
              <Text>
                This year I learned NodeJs, Express, and MongoDB, and I am
                currently building an ECommerce Store using ReactJs, NodeJs,
                Express, and MongoDB.
              </Text>
              <Text>
                I am passionate about learning the latest technologies.
              </Text>

              <HStack gap="16">
                <List>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    JavaScript (ES6+)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    Typescript
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    ExpressJs
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    React Js
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    NodeJs
                  </ListItem>
                  <ListItem>
                    <ListIcon as={AiFillCaretRight} />
                    MongoDB
                  </ListItem>
                </List>
              </HStack>
            </Box>
            <Box
              as={motion.div}
              initial={{ y: 100 }}
              whileInView={{
                y: 0,
                transition: { ease: "linear", duration: 0.1, delay: 0.1 },
              }}
              h="full"
              w={["90%", "30%"]}
              overflow={["hidden", "clip"]}
              alignSelf="center"
              bg="lightblue"
              pos="relative"
              borderRadius={"full"}
              className="gautam_img_box"
            >
              <Image
                src={gautam}
                w="full"
                draggable="false"
                filter="saturate(0%)"
                mixBlendMode="multiply"
                marginInlineStart="0"
              />
            </Box>
          </HStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default About;
