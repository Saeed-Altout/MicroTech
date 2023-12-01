"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Section from "@/components/common/Section";
import Wrapper from "@/components/common/Wrapper";
import Descraption from "@/components/common/Description";
import { TitleSection } from "@/components/common/Title";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const phoneRegex = /^\+963\s\d{3}\s\d{3}\s\d{3}$/;

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, "Invalid phone number!"),
  inquiryType: z.enum([
    "Building And Designing A Project",
    "General Inquiry",
    "Project Consultation",
    "Technical Support",
    "Partnership Opportunities",
    "Feedback and Suggestions",
    "Bug Report",
    "Custom Development Request",
    "Training and Workshops",
    "Employment Opportunities/Careers",
  ]),
  media: z.enum([
    "Search Engine (e.g., Google, Bing)",
    "Social Media (Specify platform, e.g., LinkedIn, Twitter)",
    "Referral from a Friend or Colleague",
    "Online Advertisement",
    "Blog or Online Article",
    "Other Website (Specify if possible)",
    "Email Newsletter",
    "Print Advertisement (Specify publication if applicable)",
    "Other (Please Specify)])",
  ]),
  faq: z.enum(["4", "5", "6"]),
  message: z.string().min(1).optional(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "Jon",
      lastName: "Doe",
      phone: "+963 940 043 810",
      inquiryType: "Building And Designing A Project",
      media: "Search Engine (e.g., Google, Bing)",
      message: "How are you?",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Section id="contact">
      <Wrapper styles="!flex-col">
        <div className="flex justify-center items-center flex-col lg:max-w-3xl text-center">
          <TitleSection>Contact Us</TitleSection>
          <Descraption>
            Let's turn your vision into reality. Get in touch with us today and
            let the digital transformation begin!
          </Descraption>
        </div>

        <div className="border w-full border-neutral-200  rounded-lg md:p-10 p-5 max-w-5xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold lg:text-lg">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Jon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold lg:text-lg">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
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
                    <FormLabel className="font-semibold lg:text-lg">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="jondoe@gmail.com" {...field} />
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
                    <FormLabel className="font-semibold lg:text-lg">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+963 940 043 810" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold lg:text-lg">
                      Inquiry Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Building And Designing A Project" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Building And Designing A Project">
                          Building And Designing A Project
                        </SelectItem>
                        <SelectItem value="General Inquiry">
                          General Inquiry
                        </SelectItem>
                        <SelectItem value="Project Consultation">
                          Project Consultation
                        </SelectItem>
                        <SelectItem value="Technical Support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="Partnership Opportunities">
                          Partnership Opportunities
                        </SelectItem>
                        <SelectItem value="Feedback and Suggestions">
                          Feedback and Suggestions
                        </SelectItem>
                        <SelectItem value="Bug Report">Bug Report</SelectItem>
                        <SelectItem value="Custom Development Request">
                          {" "}
                          Custom Development Request
                        </SelectItem>
                        <SelectItem value="Training and Workshops">
                          Training and Workshops
                        </SelectItem>
                        <SelectItem value="Employment Opportunities/Careers">
                          Employment Opportunities/Careers
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="media"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold lg:text-lg">
                      How Did You Hear About Us?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Search Engine (e.g., Google, Bing)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Search Engine (e.g., Google, Bing)">
                          Search Engine (e.g., Google, Bing)
                        </SelectItem>
                        <SelectItem value="Social Media (Specify platform, e.g., LinkedIn, Twitter)">
                          Social Media (Specify platform, e.g., LinkedIn,
                          Twitter)
                        </SelectItem>
                        <SelectItem value="Referral from a Friend or Colleague">
                          Referral from a Friend or Colleague
                        </SelectItem>
                        <SelectItem value="Online Advertisement">
                          Online Advertisement
                        </SelectItem>
                        <SelectItem value="Blog or Online Article">
                          Blog or Online Article
                        </SelectItem>
                        <SelectItem value="Email Newsletter">
                          Email Newsletter
                        </SelectItem>
                        <SelectItem value="Print Advertisement (Specify publication if applicable)">
                          Print Advertisement (Specify publication if
                          applicable)
                        </SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="col-span-1 lg:col-span-3">
                    <FormLabel className="font-semibold lg:text-lg">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please write what you think.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="lg:w-fit lg:ml-auto col-span-1 lg:col-start-3 lg:col-end-3"
              >
                Send your message
              </Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Contact;
