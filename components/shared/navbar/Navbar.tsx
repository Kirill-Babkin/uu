"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-6 p-3 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          className="rounded-full"
          src="/uu-logo.svg"
          alt="Uplift Universe Logo"
          width={42}
          height={42}
        />
        <p className="pl-3 h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          UPLIFT<span className="text-primary-500">UNIVERSE</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-10"
              },
              variables: {
                colorPrimary: "#ff7000"
              }
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
