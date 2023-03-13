import { Box, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box px={["0", "16"]} py="4" textAlign="center" color="purple.500">
        <Link
          href="https://www.linkedin.com/in/gautamvaishnav/"
          isExternal
          className="links__border"
        >
          Developed by Gautam Vaishnav.
        </Link>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="4"
        my="4"
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

export default Footer;
