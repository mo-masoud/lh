import {
  FeatureCard,
  StatsCard,
  QuickActionCard,
} from "@/components/shared/cards";
import { NavigationBreadcrumb } from "@/components/shared/navigation";
import { WelcomeHeader } from "@/components/feature-specific/dashboard";
import {
  Shield,
  PiggyBank,
  Lock,
  TrendingUp,
  Wallet,
  Eye,
  BarChart3,
  ArrowUpRight,
  Target,
  Home,
  AlertTriangle,
  Calendar,
  DollarSign,
  Settings,
  CreditCard,
  TrendingDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - LifeHub",
  description:
    "Your personal life management dashboard with password manager, savings tracker, and more.",
};

export default function DashboardPage() {
  const breadcrumbItems = [
    {
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <NavigationBreadcrumb items={breadcrumbItems} />

      {/* Welcome Header */}
      <WelcomeHeader username="Masoud" />

      {/* Critical Alerts - Actionable & Time-Sensitive */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Monthly Recurring Transaction Alert - Critical with 5-day deadline */}
          <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-4 animate-in slide-in-from-left-4 duration-300 delay-100">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-amber-500 p-2">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-amber-900 dark:text-amber-100">
                  Monthly Salary Due
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-200 mt-1">
                  Your salary transaction is ready to be logged (3 days
                  remaining)
                </p>
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    className="h-7 bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Save
                  </Button>
                  <Button size="sm" variant="outline" className="h-7">
                    Edit & Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-amber-700"
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Password Expiry Alert - Critical security action needed */}
          <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 p-4 animate-in slide-in-from-right-4 duration-300 delay-150">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-red-500 p-2">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-red-900 dark:text-red-100">
                  3 Passwords Expiring Soon
                </p>
                <p className="text-sm text-red-700 dark:text-red-200 mt-1">
                  AWS (2 days), GitHub (5 days), Gmail (1 week)
                </p>
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    className="h-7 bg-red-600 hover:bg-red-700 text-white"
                  >
                    Update Now
                  </Button>
                  <Button size="sm" variant="outline" className="h-7">
                    View All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Stats Overview */}
      <section className="space-y-6">
        <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-250">
          <h2 className="text-lg font-semibold text-muted-foreground mb-4">
            Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Password Manager Stats */}
          <StatsCard
            title="Total Passwords"
            value="24"
            change="+3"
            changeType="positive"
            icon={<Lock className="h-5 w-5" />}
            className="animate-in slide-in-from-left-4 duration-300 delay-300 hover:scale-105 transition-transform"
          />
          <StatsCard
            title="Expiring Soon"
            value="3"
            change="+1"
            changeType="negative"
            icon={<AlertTriangle className="h-5 w-5" />}
            className="animate-in slide-in-from-left-4 duration-300 delay-325 hover:scale-105 transition-transform"
          />

          {/* Savings Tracker Stats */}
          <StatsCard
            title="Total Portfolio"
            value="$12,450"
            change="+$850"
            changeType="positive"
            icon={<Wallet className="h-5 w-5" />}
            className="animate-in slide-in-from-bottom-4 duration-300 delay-350 hover:scale-105 transition-transform"
          />
          <StatsCard
            title="Monthly Progress"
            value="78%"
            change="+12%"
            changeType="positive"
            icon={<TrendingUp className="h-5 w-5" />}
            className="animate-in slide-in-from-right-4 duration-300 delay-375 hover:scale-105 transition-transform"
          />
        </div>

        {/* Additional Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Active Accounts"
            value="5"
            change="0"
            changeType="neutral"
            icon={<CreditCard className="h-5 w-5" />}
            className="animate-in slide-in-from-left-4 duration-300 delay-400 hover:scale-105 transition-transform"
          />
          <StatsCard
            title="This Month Income"
            value="$3,200"
            change="+$200"
            changeType="positive"
            icon={<TrendingUp className="h-5 w-5" />}
            className="animate-in slide-in-from-bottom-4 duration-300 delay-425 hover:scale-105 transition-transform"
          />
          <StatsCard
            title="This Month Expenses"
            value="$1,850"
            change="-$150"
            changeType="positive"
            icon={<TrendingDown className="h-5 w-5" />}
            className="animate-in slide-in-from-right-4 duration-300 delay-450 hover:scale-105 transition-transform"
          />
        </div>
      </section>

      {/* Main Modules Section - Extensible Design */}
      <section className="space-y-8">
        <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-475">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              LifeHub Modules
            </h2>
            <p className="text-muted-foreground mt-1">
              Manage every aspect of your digital life
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Password Manager Module */}
          <div className="animate-in slide-in-from-left-8 duration-300 delay-500">
            <FeatureCard
              title="Password Manager"
              description="Secure password storage with support for normal passwords and SSH credentials. Auto-expiry tracking and security audits included."
              icon={<Shield className="h-6 w-6" />}
              className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200/50 dark:border-blue-800/50 h-full"
            />
          </div>

          {/* Savings Tracker Module */}
          <div className="animate-in slide-in-from-bottom-8 duration-300 delay-525">
            <FeatureCard
              title="Savings Tracker"
              description="Multi-currency portfolio tracking with automatic conversion rates. Set goals, track progress, and manage recurring transactions."
              icon={<PiggyBank className="h-6 w-6" />}
              className="bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200/50 dark:border-emerald-800/50 h-full"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Quick Actions */}
      <section className="space-y-6">
        <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-575">
          <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
          <p className="text-sm text-muted-foreground">
            Common tasks and frequently used actions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Password Actions */}
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

          {/* Financial Actions */}
          <QuickActionCard
            title="Add Transaction"
            icon={<DollarSign className="h-5 w-5" />}
            variant="savings"
            className="animate-in zoom-in-50 delay-140"
          />
          <QuickActionCard
            title="Set Goal"
            icon={<Target className="h-5 w-5" />}
            variant="savings"
            className="animate-in zoom-in-50 delay-160"
          />

          {/* General Actions */}
          <QuickActionCard
            title="View Reports"
            icon={<BarChart3 className="h-5 w-5" />}
            variant="report"
            className="animate-in zoom-in-50 delay-180"
          />
          <QuickActionCard
            title="Settings"
            icon={<Settings className="h-5 w-5" />}
            variant="view"
            className="animate-in zoom-in-50 delay-200"
          />
        </div>
      </section>

      {/* Goals & Progress Tracking */}
      <section className="space-y-6">
        <div className="animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-600">
          <h3 className="text-xl font-semibold mb-2">Active Goals</h3>
          <p className="text-sm text-muted-foreground">
            Track your progress towards financial and security goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Financial Goal */}
          <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-left-4 duration-300 delay-625">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">Emergency Fund</p>
                  <p className="text-sm text-muted-foreground">
                    Target: $10,000
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">100%</p>
                <p className="text-sm text-muted-foreground">Complete!</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          {/* New Goal */}
          <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-right-4 duration-300 delay-650">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">House Down Payment</p>
                  <p className="text-sm text-muted-foreground">
                    Target: $50,000
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">25%</p>
                <p className="text-sm text-muted-foreground">$12,500</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Recent Activity & Insights */}
      <section className="space-y-6">
        <div className="flex items-center justify-between animate-in fade-in-0 slide-in-from-left-4 duration-300 delay-675">
          <div>
            <h3 className="text-xl font-semibold">Insights & Trends</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Key insights and trends from your data
            </p>
          </div>
          <Button variant="ghost" className="text-sm">
            View Reports <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Security Insight */}
          <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-2">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Security Score</p>
                <p className="text-sm text-muted-foreground">
                  85% - Strong password practices
                </p>
              </div>
              <div className="text-2xl font-bold text-blue-600">85%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>

          {/* Savings Trend */}
          <div className="rounded-xl border bg-card p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-725 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Monthly Savings Rate</p>
                <p className="text-sm text-muted-foreground">
                  42% increase vs last month
                </p>
              </div>
              <div className="text-2xl font-bold text-green-600">+42%</div>
            </div>
          </div>

          {/* Auto-expense Warning */}
          <div className="rounded-xl border bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 space-y-4 animate-in slide-in-from-bottom-4 duration-300 delay-750 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 p-2">
                <AlertTriangle className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Expense Alert</p>
                <p className="text-sm text-muted-foreground">
                  Auto-expenses: 78% of income
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full w-[78%]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
