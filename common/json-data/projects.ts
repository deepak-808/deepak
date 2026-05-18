import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const projects = {
  title: "Featured Projects",
  description:
    "Here are some of my recent projects showcasing expertise in healthcare, CRM, and SaaS platform development.",
  code: {
    title: "Code",
    Icon: FaGithub,
  },
  liveDemo: { title: "Live Demo", Icon: FaExternalLinkAlt },
  project: [
    {
      title: "ApexNote – CRM & Healthcare Platform",
      description:
        "Built a dynamic treatment program builder supporting nested goals, sessions, and intervention workflows. Implemented role-based permissions and secure access control for healthcare practitioners. Developed advanced forms using React Hook Form and Yup validation reducing form errors by 40%. Created reusable API architecture and scalable frontend modules for complex healthcare workflows.",
      image: "/modern-ecommerce-interface.png",
      tech: ["Next.js", "NestJS", "TypeScript", "Node.js", "Zustand", "MongoDB"],
      github: "https://github.com/deepak-808",
      live: "https://app.apexnote.com",
      api: "https://api.apexnote.com/api/v1/docs",
    },
    {
      title: "Zenclinic – Clinic Appointment Management System",
      description:
        "Built a multi-user healthcare and appointment management platform with role-based access control (RBAC). Developed real-time scheduling and patient workflow management system supporting 1000+ patient workflows. Implemented CRM dashboard for clinic operations, practitioner management, and appointment tracking. Designed scalable backend APIs and caching strategies using Redis.",
      image: "/task-management-dashboard.png",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker"],
      github: "https://github.com/deepak-808",
      live: "https://app.zenclinic.io",
    },
    {
      title: "Padder – Residential Property Management Platform",
      description:
        "Contributed to development of a multi-tenant residential property management platform for tenant onboarding, authentication, and property workflows. Built responsive and secure frontend modules using React.js, Next.js, and TypeScript. Implemented authentication flows, protected routes, and role-based access management for tenants and administrators.",
      image: "/social-media-analytics-dashboard.png",
      tech: ["Next.js", "React.js", "TypeScript", "Node.js", "REST APIs"],
      github: "https://github.com/deepak-808",
      live: "https://residential.padder.com/auth/tenant/signin",
    },
  ],
};
