"use client";

import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem
} from "@/components/ui/select";

type Props = {
  options: { name: string, value: string }[]
}


const DropdownFilter = ({options}: Props) => {
  const [selectedItem, setSelectedItem] = useState("")

  return (
    <Select onValueChange={(val) => setSelectedItem(val)}>
      <SelectTrigger className="hidden max-lg:flex w-full min-h-[56px] items-center border-slate-200 rounded-xl focus:outline-none outline-none focus:ring-0 body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 sm:max-w-[170px]">
        <SelectValue placeholder="Select a Filter" />
      </SelectTrigger>
      <SelectContent className="background-light800_dark300 body-regular text-dark500_light700 border-none">
        <SelectGroup>
          {options.map((option, index) => (
            <SelectItem
              className={`hover:bg-light800_dark400 ${option.value === selectedItem ? "text-primary-500" : ""}`}
              value={option.value}
              key={option.value}
            >
              {option.name}
            </SelectItem>
          ))}

        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropdownFilter;
