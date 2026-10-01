import * as React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={[
        "min-h-24 w-full resize-y rounded-md border border-border bg-surface px-3 py-2",
        "text-sm text-text-primary placeholder:text-text-muted",
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