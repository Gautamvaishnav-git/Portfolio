import { Box, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Box
        w="100%"
        h="2.7rem"
        pos={"sticky"}
        top="0"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        gap={"4"}
        bgColor={"InfoBackground"}
        zIndex="1000"
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </Box>
    </>
  );
};

export default Header;
