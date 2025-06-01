import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface QuickActionCardProps {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'password' | 'savings' | 'report' | 'view';
}

const variantStyles = {
    password: 'hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700',
    view: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/20 hover:border-cyan-300 dark:hover:border-cyan-700',
    savings: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:border-emerald-300 dark:hover:border-emerald-700',
    report: 'hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:border-violet-300 dark:hover:border-violet-700',
};

const iconStyles = {
    password: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
    view: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
    savings: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    report: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
};

export function QuickActionCard({ title, icon, onClick, className, variant = 'password' }: QuickActionCardProps) {
    return (
        <Button
            variant="outline"
            onClick={onClick}
            className={cn('group h-24 flex-col gap-3 transition-all duration-100', variantStyles[variant], className)}
        >
            <div className={cn('h-5 w-5 transition-colors', iconStyles[variant])}>{icon}</div>
            <span className="text-sm font-medium">{title}</span>
        </Button>
    );
}
