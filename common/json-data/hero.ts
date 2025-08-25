import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const heroData = {
  id: "home",
  title: {
    prefix: "Hi, I'm",
    highlight: "Deepak Kumar",
  },
  description:
    "A passionate Full-Stack Developer specializing in MERN and MEAN stack technologies. I build scalable web applications that deliver exceptional user experiences.",
  buttons: [
    { label: "View My Work", href: "#projects", variant: "primary" },
    { label: "Get In Touch", href: "#contact", variant: "outline" },
  ],
  socials: [
    { title: "GitHub", href: "https://github.com/deepak-808", icon: FaGithub },
    {
      title: "LinkedIn",
      href: "www.linkedin.com/in/deepak-kumar-374149118",
      icon: FaLinkedin,
    },
    { title: "Email", href: "mailto:deepak.ds.0621@gmai.com", icon: MdEmail },
  ],
  scrollIndicator: { icon: FaArrowDown },
};
