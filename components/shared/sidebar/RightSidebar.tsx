import Image from "next/image";
import React from "react";

const TopQuestions = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="flex flex-row gap-2 justify-between">
        <p className="body-medium text-dark500_light700">
          Best practices for data fetching in a Next.js application with
          Server-Side Rendering (SSR)?
        </p>
        <Image
          src="/assets/icons/chevron-right.svg"
          width={20}
          height={20}
          alt="chevron-right"
        />
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <p className="body-medium text-dark500_light700">
          Is it only me or the font is bolder than necessary?
        </p>
        <Image
          src="/assets/icons/chevron-right.svg"
          width={20}
          height={20}
          alt="chevron-right"
        />
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <p className="body-medium text-dark500_light700">
          Redux Toolkit Not Updating State as Expected
        </p>
        <Image
          src="/assets/icons/chevron-right.svg"
          width={20}
          height={20}
          alt="chevron-right"
        />
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <p className="body-medium text-dark500_light700">
          Can I get the course for free?
        </p>
        <Image
          src="/assets/icons/chevron-right.svg"
          width={20}
          height={20}
          alt="chevron-right"
        />
      </div>

      <div className="flex flex-row gap-2 justify-between">
        <p className="body-medium text-dark500_light700">
          Async/Await Function Not Handling Errors Properly
        </p>
        <Image
          src="/assets/icons/chevron-right.svg"
          width={20}
          height={20}
          alt="chevron-right"
        />
      </div>
    </div>
  );
};

const PopularTags = () => {
  return (
    <div className="flex flex-col flex-1 mt-20">
      <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
      <div className="flex flex-col gap-4 mt-7">
        <div className="flex justify-between uppercase items-center">
          <Tag>css</Tag>
          <p className="small-medium text-dark500_light700">13</p>
        </div>
        <div className="flex justify-between uppercase items-center">
          <Tag>next js</Tag>
          <p className="small-medium text-dark500_light700">9</p>
        </div>
      </div>
    </div>
  );
};

type TagProps = {
  children?: React.ReactNode;
  link?: string;
};

export const Tag = ({ link, children }: TagProps) => {
  return (
    <p className="items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 border-transparent bg-slate-900 shadow hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
      {children}
    </p>
  );
};

const RightSidebar = () => {
  return (
    <section className="fixed right-0 top-0 background-light900_dark200 custom-scrollbar border-l dark:border-none shadow-light-300 dark:shadow-none overflow-y-auto h-screen w-full max-w-[350px] max-2xl:hidden pt-28 p-6">
      <TopQuestions />
      <PopularTags />
    </section>
  );
};

export default RightSidebar;
