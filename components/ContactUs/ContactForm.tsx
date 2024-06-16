"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { ToastAction } from "../ui/toast";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  title: z.string().min(1, {
    message: "title must be at least 1 character.",
  }),
  institution: z.string().min(2, {
    message: "Institution must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email()
    .trim()
    .toLowerCase(),
  phone: z.string().min(6, {
    message: "Phone number must be at least 6 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  agreement: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [state, setState] = useState("Ready")

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      title: "",
      institution:"",
      email: "",
      phone: "",
      message: "",
      agreement: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const formDataObject = data
    try {
      setState("Loading")
      console.log(JSON.stringify(data))
      toast({
        variant:"default",
        description: (
          <div className="w-fit rounded-md p-2">Message successfully sent!</div>
        ),
      })
      setState("Ready");
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        variant:"destructive",
        description: (
          <div className="w-full rounded-md p-2">Couldn`&apos;`t send your message!</div>
        ),
        action: <ToastAction altText="Try again">Try again</ToastAction>
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  id="name"
                  placeholder="Enter your full name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  id="email"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  id="title"
                  placeholder="Enter your title"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  id="institution"
                  placeholder="Enter your institution's name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  className="bg-muted"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="border w-full p-2"
                  id="message"
                  placeholder="Enter your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex align-end h-fit">
              <FormControl className="my-2">
                <Checkbox
                  id="agreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                className="mx-2 text-sm font-normal text-muted-foreground"
                htmlFor="agreement"
              >
                I agree to the
                {"  "}
                <Link href="/terms">
                  <button className="underline underline-offset-2">
                    Terms & Conditions
                  </button>
                </Link>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={'default'} type="submit" disabled={state === "Loading"}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
