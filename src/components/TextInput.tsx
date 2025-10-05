import {
  TextInput as Input,
  TextInputProps as InputProps,
} from "@mantine/core";
import { Search } from "lucide-react";
import { IconButton, IconButtonProps } from "./IconButton";
import { ComponentProps, FC, ReactElement, ReactNode } from "react";
import { styles } from "@/utilities/styles";
import "@mantine/core/styles/Input.css";

type buttonProps = { icon: ReactElement<ComponentProps<"svg">> } & Omit<
  IconButtonProps,
  "children"
>;

interface TextInputProps extends InputProps {
  leftButton?: buttonProps;
  rightButton?: buttonProps;
  classNames?: Record<"input" | "wrapper" | string, string>;
}

export const TextInput: FC<TextInputProps> = ({
  leftButton,
  rightButton,
  classNames,
  size,
  className = "bg-slate-50",
  ...props
}) => {
  if (leftButton) {
    props.leftSection = <IconButton className="">{leftButton.icon}</IconButton>;
  }
  if (rightButton) {
    props.rightSection = (
      <IconButton className="">{rightButton.icon}</IconButton>
    );
  }

  return <Input className={className} {...props} />;
};
