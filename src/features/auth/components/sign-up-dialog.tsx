'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Eye, EyeOff, Lock, Mail, Sparkles, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignUp } from '../hooks/use-sign-up';
import { signUpSchema } from '../validator-schemas';

interface SignUpDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSignInClick: () => void;
}

export const SignUpDialog: FC<SignUpDialogProps> = ({ open, onOpenChange, onSignInClick }) => {
    const router = useRouter();
    const { mutate, isPending } = useSignUp();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        mutate(values, {
            onSuccess: (data) => {
                console.log('Signup successful:', data);
                onOpenChange(false);
                form.reset();
                // Redirect to dashboard
                router.push('/dashboard');
            },
            onError: (error) => {
                console.error('Signup failed:', error);
                // Handle error (could show toast notification)
            },
        });
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
                        <User className="h-6 w-6 text-white" />
                    </div>
                    <DialogTitle className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-center text-2xl font-bold text-transparent">
                        Create Account
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-center">
                        Join LifeHub and start managing your digital life with ease
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                placeholder="Enter your full name"
                                                autoComplete="off"
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
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                type="email"
                                                autoComplete="off"
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
                                                autoComplete="off"
                                                placeholder="Create a password"
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
                                    <FormDescription className="text-xs">
                                        Must contain at least 8 characters with uppercase, lowercase, and number
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-medium">Confirm Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                                            <Input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                autoComplete="off"
                                                placeholder="Confirm your password"
                                                className="pr-10 pl-10 transition-all focus:ring-2 focus:ring-violet-500/20"
                                                {...field}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            >
                                                {showConfirmPassword ? (
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

                        <div className="flex gap-3 pt-4">
                            <Button type="button" variant="outline" className="flex-1" onClick={handleClose} disabled={isPending}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="gradient" className="relative flex-1 overflow-hidden" disabled={isPending}>
                                {isPending ? (
                                    <div className="flex items-center">
                                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                                        Creating...
                                    </div>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Create Account
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </Form>

                <div className="mt-6 text-center">
                    <p className="text-muted-foreground text-sm">
                        Already have an account?{' '}
                        <Button variant="link" className="h-auto p-0 font-medium text-violet-600 hover:text-violet-700" onClick={onSignInClick}>
                            Sign in
                        </Button>
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};
