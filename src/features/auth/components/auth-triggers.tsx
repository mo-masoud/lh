'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { useAuthDialog } from '../hooks/use-auth-dialog';

interface AuthTriggersProps {
    variant?: 'default' | 'compact';
}

export const AuthTriggers: FC<AuthTriggersProps> = ({ variant = 'default' }) => {
    const { openDialog } = useAuthDialog();

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
