"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Settings, User, Menu, Shield } from "lucide-react";
import { NotificationDropdown } from "./notification-dropdown";
import { sampleNotifications } from "@/lib/data";
import { DashboardHeaderProps } from "@/lib/types";

export function DashboardHeader({ className }: DashboardHeaderProps) {
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "animate-in slide-in-from-top-4 duration-700",
        "border-border/40",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-12 items-center justify-between">
          {/* Left Section - Logo/Brand */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 p-2 shadow-md">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  LifeHub
                </h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search passwords, savings..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/50 transition-all duration-200 placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Right Section - Actions */}
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
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-muted/80 transition-colors"
            >
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center shadow-md">
                <User className="h-3 w-3 text-white" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
