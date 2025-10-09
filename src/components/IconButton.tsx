import { Button, MantineSize } from "@mantine/core";
import React, {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  ReactElement,
} from "react";

export interface IconButtonProps extends ComponentProps<"button"> {
  size?: MantineSize | (string & {});
  children: ReactElement<ComponentProps<"svg">>;
}

export const IconButton: FC<IconButtonProps> = ({
  children,
  size = "sm",
  className,
  ...props
}) => {
  const twSize = size === "sm" ? "size-4" : size === "lg" ? "size-6" : "size-5";
  return (
    <button className={`appearance-none p-1 rounded-xs group/iconbutton inline-flex justify-center items-center ${className}`} {...props}>
      {Children.map(children, (child) =>
        cloneElement(child, {
          className: [twSize, React.Children.only(child).props.className,
            "text-stone-600 group-hover/iconbutton:text-gray-400 group-active/iconbutton::text-gray-950 transition transition-50"
           ].join(" "),
        })
      )}
    </button>
  );
};
