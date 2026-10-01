import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  className = "",
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border border-border/80 bg-surface shadow-sm",
        "shadow-black/[0.025]",
        interactive
          ? "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}