import {
  Box,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  let {
    projectName,
    projectNo,
    image,
    description,
    projectLinks,
    technologies,
    direction,
  } = props.project;

  const variant = {
    hidden: { opacity: 0, y: "100px" },
    view: { opacity: 1, y: "0px", transition: { ease: "linear" } },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="view"
        viewport={{ once: true }}
        variants={variant}
      >
        <HStack
          maxH={["auto", "100vh"]}
          w="full"
          justifyContent="space-between"
          alignItems="flex-start"
          flexDirection={direction}
          pos="relative"
          gap="4"
        >
          <Box
            w={["full", "60%"]}
            h="fit-content"
            bg="purple.200"
            borderRadius="10"
            as={motion.div}
            initial="hidden"
            whileInView="view"
            variants={variant}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={projectLinks[0].link} isExternal w="full">
              <Image
                src={image}
                w="100%"
                h="full"
                borderRadius="8"
                filter="saturate(50%)"
                mixBlendMode="multiply"
                _hover={{
                  mixBlendMode: "normal",
                  transition: "all 0.3s ease",
                  filter: "saturate(100%)",
                }}
              />
            </Link>
          </Box>
          <VStack
            w={["full", "40%"]}
            pos="relative"
            textAlign={Number(projectNo) % 2 === 0 ? "left" : "right"}
            alignItems={Number(projectNo) % 2 === 0 ? "flex-start" : "flex-end"}
            gap="2"
            px={["2", "0"]}
            as={motion.div}
            initial="hidden"
            whileInView="view"
            variants={variant}
            viewport={{ once: true }}
          >
            <Text
              w="full"
              lineHeight="1"
              fontSize="xl"
              color="brand.purple"
              fontWeight="bold"
              fontStyle="italic"
            >
              #{projectNo}
            </Text>
            <Link
              w="full"
              textTransform="capitalize"
              lineHeight="1"
              fontSize="2xl"
              fontWeight="semibold"
              href={
                projectLinks[1] ? projectLinks[1].link : projectLinks[0].link
              }
              isExternal
            >
              {projectName}
            </Link>
            <Text
              as="p"
              bg="brand.descriptionBox"
              borderWidth="1px"
              borderRadius={4}
              borderColor="brand.purple800"
              color="gray.300"
              p="4"
              pos="relative"
              w="full"
              h="fit-content"
              data-type={description}
            >
              {description}
            </Text>
            <HStack gap="2" flexWrap="wrap" w="full">
              {technologies.map((technology) => (
                <Text color="gray.400" pe="2">
                  {technology}
                </Text>
              ))}
            </HStack>
            <HStack gap="1">
              {projectLinks.map(({ icon, link }) => {
                return (
                  <Link
                    href={link}
                    w="6"
                    h="6"
                    color="white"
                    isExternal
                    _hover={{ transform: "translateY(-2px)" }}
                  >
                    {icon}
                  </Link>
                );
              })}
            </HStack>
          </VStack>
        </HStack>
      </motion.div>
    </>
  );
};

export default ProjectCard;
