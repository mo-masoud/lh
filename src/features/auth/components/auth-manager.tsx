'use client';

import { FC } from 'react';
import { useAuthDialog } from '../hooks/use-auth-dialog';
import { ForgotPasswordDialog } from './forgot-password-dialog';
import { SignInDialog } from './sign-in-dialog';
import { SignUpDialog } from './sign-up-dialog';

export const AuthManager: FC = () => {
    const { isSignInOpen, isSignUpOpen, isForgotOpen, openDialog, closeDialog } = useAuthDialog();

    return (
        <>
            <SignInDialog
                open={isSignInOpen}
                onOpenChange={(open) => (open ? openDialog('signin') : closeDialog())}
                onSignUpClick={() => openDialog('signup')}
                onForgotPasswordClick={() => openDialog('forgot')}
            />

            <SignUpDialog
                open={isSignUpOpen}
                onOpenChange={(open) => (open ? openDialog('signup') : closeDialog())}
                onSignInClick={() => openDialog('signin')}
            />

            <ForgotPasswordDialog
                open={isForgotOpen}
                onOpenChange={(open) => (open ? openDialog('forgot') : closeDialog())}
                onBackToSignIn={() => openDialog('signin')}
            />
        </>
    );
};
