import React from 'react';

export interface Notification {
    id: string;
    type: 'info' | 'success' | 'warning';
    title: string;
    description: string;
    timestamp: string;
    icon: React.ReactNode;
    isRead: boolean;
}

export interface NotificationDropdownProps {
    notifications: Notification[];
    onMarkAsRead: (id: string) => void;
    onMarkAllAsRead: () => void;
}

export interface DashboardHeaderProps {
    className?: string;
}
