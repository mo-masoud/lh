"use client";

import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-950 dark:via-gray-900 dark:to-cyan-950">
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:px-12">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg">
            <Heart className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
            LifeHub
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Sign Up
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 md:px-12 text-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full shadow-2xl animate-bounce">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Main Heading with Animation */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight md:leading-tight bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
              Coming Soon
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in-delay-1">
              Something amazing is brewing
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-delay-2">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              We&apos;re crafting a revolutionary platform that will transform
              how you manage and enhance your daily life. Get ready for an
              experience that combines simplicity, elegance, and powerful
              functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-violet-200 text-violet-600 hover:bg-violet-50 dark:border-violet-700 dark:text-violet-400 dark:hover:bg-violet-950"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-delay-3">
            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-violet-100 dark:border-violet-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Wellness Tracking
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Monitor your health and wellness journey with intelligent
                insights
              </p>
            </div>

            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-cyan-100 dark:border-cyan-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Smart Organization
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Effortlessly organize your life with AI-powered recommendations
              </p>
            </div>

            <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-purple-100 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Goal Achievement
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Reach your dreams with personalized action plans and progress
                tracking
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
