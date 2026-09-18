"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { useBlogs } from "@/components/cupcake/blogs/BlogsProvider";
import SectionHeader from "@/components/donut/core/SectionHeader";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { timeSinceOrDate } from "@/lib/utils";

const BlogsList = () => {
  const { blogs } = useBlogs();
  const path = usePathname();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="blogs" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="TALK IT LIKE I WALK IT." />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogs
            .slice(0, path.includes("blogs") ? blogs.length : 4)
            .map((blog) => (
              <motion.div key={blog.slug} variants={itemVariants}>
                <Link href={`/blogs/${blog.slug}`} className="block h-full">
                  <div className="group relative flex flex-col h-full rounded-md bg-muted/50 border border-border transition-colors duration-300 p-6 hover:bg-muted hover:border-brand">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {timeSinceOrDate(blog.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {blog.readingTime}
                      </span>
                    </div>
                    
                    <TypographyH3 className="font-display font-semibold text-xl mb-3 text-foreground/90 group-hover:text-brand transition-colors">
                      {blog.title}
                    </TypographyH3>
                    
                    <TypographyP className="text-sm text-muted-foreground mb-6 line-clamp-3">
                      {blog.description}
                    </TypographyP>

                    <div className="mt-auto flex gap-1.5 flex-wrap">
                      {blog.tags?.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-background/50 border border-border text-[10px] font-medium text-muted-foreground uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </motion.div>

        {!path.includes("blogs") && (
          <div className="flex justify-end mt-12">
            <Button asChild variant="link" className="text-brand hover:text-brand/80 gap-2 font-medium">
              <Link href="/blogs">
                VIEW ALL BLOGS
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsList;
