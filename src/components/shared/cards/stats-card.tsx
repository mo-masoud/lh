import React from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  changeType,
  icon,
  className,
}: StatsCardProps) {
  const changeColors = {
    positive: "text-green-600 dark:text-green-400",
    negative: "text-red-600 dark:text-red-400",
    neutral: "text-muted-foreground",
  };

  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md",
        "animate-in slide-in-from-bottom-4 duration-500",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="rounded-lg bg-muted/50 p-2 text-muted-foreground">
          {icon}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <span className={cn("text-sm font-medium", changeColors[changeType])}>
          {change}
        </span>
        <span className="text-xs text-muted-foreground">from last month</span>
      </div>
    </div>
  );
}
