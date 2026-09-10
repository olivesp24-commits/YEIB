import * as React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "youth" | "series" | "verified" | "solid" | "soft";
}

export function Tag({ className, variant = "youth", ...props }: TagProps) {
  const variants = {
    youth: "bg-[var(--color-mint-cream)] text-[var(--color-evergreen)] px-3 py-1 rounded-full text-sm font-medium",
    series: "text-[var(--color-tiger-orange)] font-semibold text-sm tracking-wide uppercase",
    verified: "text-[var(--color-mint-leaf)] font-semibold text-sm",
    solid: "bg-[var(--color-evergreen)] text-white px-4 py-1.5 rounded-full text-sm font-medium",
    soft: "bg-[#e2f9f1] text-[#00b070] px-4 py-1.5 rounded-full text-sm font-medium",
  };

  return (
    <span className={cn("inline-flex items-center", variants[variant], className)} {...props} />
  );
}
