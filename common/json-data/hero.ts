import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const heroData = {
  id: "home",
  title: {
    prefix: "Hi, I'm",
    highlight: "Deepak Kumar",
  },
  description:
    "Full Stack Developer with 4+ years of experience building scalable healthcare, CRM, and SaaS platforms using Next.js, React.js, TypeScript, Node.js, and Go. Experienced in microservices architecture, REST APIs, RBAC systems, CI/CD pipelines, Docker, and database optimization.",
  buttons: [
    { label: "View My Work", href: "#projects", variant: "primary" },
    { label: "Get In Touch", href: "#contact", variant: "outline" },
  ],
  socials: [
    { title: "GitHub", href: "https://github.com/deepak-808", icon: FaGithub },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/deepak-kumar-374149118",
      icon: FaLinkedin,
    },
    { title: "Email", href: "mailto:deepak.ds.0621@gmail.com", icon: MdEmail },
  ],
  scrollIndicator: { icon: FaArrowDown },
};
