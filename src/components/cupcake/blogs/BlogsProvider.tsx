"use client";

import { createContext, type ReactNode, useContext } from "react";
import type { BlogFrontmatter } from "@/lib/types";

interface BlogsContext {
  blogs: BlogFrontmatter[];
}

const BlogsContext = createContext<BlogsContext | undefined>(undefined);

interface BlogsProvider extends Readonly<{ children: ReactNode }> {
  blogs: BlogFrontmatter[];
}

export const BlogsProvider: React.FC<BlogsProvider> = ({ children, blogs }) => {
  return (
    <BlogsContext.Provider value={{ blogs }}>{children}</BlogsContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogsProvider");
  }

  return context;
};
