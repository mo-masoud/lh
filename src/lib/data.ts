import { CheckCircle, DollarSign, Globe, Lock, Terminal, Zap } from 'lucide-react';
import React from 'react';
import { Notification } from './types';

// Helper function to create notification icons
export const createNotificationIcon = (IconComponent: React.ComponentType<{ className?: string }>) =>
    React.createElement(IconComponent, { className: 'h-4 w-4' });

export const sampleNotifications: Notification[] = [
    {
        id: '1',
        type: 'success',
        title: 'Password Updated',
        description: 'GitHub account password updated successfully',
        timestamp: '2h ago',
        icon: createNotificationIcon(Lock),
        isRead: false,
    },
    {
        id: '2',
        type: 'info',
        title: 'Salary Added',
        description: '+$3,200 USD → Bank Account 1',
        timestamp: '1d ago',
        icon: createNotificationIcon(DollarSign),
        isRead: false,
    },
    {
        id: '3',
        type: 'success',
        title: 'Goal Achievement',
        description: 'Emergency Fund goal completed - $10,000 reached!',
        timestamp: '2d ago',
        icon: createNotificationIcon(CheckCircle),
        isRead: true,
    },
    {
        id: '4',
        type: 'info',
        title: 'SSH Access',
        description: 'Connected to production server successfully',
        timestamp: '5h ago',
        icon: createNotificationIcon(Terminal),
        isRead: false,
    },
    {
        id: '5',
        type: 'info',
        title: 'Exchange Rate Updated',
        description: 'USD/EGP: 50.25 (+0.15) - Auto updated',
        timestamp: '6h ago',
        icon: createNotificationIcon(Globe),
        isRead: true,
    },
    {
        id: '6',
        type: 'success',
        title: 'Outstanding Progress!',
        description: "You've completed 3 goals this quarter",
        timestamp: '1w ago',
        icon: createNotificationIcon(Zap),
        isRead: true,
    },
];
