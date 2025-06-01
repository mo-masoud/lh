import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Clock, CheckCheck } from "lucide-react";
import { NotificationDropdownProps } from "@/lib/types";

const typeStyles = {
  info: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
  success:
    "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
  warning:
    "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
};

const iconStyles = {
  info: "bg-gradient-to-r from-blue-500 to-cyan-500",
  success: "bg-gradient-to-r from-green-500 to-emerald-500",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500",
};

export function NotificationDropdown({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}: NotificationDropdownProps) {
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative p-2">
          <Bell className={cn("h-5 w-5", unreadCount > 0 && "animate-ring")} />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-1 bg-red-500 text-white text-[11px] font-bold rounded-full size-4 flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-96 max-h-96 overflow-hidden pb-2"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="px-2.5 py-1.5 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DropdownMenuLabel className="p-0 font-semibold">
                Notifications
              </DropdownMenuLabel>
              <p className="text-sm text-muted-foreground">
                {unreadCount} unread notifications
              </p>
            </div>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMarkAllAsRead}
                className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-950/30 dark:hover:text-green-400 transition-all duration-200 hover:scale-110 group"
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
            <div className="p-8 pb-4 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No notifications yet</p>
            </div>
          ) : (
            <div className="p-2 space-y-1 pb-2">
              {notifications.map((notification) => (
                <DropdownMenuItem
                  key={notification.id}
                  className={cn(
                    "p-3 rounded-lg border transition-all cursor-pointer min-h-fit h-auto",
                    typeStyles[notification.type],
                    !notification.isRead && "bg-opacity-80"
                  )}
                  onClick={() => onMarkAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3 w-full">
                    <div
                      className={cn(
                        "rounded-full p-2 flex-shrink-0",
                        iconStyles[notification.type]
                      )}
                    >
                      <div className="text-white">{notification.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <p
                          className={cn(
                            "font-medium text-sm",
                            !notification.isRead && "font-semibold"
                          )}
                        >
                          {notification.title}
                        </p>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.description}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
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
              <DropdownMenuItem className="w-full justify-center">
                View All Notifications
              </DropdownMenuItem>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
