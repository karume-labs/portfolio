"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

const contactMeSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(1, "Please write a message"),
});

type ContactMeFormValues = z.infer<typeof contactMeSchema>;

interface ContactMeFormDialogProps {
  defaultMessage?: string;
  trigger?: React.ReactNode;
}

const ContactMeFormDialog = ({
  defaultMessage = "",
  trigger,
}: ContactMeFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactMeFormValues>({
    resolver: zodResolver(contactMeSchema),
    defaultValues: { name: "", email: "", message: defaultMessage },
  });

  useEffect(() => {
    if (defaultMessage && !form.getValues("message")) {
      form.setValue("message", defaultMessage);
    }
  }, [defaultMessage, form]);

  useEffect(() => {
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => form.clearErrors(), 4000);
      return () => clearTimeout(timer);
    }
  }, [form.formState.errors, form]);

  const handleSubmit = async (values: ContactMeFormValues) => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
        setOpen(false);
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="default" size="lg">
            Send Message
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Let's Connect</DialogTitle>
          <DialogDescription>
            Fill out the form below, and I'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John the Recruiter" {...field} />
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
                      type="email"
                      placeholder="hire.me@job.com"
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
                      placeholder="I would like to hire you, when can you start?"
                      className="h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Spinner className="size-4" /> : "Send Message"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactMeFormDialog;
