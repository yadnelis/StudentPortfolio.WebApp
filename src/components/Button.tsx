import {
  ButtonProps as MTNButtonProps,
  Button as MTNButton,
} from "@mantine/core";
import { ComponentProps, FC } from "react";
import { tv } from "tailwind-variants";

export const Button: FC<ButtonProps> = ({
  className,
  rounded = "default",
  color = "default",
  children,
  ...rest
}) => {
  const tailwind = buttonVariants({ className, color, rounded });
  return (
    <button className={tailwind} {...rest}>
      {children}
    </button>
  );
};

export interface ButtonProps extends ComponentProps<"button"> {
  color?: "default" | "secondary" | "primary" | "accent";
  rounded?: "default" | "none" | "max";
}

const buttonVariants = tv({
  base: "text-sm p-2 px-3 text-nowrap",
  variants: {
    color: {
      accent: "bg-accent text-secondary font-semibold",
      primary: "bg-lime-600 text-white font-semibold",
      secondary: "bg-slate-300",
      default: "",
    },
    rounded: {
      none: "",
      default: "rounded",
      max: "rounded-lg",
    },
  },
});
