"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Pre = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    if (!preRef.current) return;

    const text = preRef.current.innerText;

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative group my-4">
      <Button
        onClick={onCopy}
        className={cn(
          "absolute right-3 top-3 z-10 p-2 rounded-md border bg-background/50 backdrop-blur-sm transition-all",
          "opacity-0 group-hover:opacity-100 focus:opacity-100",
          "hover:bg-muted text-muted-foreground hover:text-foreground",
        )}
        size={"icon"}
        aria-label="Copy code"
      >
        {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>

      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto rounded-lg border bg-muted/50 p-4 font-mono text-sm leading-relaxed",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};
