"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlogListItem, SectionHeader } from "@/components";
import { useBlogs } from "@/components/cupcake/blogs/BlogsProvider";
import { Button } from "@/components/ui/button";

const BlogsList = () => {
  const { blogs } = useBlogs();
  const path = usePathname();

  return (
    <section
      id="blogs"
      className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12"
    >
      <SectionHeader title="TALK IT LIKE I WALK IT." />

      <ul className="flex flex-col gap-4">
        {blogs
          .slice(0, path.includes("blogs") ? blogs.length : 4)
          .map((blog) => (
            <BlogListItem blog={blog} key={blog.slug} />
          ))}
      </ul>

      {!path.includes("blogs") && (
        <Button asChild className="float-right my-4" variant={"link"}>
          <Link href={"/blogs"}>
            BLOGS
            <ArrowRight />
          </Link>
        </Button>
      )}
    </section>
  );
};

export default BlogsList;
