import { FaCode, FaDatabase, FaGlobe, FaServer } from "react-icons/fa";

export const highlightsData = {
  about: {
    title: "About Me",
    intro:
      "With over 5 years of experience in full-stack development, I specialize in building robust, scalable web applications using modern JavaScript frameworks and technologies.",
    conclusion:
      "I'm passionate about creating efficient, maintainable code and staying up-to-date with the latest technologies. When I'm not coding, you can find me contributing to open-source projects, writing technical blogs, or exploring new frameworks and tools that can enhance development workflows.",
  },
  highlights: [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "React, Angular, TypeScript, HTML5, CSS3",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Node.js, Express.js, RESTful APIs, GraphQL",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "MongoDB, MySQL, PostgreSQL, Redis",
    },
    {
      icon: FaGlobe,
      title: "Full-Stack Integration",
      description: "MERN & MEAN stack expertise, DevOps, AWS",
    },
  ],
};
