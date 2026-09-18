"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

const subscribeSchema = z.object({
  email: z.email({ message: "Please enter a valid email" }),
});

type SubscribeSchema = z.infer<typeof subscribeSchema>;

export const SubscribeForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<SubscribeSchema>({
    defaultValues: { email: "" },
    resolver: zodResolver(subscribeSchema),
  });

  const handleOnSubmit = async (data: SubscribeSchema) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Nameless",
          email: data.email,
          message: "Add me to your newsletter subscriptions",
        }),
      });

      if (res.ok) {
        form.reset();
        toast.success("Subscribed successfully!");
      } else {
        toast.error("Failed to subscribe. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOnError = (errors: typeof form.formState.errors) => {
    if (errors.email) toast.error(errors.email.message);
  };

  useEffect(() => {
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => form.clearErrors(), 4000);
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors, form]);

  return (
    <div className="w-full max-w-md">
      <div className="mb-4">
        <TypographyH2 className="text-lg font-semibold">
          You, yes you. SUBSCRIBE TO MY NEWSLETTER!
        </TypographyH2>
        <TypographyP className="text-sm text-muted-foreground">
          Get updates on my latest projects, blog posts, and behind-the-scenes
          insights. No spam, just valuable content delivered straight to your
          inbox!
        </TypographyP>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleOnSubmit, handleOnError)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1 w-full min-w-[250px]">
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    className="w-full"
                    disabled={loading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="secondary"
            disabled={loading}
            className="w-full sm:w-auto"
          >
            {loading ? <Spinner className="size-4" /> : "Involve Me!"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
