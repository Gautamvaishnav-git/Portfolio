import { motion } from "framer-motion";

import {
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Box,
  Link,
  Button,
} from "@chakra-ui/react";

import {
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import gautam from "../assets/gautam.jpg";

const About = () => {
  const languages = [
    {
      icon: <SiHtml5 size="3rem" />,
      color: "red.400",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <SiCss3 size="3rem" />,
      color: "blue.400",
      href: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      icon: <SiJavascript size="3rem" />,
      color: "yellow.300",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <SiSass size="3rem" />,
      color: "pink.400",
      href: "https://sass-lang.com/",
    },
  ];

  const technologies = [
    {
      icon: <SiReact size="3rem" />,
      color: "purple.400",
      href: "https://reactjs.org/",
    },
    {
      icon: <SiTailwindcss size="3rem" />,
      color: "blue.400",
      href: "https://tailwindcss.com/",
    },
    {
      icon: <SiBootstrap size="3rem" />,
      color: "purple.500",
      href: "https://getbootstrap.com/",
    },
    {
      icon: <SiChakraui size="3rem" />,
      color: "teal.400",
      href: "https://chakra-ui.com/",
    },
  ];

  const variant = {
    hidden: { opacity: 0, y: "100px" },
    view: { opacity: 1, y: "0px" },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="view"
        transition={{ duration: 0.5 }}
        variants={variant}
      >
        <VStack
          id="about"
          w="full"
          maxh={["auto", "100vh"]}
          maxW="container.xl"
          mx="auto"
          direction={["column-reverse", "row"]}
          alignItems="center"
          px={["0", "16"]}
          py={["0", "16"]}
        >
          <Heading pb={["1", "10"]} letterSpacing="wide">
            About.
          </Heading>
          <HStack
            gap={["4", "10"]}
            py="2"
            flexDirection={["column", "row"]}
            alignItems="flex-start"
          >
            <motion.div
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: "0px" }}
              transition={{ duration: 0.7, bounce: 1, type: "tween" }}
              whileHover={{ scale: 0.96, rotate: "-1deg", transition: 0.2 }}
            >
              <Box
                w="full"
                boxShadow="15px 15px 0 currentColor"
                bgColor="purple.100"
                className="gautam_img_box"
                transition="all 0.3s ease"
                _hover={{ boxShadow: "10px 10px 0 currentColor" }}
              >
                <Image
                  src={gautam}
                  filter="grayscale(0.8)"
                  mixBlendMode="multiply"
                />
              </Box>
            </motion.div>
            <HStack direction="column" m="0 !important" px={["2", "auto"]}>
              <Box>
                <Text
                  color="current"
                  fontSize="28"
                  fontWeight="medium"
                  textTransform="capitalize"
                  pt={["4", "0"]}
                >
                  Hi visiter, thanks to visit my website.
                </Text>
                <Text pt="4" color="gray.500">
                  My profession is front end development. JavaScript is my area
                  of expertise. Additionally, I have experience working with
                  <Link
                    href="https://reactjs.org/"
                    color="purple.500"
                    target="_blank"
                    className="links__border"
                    display="inline-block"
                  >
                    React (JavaScript Library),
                  </Link>
                  <Link
                    href="https://tailwindcss.com/"
                    color="purple.500"
                    target="_blank"
                    className="links__border"
                    display="inline-block"
                  >
                    Tailwind (Css Framwork),
                  </Link>
                  <Link
                    href="https://getbootstrap.com/docs/5.3/customize/components/"
                    color="purple.500"
                    target="_blank"
                    className="links__border"
                    display="inline-block"
                  >
                    Chakraui (Component Library).
                  </Link>
                  <br />
                </Text>
                <Text
                  color="gray.500"
                  py="4"
                  w="full"
                  fontWeight="medium"
                  className="horizontal__border"
                  display="flex"
                  alignItems="center"
                  _after={{ w: ["60px", "300px"] }}
                >
                  Here are some of my skills
                </Text>

                <VStack gap="4">
                  <HStack
                    w="full"
                    gap="4"
                    flexWrap="wrap"
                    justifyContent={["center", "space-evenly"]}
                  >
                    {languages.map((language) => {
                      return (
                        <Button
                          key={language.color}
                          w="20"
                          color={language.color}
                          h="20"
                          m="0 !important"
                          variant="solid"
                          border="1px solid currentColor"
                        >
                          <Link href={language.href} target="_blank">
                            {language.icon}
                          </Link>
                        </Button>
                      );
                    })}
                  </HStack>
                  <HStack
                    w="full"
                    gap="4"
                    flexWrap="wrap"
                    justifyContent={["center", "space-evenly"]}
                  >
                    {technologies.map((technology) => {
                      return (
                        <Button
                          key={technology.color}
                          w="20"
                          m="0 !important"
                          color={technology.color}
                          border="1px solid currentColor"
                          h="20"
                          variant="solid"
                        >
                          <Link href={technology.href} target="_blank">
                            {technology.icon}
                          </Link>
                        </Button>
                      );
                    })}
                  </HStack>
                </VStack>
              </Box>
            </HStack>
          </HStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default About;
