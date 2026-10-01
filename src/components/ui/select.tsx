import * as React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", ...props }: SelectProps) {
  return (
    <select
      className={[
        "min-h-10 w-full rounded-md border border-border bg-surface px-3",
        "text-sm text-text-primary",
        "transition-colors",
        "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-text-disabled",
        "aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}