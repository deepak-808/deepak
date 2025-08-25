import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkIconProps {
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
}) => {
  return (
    <Link
      href={to}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      <Icon className={cn("h-5 w-5", className)} />
      <span className="sr-only">{title}</span>
    </Link>
  );
};

export default LinkIcon;
