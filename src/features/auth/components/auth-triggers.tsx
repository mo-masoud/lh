'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutDashboard, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useAuthDialog } from '../hooks/use-auth-dialog';
import { useAuthStatus } from '../hooks/use-auth-status';

interface AuthTriggersProps {
    variant?: 'default' | 'compact';
}

export const AuthTriggers: FC<AuthTriggersProps> = ({ variant = 'default' }) => {
    const { openDialog } = useAuthDialog();
    const { isAuthenticated, user, isLoading } = useAuthStatus();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                // Refresh the page to update authentication state
                window.location.reload();
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleDashboard = () => {
        router.push('/dashboard');
    };

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex items-center gap-3">
                <div className="h-8 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-8 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            </div>
        );
    }

    // Show authenticated state
    if (isAuthenticated && user) {
        return (
            <div className="flex items-center gap-3">
                {variant === 'compact' ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span className="hidden sm:inline">{user.name}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleDashboard}>
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign Out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <>
                        <Button variant="gradient-outline" onClick={handleDashboard}>
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Dashboard
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="gradient" className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {user.name}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                )}
            </div>
        );
    }

    // Show unauthenticated state
    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => openDialog('signin')}>
                    Sign In
                </Button>
                <Button variant="gradient" size="sm" onClick={() => openDialog('signup')}>
                    Sign Up
                </Button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <Button variant="gradient-outline" className="group relative overflow-hidden" onClick={() => openDialog('signin')}>
                Sign In
            </Button>
            <Button variant="gradient" className="group relative overflow-hidden" onClick={() => openDialog('signup')}>
                Sign Up
            </Button>
        </div>
    );
};
