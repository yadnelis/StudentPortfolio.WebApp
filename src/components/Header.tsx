import { FC } from "react";
import { SearchInput } from "./SearchInput";

interface HeaderProps {}
export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className=" bg-lime-800 flex justify-center items-center h-13">
      <SearchInput />
    </header>
  );
};
