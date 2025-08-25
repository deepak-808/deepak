import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/common/json-data/projects";
import { lazy } from "react";
const LinkIcon = lazy(() => import("@/common/components/link-icon"));

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
            {projects.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {projects.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.project.map((project, index) => (
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
                      <LinkIcon
                        title={projects.code.title}
                        Icon={projects.code.Icon}
                        to={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <LinkIcon
                        title={projects.liveDemo.title}
                        Icon={projects.liveDemo.Icon}
                        to={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
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
