import { Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import type React from "react";
import { BlogListItem, ExplainDropdown } from "@/components";
import { Badge } from "@/components/ui/badge";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { getBlog, getRelatedBlogs } from "@/lib/blogs";
import { timeSinceOrDate } from "@/lib/utils";

interface BlogDetailParams {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: BlogDetailParams): Promise<Metadata> => {
  const slug = (await params).slug;
  const { compiledMDX } = await getBlog(slug);
  const { title, description, date, image, tags } = compiledMDX.frontmatter;

  return {
    title: {
      absolute: `Blogs | ${title}`,
    },
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: date,
      tags,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: image ? [image] : [],
    },
  };
};

const BlogDetailPage: React.FC<BlogDetailParams> = async ({ params }) => {
  const slug = (await params).slug;
  const { compiledMDX, source } = await getBlog(slug);

  const blog = compiledMDX.frontmatter;

  const relatedBlogs = await getRelatedBlogs(slug, blog.tags, 4);

  return (
    <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 my-24">
      <header>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-4" />
              {timeSinceOrDate(blog.date)}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="size-4" />
              {blog.readingTime}
            </span>
          </div>

          <ExplainDropdown title={blog.title} source={source} />
        </div>

        <TypographyH1 className="text-4xl font-bold mb-4">
          {blog.title}
        </TypographyH1>

        <TypographyP className="text-muted-foreground mb-6">
          {blog.description}
        </TypographyP>

        <div className="flex gap-2 flex-wrap mb-6">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="uppercase">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
          <TypographyP className="italic text-muted-foreground m-0">
            <strong className="text-foreground not-italic">TL;DR:</strong>{" "}
            {blog["TL;DR"]}
          </TypographyP>
        </div>
      </header>

      {blog.image && (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-contain w-full h-full bg-black"
              priority
            />
          </div>

          {blog.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
              {blog.caption}
            </figcaption>
          )}
        </figure>
      )}

      <article className="mt-10">{compiledMDX.content}</article>

      {relatedBlogs.length > 0 && (
        <section className="mt-24 border-t pt-12">
          <TypographyH2 className="text-2xl font-semibold mb-8">
            Related Blogs
          </TypographyH2>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedBlogs.map((blog) => (
              <BlogListItem blog={blog} key={blog.title} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
