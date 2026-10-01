"use client";

import * as React from "react";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
}: DialogProps) {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-0 bg-slate-950/50" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby={description ? "dialog-description" : undefined}
        className="relative w-full max-w-lg rounded-xl border border-border bg-surface p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="dialog-title"
              className="text-lg font-semibold text-text-primary"
            >
              {title}
            </h2>

            {description ? (
              <p
                id="dialog-description"
                className="mt-1 text-sm text-text-secondary"
              >
                {description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-2 text-text-muted transition-colors hover:bg-surface-muted hover:text-text-primary"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}