"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex mx-auto w-full max-w-7xl h-16 items-center px-6">
        <div className="flex w-full h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-serif">
                D
              </span>
            </div>
            <span className="font-bold text-xl font-serif">Deepak</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#home" className="transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
