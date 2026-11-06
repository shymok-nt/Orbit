import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, id, className, required, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-bold text-ink">{label}{required ? <span aria-hidden="true"> *</span> : null}</label>
      <input
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn("min-h-11 w-full rounded-2xl border border-ink/20 bg-surface px-4 py-3 text-ink placeholder:text-muted/70 focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/50", error && "border-red-600", className)}
        {...props}
      />
      {hint ? <p id={hintId} className="text-xs text-muted">{hint}</p> : null}
      {error ? <p id={errorId} role="alert" className="text-xs font-semibold text-red-700">{error}</p> : null}
    </div>
  );
}
