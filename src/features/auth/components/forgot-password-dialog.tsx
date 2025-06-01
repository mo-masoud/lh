'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, KeyRound, Mail, Send } from 'lucide-react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
});

interface ForgotPasswordDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onBackToSignIn: () => void;
}

export const ForgotPasswordDialog: FC<ForgotPasswordDialogProps> = ({ open, onOpenChange, onBackToSignIn }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const form = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    });

    async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Forgot password for:', values.email);
        setIsLoading(false);
        setIsEmailSent(true);
    }

    const handleClose = () => {
        setIsEmailSent(false);
        form.reset();
        onOpenChange(false);
    };

    const handleBackToSignIn = () => {
        setIsEmailSent(false);
        form.reset();
        onBackToSignIn();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500">
                        <KeyRound className="h-6 w-6 text-white" />
                    </div>
                    <DialogTitle className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-center text-2xl font-bold text-transparent">
                        {isEmailSent ? 'Check Your Email' : 'Forgot Password?'}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-center">
                        {isEmailSent
                            ? "We've sent password reset instructions to your email address"
                            : "Enter your email address and we'll send you instructions to reset your password"}
                    </DialogDescription>
                </DialogHeader>

                {isEmailSent ? (
                    <div className="mt-6 space-y-4">
                        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-green-800 dark:text-green-200">Email sent successfully!</p>
                                    <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                                        Please check your inbox and follow the instructions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="button" variant="gradient" className="flex-1" onClick={handleBackToSignIn}>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Sign In
                            </Button>
                        </div>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                                <Input
                                                    type="email"
                                                    autoComplete="off"
                                                    placeholder="Enter your email address"
                                                    className="pl-10 transition-all focus:ring-2 focus:ring-violet-500/20"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-3 pt-4">
                                <Button type="button" variant="outline" className="flex-1" onClick={handleBackToSignIn} disabled={isLoading}>
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back
                                </Button>
                                <Button type="submit" variant="gradient" className="relative flex-1 overflow-hidden" disabled={isLoading}>
                                    {isLoading ? (
                                        <div className="flex items-center">
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Reset Link
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </DialogContent>
        </Dialog>
    );
};
