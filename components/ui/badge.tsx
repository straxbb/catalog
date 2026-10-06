import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-200",
        className
      )}
      {...props}
    />
  );
}