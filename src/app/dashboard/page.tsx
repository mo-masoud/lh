import {
  FeatureCard,
  StatsCard,
  WelcomeHeader,
  QuickActionCard,
  NavigationBreadcrumb,
} from "@/components/dashboard";
import {
  Shield,
  PiggyBank,
  Lock,
  TrendingUp,
  Wallet,
  Eye,
  BarChart3,
  Plus,
  ArrowUpRight,
  Zap,
  Target,
  Clock,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const breadcrumbItems = [
    {
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Breadcrumb */}
        <NavigationBreadcrumb items={breadcrumbItems} />

        {/* Welcome Header */}
        <WelcomeHeader username="Masoud" />

        {/* Quick Stats Overview */}
        <section className="space-y-6">
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-100">
            <h2 className="text-lg font-semibold text-muted-foreground mb-4">
              Overview
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard
              title="Saved Passwords"
              value="24"
              change="+3"
              changeType="positive"
              icon={<Lock className="h-5 w-5" />}
              className="animate-in slide-in-from-left-4 duration-300 delay-150 hover:scale-105 transition-transform"
            />
            <StatsCard
              title="Total Savings"
              value="$12,450"
              change="+$850"
              changeType="positive"
              icon={<Wallet className="h-5 w-5" />}
              className="animate-in slide-in-from-bottom-4 duration-300 delay-200 hover:scale-105 transition-transform"
            />
            <StatsCard
              title="Monthly Goal"
              value="78%"
              change="+12%"
              changeType="positive"
              icon={<TrendingUp className="h-5 w-5" />}
              className="animate-in slide-in-from-right-4 duration-300 delay-250 hover:scale-105 transition-transform"
            />
          </div>
        </section>

        {/* Main Modules Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-300">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Your Security & Finance Hub
              </h2>
              <p className="text-muted-foreground mt-1">
                Manage your digital life with confidence
              </p>
            </div>
            <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-right-4 delay-350">
              <Plus className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enhanced Password Manager Card */}
            <div className="animate-in slide-in-from-left-8 duration-300 delay-400">
              <FeatureCard
                title="Password Manager"
                description="Your digital fortress for passwords. Generate, store, and manage all your credentials with military-grade encryption and seamless auto-fill."
                icon={<Shield className="h-6 w-6" />}
                className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200/50 dark:border-blue-800/50 h-full"
              />
            </div>

            {/* Enhanced Savings Tracker Card */}
            <div className="animate-in slide-in-from-right-8 duration-300 delay-450">
              <FeatureCard
                title="Savings Tracking"
                description="Transform your financial future. Set ambitious goals, track every penny, and watch your wealth grow with intelligent insights and personalized recommendations."
                icon={<PiggyBank className="h-6 w-6" />}
                className="bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200/50 dark:border-emerald-800/50 h-full"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions with Enhanced Design */}
        <section className="space-y-6">
          <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-500">
            <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
            <p className="text-sm text-muted-foreground">
              Frequently used actions at your fingertips
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <QuickActionCard
              title="Add Password"
              icon={<Lock className="h-5 w-5" />}
              variant="password"
              className="animate-in zoom-in-50 delay-100"
            />
            <QuickActionCard
              title="View Passwords"
              icon={<Eye className="h-5 w-5" />}
              variant="view"
              className="animate-in zoom-in-50 delay-120"
            />
            <QuickActionCard
              title="Add Savings"
              icon={<PiggyBank className="h-5 w-5" />}
              variant="savings"
              className="animate-in zoom-in-50 delay-140"
            />
            <QuickActionCard
              title="View Reports"
              icon={<BarChart3 className="h-5 w-5" />}
              variant="report"
              className="animate-in zoom-in-50 delay-160"
            />
          </div>
        </section>

        {/* Enhanced Recent Activity & Insights */}
        <section className="space-y-6">
          <div className="flex items-center justify-between animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-750">
            <div>
              <h3 className="text-xl font-semibold">
                Recent Activity & Insights
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Stay updated with your latest actions
              </p>
            </div>
            <Button variant="ghost" className="text-sm">
              View All <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Password Activity */}
            <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                  <Lock className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Password Added</p>
                  <p className="text-sm text-muted-foreground">
                    GitHub account
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  2h ago
                </div>
              </div>
            </div>

            {/* Savings Activity */}
            <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-850 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Savings Goal Reached</p>
                  <p className="text-sm text-muted-foreground">
                    Emergency fund
                  </p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  1d ago
                </div>
              </div>
            </div>

            {/* Performance Insight */}
            <div className="rounded-xl border bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/20 dark:to-cyan-950/20 p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-900 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-2">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Great Progress!</p>
                  <p className="text-sm text-muted-foreground">
                    You're ahead of your monthly goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
