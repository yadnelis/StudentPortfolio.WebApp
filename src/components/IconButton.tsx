import React, {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  ReactElement,
} from "react";

export interface IconButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg";
  children: ReactElement<ComponentProps<"svg">>;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  size = "sm",
  ...props
}) => {
  const twSize = size === "sm" ? "size-4" : size === "lg" ? "size-8" : "size-6";
  return (
    <button className={`appearance-none ${size}`} {...props}>
      {Children.map(children, (child) =>
        cloneElement(child, {
          className: twSize,
        })
      )}
    </button>
  );
};
