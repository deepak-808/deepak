import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

export const highlightsData = {
  about: {
    title: "About Me",
    intro:
      "Full Stack Developer with 4+ years of experience building scalable healthcare, CRM, and SaaS platforms. I specialize in Next.js, React.js, TypeScript, Node.js, and Go, with deep expertise in microservices architecture, REST APIs, RBAC systems, and CI/CD pipelines.",
    conclusion:
      "I'm passionate about creating efficient, maintainable code and proven at improving application performance and scalability. I have a track record of reducing page load times by 35%, API response times by 45%, and deployment time by 60% using automated CI/CD pipelines in agile environments.",
  },
  highlights: [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Next.js, React.js, TypeScript, TailwindCSS, Zustand, Redux Toolkit, React Hook Form",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Node.js, Express.js, Go (Gin), REST APIs, Microservices, JWT Authentication, RBAC",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "PostgreSQL, MongoDB, Redis",
    },
    {
      icon: FaTools,
      title: "DevOps & Tools",
      description: "Docker, CI/CD, GitHub Actions, Linux, Git",
    },
  ],
};
