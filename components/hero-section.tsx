import React from "react";
import { heroData } from "@/common/json-data/hero";
import { Button } from "@/components/ui/button";
const LinkIcon = React.lazy(() => import("@/common/components/link-icon"));

export function HeroSection() {
  return (
    <section
      id={heroData.id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10"
    >
      <div className="container px-4 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-6xl lg:text-7xl">
            {heroData.title.prefix}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ml-2">
              {heroData.title.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            {heroData.description.split("MERN")[0]}
            <span className="font-semibold text-primary">MERN</span>
            {" and "}
            <span className="font-semibold text-secondary">MEAN</span>
            {heroData.description.split("stack technologies.")[1]}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {heroData.buttons.map((btn) => (
              <Button
                key={btn.label}
                size="lg"
                variant={btn.variant === "primary" ? "default" : "outline"}
                className={
                  btn.variant === "primary"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : ""
                }
              >
                <a href={btn.href}>{btn.label}</a>
              </Button>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-x-6">
            {heroData.socials.map(({ href, icon: Icon, title }) => (
              <LinkIcon key={title} to={href} Icon={Icon} title={title} />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <heroData.scrollIndicator.icon className="mx-auto h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
