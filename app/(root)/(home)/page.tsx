import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LocalSearch } from "@/components/shared/search/LocalSearch";
import LocalFilter from "@/components/shared/filters/LocalFilter";
import DropdownFilter from "@/components/shared/filters/DropdownFilter";
import { AnswerFilters, HomePageFilters } from "@/constants/filters";
import QuestionCard from "@/components/shared/QuestionCard";
import { Book } from "lucide-react";
import BookCard from "@/components/shared/BookCard";
import { books } from "@/database/books-stubs";

function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex flex-1 flex-col justify-between gap-5 max-sm:flex-col sm:items-center">
        <div className="w-full flex max-sm:flex-col gap-4">
          <LocalSearch
            placeholder="Search Questions"
            otherClasses="flex-1"
            iconsPosition="left"
          />
          <DropdownFilter options={AnswerFilters}/>
        </div>
        <div className="w-full max-lg:hidden">
          <LocalFilter options={HomePageFilters}/>
        </div>
      </div>

      <div className="mt-10 gap-6 flex flex-row flex-wrap w-full max-md:justify-center">
        {books.sort((bookA, bookB) => +bookA.order - +bookB.order ).map((book) => (
          <BookCard book={book} key={book["unique id"]} />

        ))}
      </div>

      <div className="mt-10 gap-6 flex flex-col w-full">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </>
  );
}

export default Home;
