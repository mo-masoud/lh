'use client';

import { Button } from '@/components/ui/button';
import { sampleNotifications } from '@/lib/data';
import { DashboardHeaderProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Menu, Search, Settings, Shield, User } from 'lucide-react';
import { useState } from 'react';
import { NotificationDropdown } from './notification-dropdown';

export function DashboardHeader({ className }: DashboardHeaderProps) {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleMarkAsRead = (id: string) => {
        setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
    };

    const handleMarkAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
        <header
            className={cn(
                'bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur',
                'animate-in slide-in-from-top-4 duration-700',
                'border-border/40',
                className,
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
                                <h1 className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-lg font-bold tracking-tight text-transparent">
                                    LifeHub
                                </h1>
                                <p className="text-muted-foreground text-xs">Dashboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Search */}
                    <div className="mx-8 hidden max-w-md flex-1 md:flex">
                        <div className="relative w-full">
                            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                            <input
                                type="text"
                                placeholder="Search passwords, savings..."
                                className="bg-muted/50 border-border placeholder:text-muted-foreground w-full rounded-lg border py-2 pr-4 pl-10 text-sm transition-all duration-200 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Right Section - Actions */}
                    <div className="flex items-center gap-2">
                        <NotificationDropdown notifications={notifications} onMarkAsRead={handleMarkAsRead} onMarkAllAsRead={handleMarkAllAsRead} />
                        <Button variant="ghost" size="sm" className="hover:bg-muted/80 transition-colors md:hidden">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-muted/80 transition-colors">
                            <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-muted/80 relative transition-colors">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-md">
                                <User className="h-3 w-3 text-white" />
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
