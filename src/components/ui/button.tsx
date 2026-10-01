import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-sm shadow-indigo-500/20 hover:-translate-y-px hover:bg-primary-hover hover:shadow-primary active:translate-y-0 active:bg-primary-active",
  secondary:
    "bg-surface-muted text-text-primary hover:-translate-y-px hover:bg-white hover:shadow-sm active:translate-y-0",
  outline:
    "border border-border bg-surface text-text-primary shadow-xs hover:-translate-y-px hover:border-border-strong hover:bg-surface-subtle hover:shadow-sm active:translate-y-0",
  ghost:
    "bg-transparent text-text-secondary hover:bg-surface-muted hover:text-text-primary",
  danger:
    "bg-danger text-white shadow-sm shadow-red-500/20 hover:-translate-y-px hover:bg-red-700 hover:shadow-md active:translate-y-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-sm",
  md: "min-h-10.5 px-4.5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-lg font-semibold",
        "focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}