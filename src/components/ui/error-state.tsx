import * as React from "react";

type ErrorStateProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't complete that request. Please try again.",
  action,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-danger/20 bg-danger-muted px-6 py-8 text-center"
    >
      <h2 className="text-base font-semibold text-danger">{title}</h2>

      <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
        {description}
      </p>

      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}