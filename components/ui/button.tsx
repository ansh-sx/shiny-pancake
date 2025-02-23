import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "lg"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={`
          ${className}
          ${variant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
          ${variant === "outline" ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" : ""}
          ${variant === "secondary" ? "bg-secondary text-secondary-foreground hover:bg-secondary/80" : ""}
          ${size === "lg" ? "px-8 py-3 rounded-md text-sm font-medium" : "px-4 py-2 rounded-md text-sm font-medium"}
        `}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

