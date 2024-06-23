"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const SideBarContent = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col justify-between pt-28 p-6 w-full">
      <div className="flex flex-col gap-4 pb-7">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname.includes(item.route) || pathname === item.route;

          return (
            <Link
              key={item.label}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              }
                flex items-center justify-start max-lg:justify-center gap-4 bg-transparent p-4 w-full rounded-lg shadow-none
              `}
            >
              <Image
                src={item.imgURL}
                className={`${isActive ? "" : "invert-colors"}`}
                width={20}
                height={20}
                alt={item.label}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="">
        <SignedOut>
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image src="/assets/icons/account.svg" width={20} height={20} alt="account" className="inverted-colors lg:hidden"/> 
                <span className="primary-text-gradient max-lg:hidden">Sign In</span>
              </Button>
            </Link>

            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                <Image src="/assets/icons/sign-up.svg" width={20} height={20} alt="Sign-up" className="inverted-colors lg:hidden" /> 
                <span className="text-dark400_light900 max-lg:hidden">Sign Up</span>
              </Button>
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <Link href="/sign-out">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image src="/assets/icons/sign-out.svg" width={20} height={20} alt="Sign-up" className="inverted-colors lg:hidden" /> 
              <span className="primary-text-gradient  max-lg:hidden" >Sign Out</span>
            </Button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
};

function LeftSidebar() {
  return (
    <section className="flex flex-col h-screen custom-scrollbar overflow-y-auto max-lg:w-[120px] lg:w-[266px] w-full background-light800_darkgradient items-start justify-between max-sm:hidden">
      <SideBarContent />
    </section>
  );
}

export default LeftSidebar;
