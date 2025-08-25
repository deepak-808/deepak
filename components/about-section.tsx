import { highlightsData } from "@/common/json-data/about";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
            {highlightsData.about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {highlightsData.about.intro}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlightsData.highlights.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold font-serif">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                {highlightsData.about.conclusion}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
