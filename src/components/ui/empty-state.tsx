import * as React from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface-subtle px-6 py-12 text-center">
      <h2 className="text-base font-semibold text-text-primary">{title}</h2>

      {description ? (
        <p className="mt-2 max-w-md text-sm text-text-secondary">
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}