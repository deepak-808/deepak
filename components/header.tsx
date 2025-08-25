"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { headerData } from "@/common/json-data/header";
import { cn } from "@/lib/utils";

export function Header() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex mx-auto w-full max-w-7xl h-16 items-center px-6">
        <div className="flex w-full h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className={headerData.brand.logo.className}>
                {headerData.brand.logo.text}
              </span>
            </div>
            <span className="font-bold text-xl font-serif">
              {headerData.brand.name}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {headerData.navLinks.map(({ title, href }) => {
              const isActive = href === hash;
              return (
                <Link
                  key={title}
                  href={href}
                  onClick={() => setHash(href)}
                  className={cn(
                    "transition-colors hover:text-primary",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {title}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
