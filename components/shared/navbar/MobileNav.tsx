"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger
} from "@/components/ui/sheet";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          pathname.includes(item.route) || pathname === item.route;

        return (
          <SheetClose asChild key={item.label}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"}
                flex items-center justify-start gap-4 bg-transparent p-4 w-full rounded-lg shadow-none
              `}
            >
              <Image
                src={item.imgURL}
                className={`${isActive ? '' : 'invert-colors'}`}
                width={20}
                height={20}
                alt={item.label}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"}`}
              >
              {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

type Props = {};

function MobileNav({}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          className="invert-colors sm:hidden"
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            className="rounded-full"
            src="/uu-logo.svg"
            alt="Uplift Universe Logo"
            width={42}
            height={42}
          />
          <p className="pl-3 h2-bold font-spaceGrotesk text-dark100_light900">
            UPLIFT<span className="text-primary-500">UNIVERSE</span>
          </p>
        </Link>
        <div className="h-full pb-16">
          <div className="flex h-full flex-col justify-between">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Sign In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                    <span className="text-dark400_light900">Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
