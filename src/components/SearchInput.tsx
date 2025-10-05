import { Hamburger, HamburgerIcon, Menu, Search } from "lucide-react";
import { TextInput } from "./TextInput";

export const SearchInput = () => {
  return (
    <TextInput
      leftButton={{ icon: <Menu /> }}
      rightButton={{ icon: <Search /> }}
      size="lg"
      placeholder="Search "
      className="bg-slate-100 hover:bg-white **:transition **:transition-200 rounded-lg "
      classNames={{
        input: "",
        wrapper: "",
      }}
    />
  );
};
