'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, LogIn, Mail, Shield } from 'lucide-react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signInSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    password: z.string().min(1, {
        message: 'Password is required.',
    }),
});

interface SignInDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSignUpClick: () => void;
    onForgotPasswordClick: () => void;
}

export const SignInDialog: FC<SignInDialogProps> = ({ open, onOpenChange, onSignUpClick, onForgotPasswordClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof signInSchema>) {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(values);
        setIsLoading(false);
        onOpenChange(false);
        form.reset();
    }

    const handleClose = () => {
        form.reset();
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500">
                        <Shield className="h-6 w-6 text-white" />
                    </div>
                    <DialogTitle className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-center text-2xl font-bold text-transparent">
                        Welcome Back
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-center">
                        Sign in to your LifeHub account to continue managing your digital life
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                type="email"
                                                autoComplete='off'
                                                placeholder="Enter your email"
                                                className="pl-10 transition-all focus:ring-2 focus:ring-violet-500/20"
                                                {...field}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter your password"
                                                autoComplete='off'
                                                className="pr-10 pl-10 transition-all focus:ring-2 focus:ring-violet-500/20"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="text-muted-foreground h-4 w-4" />
                                                ) : (
                                                    <Eye className="text-muted-foreground h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end">
                            <Button
                                type="button"
                                variant="link"
                                className="h-auto p-0 text-sm text-violet-600 hover:text-violet-700"
                                onClick={onForgotPasswordClick}
                            >
                                Forgot password?
                            </Button>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button type="button" variant="outline" className="flex-1" onClick={handleClose} disabled={isLoading}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="gradient" className="relative flex-1 overflow-hidden" disabled={isLoading}>
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    <>
                                        <LogIn className="mr-2 h-4 w-4" />
                                        Sign In
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>

                <div className="mt-6 text-center">
                    <p className="text-muted-foreground text-sm">
                        Don't have an account?{' '}
                        <Button variant="link" className="h-auto p-0 font-medium text-violet-600 hover:text-violet-700" onClick={onSignUpClick}>
                            Sign up
                        </Button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};
