import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-violet-500/5 before:to-cyan-500/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        className
      )}
      onClick={onClick}
    >
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 p-2 text-white transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
