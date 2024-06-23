import React from "react";
import { themes } from "@/constants";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

function Theme({}) {
  const { mode, setMode } = useTheme();

  const renderIcon = (mode: string) => {
    if (mode === "light") {
      return "/assets/icons/sun.svg";
    } else if (mode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "/assets/icons/moon.svg"
        : "/assets/icons/sun.svg";
    } else {
      return "/assets/icons/moon.svg";
    }
  }

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
            <Image
              src={renderIcon(mode)}
              alt="theme-mode"
              width={20}
              height={20}
              className="active-theme"
            />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={theme.value}
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={theme.icon}
                alt={theme.label}
                width={16}
                height={16}
                className={`${mode === theme.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
