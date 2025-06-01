'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export type AuthDialogType = 'signin' | 'signup' | 'forgot' | null;

export const useAuthDialog = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentDialog, setCurrentDialog] = useState<AuthDialogType>(null);

    // Get dialog from URL on mount and when searchParams change
    useEffect(() => {
        const dialog = searchParams.get('dialog') as AuthDialogType;
        if (dialog && ['signin', 'signup', 'forgot'].includes(dialog)) {
            setCurrentDialog(dialog);
        } else {
            setCurrentDialog(null);
        }
    }, [searchParams]);

    // Open a specific dialog
    const openDialog = useCallback(
        (type: AuthDialogType) => {
            if (!type) {
                // Remove dialog param if type is null
                const params = new URLSearchParams(searchParams.toString());
                params.delete('dialog');
                const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
                router.replace(newUrl);
            } else {
                // Add or update dialog param
                const params = new URLSearchParams(searchParams.toString());
                params.set('dialog', type);
                router.replace(`?${params.toString()}`);
            }
        },
        [router, searchParams],
    );

    // Close any open dialog
    const closeDialog = useCallback(() => {
        openDialog(null);
    }, [openDialog]);

    // Check if a specific dialog is open
    const isDialogOpen = useCallback(
        (type: AuthDialogType) => {
            return currentDialog === type;
        },
        [currentDialog],
    );

    return {
        currentDialog,
        openDialog,
        closeDialog,
        isDialogOpen,
        isSignInOpen: currentDialog === 'signin',
        isSignUpOpen: currentDialog === 'signup',
        isForgotOpen: currentDialog === 'forgot',
    };
};
