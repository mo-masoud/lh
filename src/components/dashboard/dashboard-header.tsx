import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bell, Search, Settings, User, Menu, Shield } from "lucide-react";

interface DashboardHeaderProps {
  className?: string;
}

export function DashboardHeader({ className }: DashboardHeaderProps) {
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
        <div className="flex h-16 items-center justify-between">
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
            <Button
              variant="ghost"
              size="sm"
              className="relative hover:bg-muted/80 transition-colors"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center animate-pulse">
                2
              </span>
            </Button>
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
