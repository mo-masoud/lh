import { Button } from '@/components/ui/button';
import { GetEarlyAccessButton } from '@/features/auth/components/get-early-access-button';
import { HeaderAuthButtons } from '@/features/auth/components/header-auth-buttons';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950 dark:via-gray-900 dark:to-cyan-950">
            {/* Header */}
            <header className="flex items-center justify-between p-6 md:px-12">
                <Link href="/" className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent">
                    LifeHub
                </Link>

                <HeaderAuthButtons />
            </header>

            {/* Main Content */}
            <main className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center md:px-12">
                <div className="mx-auto max-w-4xl space-y-8">
                    {/* Animated Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 opacity-30 blur-xl"></div>
                            <div className="animate-fade-in relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 shadow-2xl">
                                <Sparkles className="h-10 w-10 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Main Heading with Animation */}
                    <div className="space-y-4">
                        <h2 className="animate-fade-in bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl md:leading-24">
                            Coming Soon
                        </h2>
                        <p className="animate-fade-in-delay-1 text-xl text-gray-600 md:text-2xl dark:text-gray-300">Something amazing is brewing</p>
                    </div>

                    {/* Description */}
                    <div className="animate-fade-in-delay-2 mx-auto max-w-2xl space-y-6">
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                            We&apos;re crafting a revolutionary platform that will transform how you manage and enhance your daily life. Get ready for
                            an experience that combines simplicity, elegance, and powerful functionality.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <GetEarlyAccessButton>
                                Get Early Access
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </GetEarlyAccessButton>
                            <Button variant="gradient-outline" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Features Preview */}
                    <div className="animate-fade-in-delay-3 mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-violet-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-violet-800 dark:bg-gray-800/60">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-violet-500 to-purple-500">
                                <Heart className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Wellness Tracking</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Monitor your health and wellness journey with intelligent insights
                            </p>
                        </div>

                        <div className="rounded-2xl border border-cyan-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-cyan-800 dark:bg-gray-800/60">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Smart Organization</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Effortlessly organize your life with AI-powered recommendations
                            </p>
                        </div>

                        <div className="rounded-2xl border border-purple-100 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-purple-800 dark:bg-gray-800/60">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                <ArrowRight className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Goal Achievement</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Reach your dreams with personalized action plans and progress tracking
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
