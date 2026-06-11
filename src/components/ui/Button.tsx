import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "icon";

export type ButtonIconPosition = "left" | "right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-action-primary bg-action-primary text-action-primary-text hover:bg-action-primary-hover active:bg-action-primary-pressed disabled:bg-action-primary-disabled",
  secondary:
    "border border-action-secondary-border bg-action-secondary text-action-secondary-text hover:bg-action-secondary-hover hover:text-action-primary-text",
  outline:
    "border border-action-outline-border bg-action-outline text-action-outline-text hover:bg-action-outline-hover hover:text-text-inverse",
  ghost:
    "bg-transparent text-text-primary hover:bg-cream-300/60 active:bg-cream-400/60",
  icon: "bg-transparent text-icon-default hover:bg-cream-300/60 active:bg-cream-400/60",
};

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      icon,
      iconPosition = "left",
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) {
    const isIconOnly = variant === "icon";
    const hasIcon = Boolean(icon);
    const hasLabel = Boolean(children);

    const iconElement = hasIcon ? (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center",
          isIconOnly ? "size-5" : "size-4",
        )}
        aria-hidden={hasLabel ? true : undefined}
      >
        {icon}
      </span>
    ) : null;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors",
          "rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus",
          "disabled:cursor-not-allowed disabled:opacity-50",
          isIconOnly
            ? "size-10 rounded-full p-0"
            : "gap-2 px-5 py-2.5 text-sm",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {hasIcon && iconPosition === "left" && iconElement}
        {!isIconOnly && children}
        {hasIcon && iconPosition === "right" && iconElement}
        {isIconOnly && !hasIcon && children}
      </button>
    );
  },
);
