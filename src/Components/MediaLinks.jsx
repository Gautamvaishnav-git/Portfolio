import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const MediaLinks = [
  {
    attribs: {
      href: "https://github.com/Gautamvaishnav-git",
      _hover: { color: "purple.500", transform: "translateY(-2px)" },
      position: "static",
    },
    Icon: <AiFillGithub size="1.5rem" />,
    key: "github",
  },
  {
    attribs: {
      href: "https://www.linkedin.com/in/gautamvaishnav/",
      _hover: { color: "linkedin.400", transform: "translateY(-2px)" },
      position: "static",
    },
    Icon: <AiFillLinkedin size="1.5rem" />,
    key: "linkedin",
  },
  {
    attribs: {
      href: "https://www.instagram.com/gautam_vaishnav_0234/",
      _hover: { color: "pink.400", transform: "translateY(-2px)" },
      className: "border__vertical",
      position: "relative",
    },
    Icon: <AiFillInstagram size="1.5rem" />,
    key: "instagram",
  },
];

export default MediaLinks;
