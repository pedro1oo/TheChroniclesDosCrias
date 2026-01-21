import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    
    const variants = {
      primary: "bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:brightness-110 border border-transparent",
      secondary: "bg-tech-cyan text-abyss font-bold hover:bg-cyan-400 border border-transparent",
      outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold/10",
      ghost: "bg-transparent text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "h-8 px-4 text-sm",
      md: "h-12 px-6 text-base",
      lg: "h-16 px-10 text-xl",

    };

    const glowEffect = glow ? "shadow-[0_0_20px_rgba(217,70,239,0.5)] hover:shadow-[0_0_30px_rgba(217,70,239,0.8)]" : "";

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], glowEffect, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
