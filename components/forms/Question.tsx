"use client";

import React, { forwardRef, useState } from "react";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validations";
import dynamic from "next/dynamic";
import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import { Badge } from "@/components/ui/badge";
import { Tag } from "../shared/sidebar/RightSidebar";
import Image from "next/image";

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import("@/components/forms/MDXeditor"), {
  // Make sure we turn SSR off
  ssr: false
});

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />
);

// TS complains without the following line
ForwardRefEditor.displayName = "ForwardRefEditor";

const Question = () => {
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: []
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    setIsSubmitting(true);

    try {
    
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }

  }

  function handleOnKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    field: ControllerRenderProps<
      {
        title: string;
        description: string;
        tags: [string, ...string[]];
      },
      "tags"
    >
  ) {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;

      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be at most 15 characters long"
          });
        }

        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      }
      else {
        form.trigger();
      }
    }
  }

  function handleDeleteTag(tag: string, field: any) {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags",  newTags) ;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800 ">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h[56px] border" />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-1">
              <FormLabel className="paragraph-semibold text-dark400_light800 ">
                Description<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5 border light-border-2">
                <ForwardRefEditor markdown="" />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Include all the information someone would need to answer your
                question. Minimum 10 characters.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800 ">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h[56px] border"
                  placeholder="e.g. meditation, productivity, health"
                  onKeyDown={(e) => handleOnKeyDown(e, field)}
                />


                {field.value.length > 0 && ( 
                  <div className="flex-start flex-wrap gap-2.5 mt-2.5">
                    {field.value.map((tag, index) => (
                      <Badge
                        className="subtle-medium background-light800_dark300 text-dark400_light800 flex items-center justify-center gap-2 rounded-md border-none px-2 py-4 capitalize"
                        key={tag}
                        onClick={() => handleDeleteTag(tag, field)}
                      >
                        {tag}
                        <Image src="/assets/icons/close.svg" width={12} height={12} alt="close" className="cursor-pointer object-contain invert-0 dark:invert" />
                      </Badge>
                    ))}
                  </div>
                )}
                </>
                
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 3 tags to describe what your question is about.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button className="primary-gradient w-fit !text-light-900" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Saving..." : "Ask Question"}
        </Button>
      </form>
    </Form>
  );
};

export default Question;

