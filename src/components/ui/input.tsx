import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        "min-h-11 w-full rounded-lg border border-border bg-surface px-3.5",
        "text-sm font-medium text-text-primary placeholder:text-text-muted",
        "shadow-xs transition-all",
        "hover:border-border-strong",
        "focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10",
        "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:text-text-disabled",
        "aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}