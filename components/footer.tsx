const LinkIcon = lazy(() => import("@/common/components/link-icon"));
import { footer } from "@/common/json-data/footer";
import { lazy, Suspense } from "react";

export function Footer() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <footer className="border-t bg-muted/30">
        <div className="px-4 py-12">
          <div className="flex mx-auto w-full max-w-7xl h-16 items-center px-6 justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-serif">
                  {footer.brand.logo.text}
                </span>
              </div>
              <span className="font-bold text-xl font-serif">
                {footer.brand.name}
              </span>
            </div>

            <div className="flex items-center space-x-6">
              {footer.links.map((link) => (
                <LinkIcon
                  Icon={link.icon}
                  key={link.id}
                  title={link.title}
                  to={link.href}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {footer.copyright.year} {footer.copyright.text}
            </p>
          </div>
        </div>
      </footer>
    </Suspense>
  );
}
