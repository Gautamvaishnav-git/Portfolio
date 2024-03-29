import { motion } from "framer-motion";
import { Heading,  VStack } from "@chakra-ui/react";
import { ProjectsData } from "../Components/Media";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
  return (
    <>
      <motion.div id="myprojects">
        <VStack
          alignItems="center"
          my="10"
          mx="auto"
          w="full"
          maxW="container.xl"
          px={["0", "16"]}
          overflow="hidden"
        >
          <Heading
            className="mainHeads"
            fontWeight="normal"
            fontStyle="italic"
            my="10"
          >
            my projects
          </Heading>
          <VStack gap={["16", "48"]}>
            {ProjectsData.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </VStack>
        </VStack>
      </motion.div>
    </>
  );
};

export default Projects;
