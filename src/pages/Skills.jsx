import { Box, Heading, Image } from "@chakra-ui/react";
import skills from "../assets/skillsList.json";

const Skills = () => {
  return (
    <>
      <Box maxW="1280px" mx="auto" py="8">
        <Heading textAlign="center">Tools and Technologies</Heading>
        <Box pt={"16"}>
          <Heading fontSize="24" textAlign="center">
            Frontend
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            pt="4"
            px="1"
          >
            {skills &&
              skills.frontend.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  me="4"
                  mb="4"
                  w="16"
                  h="16"
                  loading="lazy"
                />
              ))}
          </Box>
        </Box>
        <Box pt={"16"}>
          <Heading fontSize="24" textAlign="center">
            Backend
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            pt="4"
            px="1"
          >
            {skills &&
              skills.backend.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  me="4"
                  mb="4"
                  w="16"
                  h="16"
                  loading="lazy"
                />
              ))}
          </Box>
        </Box>
        <Box pt={"16"}>
          <Heading fontSize="24" textAlign="center">
            tools And Libraries
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            pt="4"
            px="1"
          >
            {skills &&
              skills.toolsAndLibraries.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  me="4"
                  mb="4"
                  w="16"
                  objectFit="contain"
                  h="16"
                  loading="lazy"
                />
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Skills;
