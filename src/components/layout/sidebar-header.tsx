'use client';

import { Button } from '@/components/ui/button';
import { sampleNotifications } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Search, Settings } from 'lucide-react';
import { useState } from 'react';
import { NotificationDropdown } from './notification-dropdown';

export function DashboardHeader({ className }: { className?: string }) {
    const [notifications, setNotifications] = useState(sampleNotifications);

    const handleMarkAsRead = (id: string) => {
        setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)));
    };

    const handleMarkAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    };

    return (
        <div className={cn('flex flex-1 items-center gap-4', className)}>
            {/* Spacer */}
            <div className="flex-1" />

            {/* Search */}
            <div className="hidden w-72 md:flex">
                <div className="relative w-full">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                    <input
                        type="text"
                        placeholder="Search passwords, savings..."
                        className="bg-muted/50 border-border placeholder:text-muted-foreground w-full rounded-lg border py-2 pr-4 pl-10 text-sm transition-all duration-200 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <NotificationDropdown notifications={notifications} onMarkAsRead={handleMarkAsRead} onMarkAllAsRead={handleMarkAllAsRead} />
                <Button variant="ghost" size="sm" className="hover:bg-muted/80 transition-colors md:hidden">
                    <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-muted/80 transition-colors">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
