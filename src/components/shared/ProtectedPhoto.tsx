"use client";

import { cn } from "@/lib/utils";

type ProtectedPhotoProps = {
  src: string;
  className?: string;
  position?: string;
};

export function ProtectedPhoto({
  src,
  className,
  position = "center 12%",
}: ProtectedPhotoProps) {
  return (
    <div
      role="img"
      aria-label="Karthikeyan Aruldoss"
      className={cn("absolute inset-0 select-none [webkit-user-drag:none]", className)}
      style={{
        backgroundImage: `url(${(process.env.NEXT_PUBLIC_BASE_PATH || "") + src})`,
        backgroundSize: "cover",
        backgroundPosition: position,
        userSelect: "none",
      }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    />
  );
}
