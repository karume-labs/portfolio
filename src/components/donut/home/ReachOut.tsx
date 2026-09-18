"use client";

import { Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/donut/core/SectionHeader";
import ContactMeFormDialog from "@/components/cupcake/home/ContactMeDialog";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/ui/typography";

const ReachOut = () => {
  return (
    <section id="reach-out" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand/5 -z-20" />
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand/10 via-background/5 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="REACH OUT" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mt-12 sm:mt-20">
          {/* Left Column: Massive Typography */}
          <div className="flex flex-col">
            <TypographyH2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-foreground">
              LET'S WORK <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand via-primary to-brand bg-[length:200%_auto] inline-block pb-2">
                TOGETHER.
              </span>
            </TypographyH2>
            <TypographyP className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed border-l-4 border-brand pl-6">
              I am ready to build your next product. Feel free to reach out to me for collaborations, inquiries, or just to say hi!
            </TypographyP>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col gap-6 w-full max-w-md lg:ml-auto">
            <ContactMeFormDialog 
              trigger={
                <Button className="w-full h-16 sm:h-20 text-lg sm:text-xl rounded-md bg-foreground text-background hover:bg-brand hover:text-white transition-colors duration-300 group">
                  <span className="mr-2">Send me a message</span>
                  <Send className="size-5 sm:size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              }
            />

            <div className="relative flex items-center py-4 opacity-60">
              <div className="flex-grow border-t border-border"></div>
              <span className="shrink-0 px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Or connect via
              </span>
              <div className="flex-grow border-t border-border"></div>
            </div>

            <div className="flex gap-4">
              <Button asChild variant="outline" className="flex-1 h-14 rounded-md border-border hover:border-brand hover:bg-muted hover:text-brand transition-colors group bg-background">
                <Link
                  href="mailto:danielkarume.work@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                  Email
                </Link>
              </Button>

              <Button asChild variant="outline" className="flex-1 h-14 rounded-md border-border hover:border-[#25D366] hover:bg-muted hover:text-[#25D366] transition-colors group bg-background">
                <Link
                  href="https://wa.me/254704150182"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
