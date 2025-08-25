import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 80 },
        { name: "Microservices", level: 75 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 78 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My expertise spans across the full development stack with
            proficiency in modern technologies.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-serif">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
