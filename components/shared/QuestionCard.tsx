import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tag } from "./sidebar/RightSidebar";
import Image from "next/image";

const QuestionCard = () => {
  return (
    <Card className="rounded-lg border-none card-wrapper">
      <CardHeader className="gap-3">
        <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
          Best practices for data fetching in a Next.js application with
          Server-Side Rendering (SSR)?
        </h3>
        <div className="flex gap-4 w-full flex-wrap ">
          <Tag>Next.js</Tag>
          <Tag>Next.js</Tag>
          <Tag>Next.js</Tag>
        </div>
      </CardHeader>
      <CardFooter>
        <div className="flex justify-between w-full flex-wrap">
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={"/assets/icons/avatar.svg"}
              width={20}
              height={20}
              alt="user-avatar"
            />
            <p className="text-dark200_light900 text-sm">User Name</p>
            <p className="text-dark200_light900 text-xs">
              • asked 277 days ago
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/like.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">1 votes</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/message.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">2 Answers</p>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/assets/icons/eye.svg"}
                width={20}
                height={20}
                alt="user-avatar"
              />
              <p className="text-dark200_light900 text-xs">204 Views</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
