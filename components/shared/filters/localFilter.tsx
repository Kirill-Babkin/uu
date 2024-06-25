"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";


type LocalFilterProps = {
  options: {name: string, value: string}[]
}

const LocalFilter = ({options}: LocalFilterProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex-wrap md:flex justify-start self-start mt-10 gap-4">
      {options.map((option, index) => (
        <Button
          key={option.value}
          className={`text-sm font-medium transition-colors dark:bg-dark-200 bg-light-800 text-light-500 px-6 py-3 capitalize hover:bg-light-700 dark:hover:bg-dark-400 dark:hover:text-dark-900 rounded-md border-none shadow-none focus:outline-none ${
            option.value === selectedOption
            ? "bg-primary-100 text-primary-500"
              : ""
          }`}
          onClick={() => setSelectedOption(option.value)}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};

export default LocalFilter;
