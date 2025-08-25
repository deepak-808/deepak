import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const footer = {
  brand: {
    logo: {
      text: "D",
      className: "text-primary-foreground font-bold text-lg font-serif",
    },
    name: "Deepak",
  },
  links: [
    {
      id: 1,
      title: "GitHub",
      href: "https://github.com/deepak-808",
      icon: FaGithub,
    },
    {
      id: 2,
      title: "LinkedIn",
      href: "www.linkedin.com/in/deepak-kumar-374149118",
      icon: FaLinkedin,
    },
    // {
    //   id: 3,
    //   title: "Twitter",
    //   href: "https://twitter.com",
    //   icon: FaTwitter,
    // },
    {
      id: 4,
      title: "Email",
      href: "mailto:alex@example.com",
      icon: MdEmail,
    },
  ],
  copyright: {
    year: 2025,
    text: "Deepak Kumar. All rights reserved.",
  },
};
