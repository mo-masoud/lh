import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NotificationDropdownProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Bell, CheckCheck, Clock } from 'lucide-react';

const typeStyles = {
    info: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    success: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
    warning: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800',
};

const iconStyles = {
    info: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-500',
};

export function NotificationDropdown({ notifications, onMarkAsRead, onMarkAllAsRead }: NotificationDropdownProps) {
    const unreadCount = notifications.filter((n) => !n.isRead).length;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative p-2">
                    <Bell className={cn('h-5 w-5', unreadCount > 0 && 'animate-ring')} />
                    {unreadCount > 0 && (
                        <span className="absolute top-0 right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="max-h-96 w-96 overflow-hidden pb-2" align="end" sideOffset={8}>
                {/* Header */}
                <div className="border-b px-2.5 py-1.5">
                    <div className="flex items-center justify-between">
                        <div>
                            <DropdownMenuLabel className="p-0 font-semibold">Notifications</DropdownMenuLabel>
                            <p className="text-muted-foreground text-sm">{unreadCount} unread notifications</p>
                        </div>
                        {unreadCount > 0 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onMarkAllAsRead}
                                className="group h-8 w-8 p-0 transition-all duration-200 hover:scale-110 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-950/30 dark:hover:text-green-400"
                                title="Mark all as read"
                            >
                                <CheckCheck className="h-4 w-4 group-hover:animate-pulse" />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Notifications List */}
                <div className="max-h-80 overflow-y-auto pb-2">
                    {notifications.length === 0 ? (
                        <div className="text-muted-foreground p-8 pb-4 text-center">
                            <Bell className="mx-auto mb-2 h-8 w-8 opacity-50" />
                            <p>No notifications yet</p>
                        </div>
                    ) : (
                        <div className="space-y-1 p-2 pb-2">
                            {notifications.map((notification) => (
                                <DropdownMenuItem
                                    key={notification.id}
                                    className={cn(
                                        'h-auto min-h-fit cursor-pointer rounded-lg border p-3 transition-all',
                                        typeStyles[notification.type],
                                        !notification.isRead && 'bg-opacity-80',
                                    )}
                                    onClick={() => onMarkAsRead(notification.id)}
                                >
                                    <div className="flex w-full items-start gap-3">
                                        <div className={cn('flex-shrink-0 rounded-full p-2', iconStyles[notification.type])}>
                                            <div className="text-white">{notification.icon}</div>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between">
                                                <p className={cn('text-sm font-medium', !notification.isRead && 'font-semibold')}>
                                                    {notification.title}
                                                </p>
                                                {!notification.isRead && <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />}
                                            </div>
                                            <p className="text-muted-foreground mt-1 text-xs">{notification.description}</p>
                                            <div className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                                                <Clock className="h-3 w-3" />
                                                {notification.timestamp}
                                            </div>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {notifications.length > 0 && (
                    <>
                        <DropdownMenuSeparator />
                        <div className="p-3 pb-4">
                            <DropdownMenuItem className="w-full justify-center">View All Notifications</DropdownMenuItem>
                        </div>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
