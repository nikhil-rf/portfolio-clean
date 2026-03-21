"use client";

import { Icons, type IconProps } from "@/components/icons";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useRef, useCallback, type ReactElement } from "react";

// Map skill label (as shown in UI) to icon key in Icons
const SKILL_ICON_MAP: Record<string, keyof typeof Icons> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  "C/C++": "cpp",
  "C++": "cpp",
  "React.js": "react",
  React: "react",
  "Next.js": "nextjs",
  Nextjs: "nextjs",
  Nodejs: "nodejs",
  "Node.js": "nodejs",
  Tailwind: "tailwindcss",
  Express: "express",
  "Express.js": "express",
  Postgres: "postgres",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  Mongoose: "mongoose",
  Prisma: "prisma",
  "Prisma ORM": "prisma",
  Git: "git",
  "Git/GitHub": "github",
  GitHub: "github",
  Postman: "postman",
  Docker: "docker",
  Redis: "redis",
  AWS: "aws",
  Python: "postman", // fallback
  GSAP: "react", // fallback
  ShadCN: "react", // fallback
  Vercel: "aws", // fallback
  "WebSockets (Socket.io)": "nodejs",
  Clerk: "react",
  Neon: "postgres",
  "Data Structures and Algorithm": "cpp",
};

const DEFAULT_ICON_KEY: keyof typeof Icons = "react";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

const CURSOR_FOLLOW_DISTANCE = 12;
const RETURN_DURATION = 0.4;
const RETURN_EASE = "back.out(1.2)";

export function SkillBadge({ label, className }: SkillBadgeProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);

  const iconKey = SKILL_ICON_MAP[label] ?? DEFAULT_ICON_KEY;
  const IconComponent = Icons[iconKey] as (props: IconProps) => ReactElement;

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const badge = badgeRef.current;
      if (!badge) return;
      const rect = badge.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width;
      const dy = (e.clientY - centerY) / rect.height;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      const moveX = (dx / len) * Math.min(len * 50, CURSOR_FOLLOW_DISTANCE);
      const moveY = (dy / len) * Math.min(len * 50, CURSOR_FOLLOW_DISTANCE);
      xRef.current = moveX;
      yRef.current = moveY;
      gsap.to(badge, {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: "power2.out",
        overwrite: true,
      });
    },
    []
  );

  const onMouseLeave = useCallback(() => {
    const badge = badgeRef.current;
    if (!badge) return;
    gsap.to(badge, {
      x: 0,
      y: 0,
      duration: RETURN_DURATION,
      ease: RETURN_EASE,
      overwrite: true,
    });
    xRef.current = 0;
    yRef.current = 0;
  }, []);

  return (
    <div
      ref={badgeRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "inline-flex min-w-[50px] items-center gap-2 rounded-lg border border-dashed border-white/70 bg-transparent px-2 py-1.5 text-xs text-white/95 transition-colors cursor-pointer",
        "hover:border-white/90 hover:bg-gray-100/10",
        className
      )}
    >
      <div className="flex shrink-0 items-center justify-center [&>svg]:size-4">
        <IconComponent className="size-4 shrink-0 text-white" />
      </div>
      <span className="font-medium">{label}</span>
    </div>
  );
}
