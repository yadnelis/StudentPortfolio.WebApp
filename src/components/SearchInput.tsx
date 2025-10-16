"use client";
import { Hamburger, HamburgerIcon, Menu, Search, X } from "lucide-react";
import { TextInput, TextInputProps } from "@/components/TextInput";
import { useDebouncedState, useDebouncedValue } from '@mantine/hooks';
import { FC, useEffect, useState } from "react";

export interface SearchInputProps extends TextInputProps {
  onChangeDebounceValue: (value: string) => void
}

export const SearchInput:FC<SearchInputProps> = ({onChangeDebounceValue, ...props}) => {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);

  useEffect(()=> {
    onChangeDebounceValue?.(debounced);
  }, [debounced]);


  return (
    <TextInput
      leftButton={{ icon: <Menu/> }}
      rightButton={{ icon: <X/>, onClick: (e) => setValue("") }}
      size="md"
      placeholder="Search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="!bg-slate-100 hover:!bg-white rounded-lg !border-0 !px-12"
      {...props}
    />
  );
};
