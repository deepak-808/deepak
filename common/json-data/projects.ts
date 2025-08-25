import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const projects = {
  title: "Featured Projects",
  description:
    "Here are some of my recent projects that showcase my expertise in MERN and MEAN stack development.",
  code: {
    title: "Code",
    Icon: FaGithub,
  },
  liveDemo: { title: "Live Demo", Icon: FaExternalLinkAlt },
  project: [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "MEAN stack application with real-time collaboration, drag-and-drop functionality, and team management.",
      image: "/task-management-dashboard.png",
      tech: ["Angular", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and automated reporting.",
      image: "/social-media-analytics-dashboard.png",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Scalable chat application with multiple rooms, file sharing, and message encryption.",
      image: "/modern-chat-app.png",
      tech: ["Angular", "Node.js", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ],
};
