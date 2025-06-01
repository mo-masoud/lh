"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Settings } from "lucide-react";
import { NotificationDropdown } from "./notification-dropdown";
import { sampleNotifications } from "@/lib/data";

export function DashboardHeader({ className }: { className?: string }) {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <div className={cn("flex flex-1 items-center gap-4", className)}>
      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="hidden md:flex w-72">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search passwords, savings..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/50 transition-all duration-200 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <NotificationDropdown
          notifications={notifications}
          onMarkAsRead={handleMarkAsRead}
          onMarkAllAsRead={handleMarkAllAsRead}
        />
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden hover:bg-muted/80 transition-colors"
        >
          <Search className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-muted/80 transition-colors"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
