import * as React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={[
        "text-sm font-medium text-text-primary",
        "peer-disabled:cursor-not-allowed peer-disabled:text-text-disabled",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}