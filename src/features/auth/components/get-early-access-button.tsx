'use client';

import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { useAuthDialog } from '../hooks/use-auth-dialog';

interface GetEarlyAccessButtonProps {
    children: React.ReactNode;
}

export const GetEarlyAccessButton: FC<GetEarlyAccessButtonProps> = ({ children }) => {
    const { openDialog } = useAuthDialog();

    return (
        <Button size="lg" variant="gradient" className="group" onClick={() => openDialog('signup')}>
            {children}
        </Button>
    );
};
