"use client";

import { useEffect, useRef, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  const isDragging = useRef(false);

  useEffect(() => {
    const update = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, Math.round(pct))));
    };

    const onScroll = () => {
      if (!isDragging.current) {
        if (!ticking.current) {
          requestAnimationFrame(() => {
            update();
            ticking.current = false;
          });
          ticking.current = true;
        }
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToPercentage = (pct: number) => {
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: (pct / 100) * docHeight,
      behavior: "auto",
    });
  };

  const handleClickOrDrag = (clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const pct = Math.max(0, Math.min(100, (y / rect.height) * 100));
    setProgress(pct);
    scrollToPercentage(pct);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleClickOrDrag(e.clientY);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      handleClickOrDrag(e.clientY);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      role="scrollbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-orientation="vertical"
      aria-controls="root"
      tabIndex={0}
      onMouseDown={handleMouseDown}
      className="fixed right-4 top-1/2 -translate-y-1/2 h-32 w-2 z-50 select-none"
    >
      <div className="relative h-full w-full bg-primary border border-primary rounded-full overflow-hidden">
        <div
          className="absolute top-0 w-full bg-primary-foreground rounded-md transition-all duration-75"
          style={{ height: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
