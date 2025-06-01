import { cn } from '@/lib/utils';

interface WelcomeHeaderProps {
    username?: string;
    className?: string;
}

export function WelcomeHeader({ username = 'User', className }: WelcomeHeaderProps) {
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    return (
        <div className={cn('animate-in fade-in-0 slide-in-from-top-4 space-y-3 duration-700', className)}>
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight">
                    {greeting}, {username}! 👋
                </h1>
                <p className="text-muted-foreground">Welcome back to your personal dashboard</p>
            </div>
            <div className="animate-in slide-in-from-left-8 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 delay-300 duration-1000" />
        </div>
    );
}
