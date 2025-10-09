import {
  TextInput as MTextInput,
  TextInputProps as MTextInputProps,
} from "@mantine/core";
import { LucideProps } from "lucide-react";
import { FC, ReactElement } from "react";

import { IconButton, IconButtonProps } from "@/components/IconButton";

type buttonProps = { icon: ReactElement<Omit<LucideProps, "ref">> } & Omit<
  IconButtonProps,
  "children"
>;

interface TextInputProps extends MTextInputProps {
  leftButton?: buttonProps;
  rightButton?: buttonProps;
  classNames?: Record<"input" | "wrapper" | string, string>;
}

export const TextInput: FC<TextInputProps> = ({
  leftButton,
  rightButton,
  size,
  className,
  classNames,
  ...props
}) => {
  if(leftButton) {
    props.leftSection = <IconButton size={"sm"} {...leftButton}>{leftButton.icon}</IconButton>
  }
  if(rightButton) {
    props.rightSection = <IconButton size={"sm"} {...rightButton}>{rightButton.icon}</IconButton>
  }

  return (
    <div className="relative">
      <MTextInput {...props} classNames={{input: "bg-slate-50 " + (className??""), ...classNames}}/>
    </div>
  );
};

TextInput.displayName = "TextInput";
