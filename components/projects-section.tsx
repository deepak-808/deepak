import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
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
  ];

  return (
    <section id="projects" className="py-24">
      <div className="px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Here are some of my recent projects that showcase my expertise in
            MERN and MEAN stack development.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
