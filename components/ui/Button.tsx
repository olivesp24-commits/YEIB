import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-evergreen)] text-[var(--color-mint-cream)]",
      secondary: "border-2 border-[var(--color-evergreen)] text-[var(--color-evergreen)] hover:bg-[var(--color-evergreen)] hover:text-[var(--color-mint-cream)]",
      link: "text-[var(--color-mint-leaf)] hover:underline hover:shadow-none hover:-translate-y-0 active:scale-100",
    };

    const sizes = {
      default: "h-12 px-6 py-3",
      sm: "h-9 px-4",
      lg: "h-14 px-8 text-lg",
    };

    // If it's a link variant, we don't necessarily want the standard button padding
    const sizeClass = variant === "link" ? "" : sizes[size];

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0 active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tiger-orange)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
          variants[variant],
          sizeClass,
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
