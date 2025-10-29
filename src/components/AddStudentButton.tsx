import { ButtonProps } from "@mantine/core";
import { extend } from "dayjs";
import { FC } from "react";
import { IconButton } from "./IconButton";
import { UserPlus } from "lucide-react";

export interface AddStudentButtonProps extends ButtonProps {}

export const AddStudentButton: FC<AddStudentButtonProps> = ({ className }) => {
  return (
    <div
      className={`${className} p-1 bg-gradient-to-b from-green-400 to-lime-600 rounded-full`}
    >
      <IconButton
        size="xl"
        className={`!rounded-full bg-gradient-to-r from-lime-600 to-green-800 p-3`}
      >
        <UserPlus className="!text-lime-50" />
      </IconButton>
    </div>
  );
};
