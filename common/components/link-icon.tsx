import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

interface LinkIconProps
  extends Omit<ComponentProps<typeof Link>, "href" | "children"> {
  to: string;
  Icon: React.ElementType;
  title: string;
  className?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({
  to,
  Icon,
  title,
  className,
  ...props
}) => {
  return (
    <Link
      href={to}
      className={cn(
        "text-muted-foreground hover:text-primary transition-colors",
        className
      )}
      {...props} // 👈 spread to Link
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{title}</span>
    </Link>
  );
};

export default LinkIcon;
