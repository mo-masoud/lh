import { NavigationBreadcrumb } from "@/components/shared/navigation";
import { WelcomeHeader } from "@/components/features/dashboard";
import {
  Shield,
  Eye,
  Plus,
  Wallet,
  TrendingUp,
  Target,
  Home,
  Copy,
  DollarSign,
  ArrowUpRight,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Password Manager Section */}
        <Card className="h-full flex flex-col bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200/50 dark:border-blue-800/50 animate-in fade-in-50 slide-in-from-left-5 duration-500">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-blue-500 p-2 animate-pulse">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <CardTitle className="text-lg">Passwords</CardTitle>
            </div>
            <CardDescription>Secure password management</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24</div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 animate-bounce">
                  3
                </div>
                <div className="text-sm text-muted-foreground">Expiring</div>
              </div>
            </div>

            {/* Last 3 Copied Passwords */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">
                Recently copied:
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/50 dark:bg-blue-950/10 hover:bg-blue-100/50 dark:hover:bg-blue-950/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Copy className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    2 hours ago
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/30 dark:bg-blue-950/5 hover:bg-blue-100/50 dark:hover:bg-blue-950/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Copy className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-medium">AWS Console</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    1 day ago
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50/30 dark:bg-blue-950/5 hover:bg-blue-100/50 dark:hover:bg-blue-950/20 transition-colors cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Copy className="h-3 w-3 text-blue-600" />
                    <span className="text-sm font-medium">Gmail</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    3 days ago
                  </span>
                </div>
              </div>
            </div>

            {/* Password Alerts */}
            <div className="rounded-lg bg-orange-50/50 dark:bg-orange-950/10 p-3 border border-orange-200/50 dark:border-orange-800/50">
              <div className="flex items-center gap-2 mb-1">
                <AlertTriangle className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800 dark:text-orange-200">
                  Security Alert
                </span>
              </div>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                3 passwords expire in the next 30 days
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="gradient"
                  className="transition-all hover:scale-105"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Password
                </Button>
                <Button
                  variant="gradient-outline"
                  className="transition-all hover:scale-105"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View All Passwords
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Savings Tracker Section */}
        <Card className="h-full flex flex-col bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-200/50 dark:border-emerald-800/50 animate-in fade-in-50 slide-in-from-bottom-5 duration-500 delay-150">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-emerald-500 p-2">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <CardTitle className="text-lg">Savings</CardTitle>
            </div>
            <CardDescription>Financial portfolio overview</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-4">
            <div className="flex-1 space-y-4">
              {/* Quick Stats */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Total Savings
                  </span>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600">$12,450</div>
                    <div className="text-xs text-muted-foreground">
                      EGP 609,975
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Monthly Income
                  </span>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">$3,200</div>
                    <div className="text-xs text-muted-foreground">
                      EGP 157,120
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Monthly Expenses
                  </span>
                  <div className="text-right">
                    <div className="font-semibold text-red-600">$1,850</div>
                    <div className="text-xs text-muted-foreground">
                      EGP 90,827
                    </div>
                  </div>
                </div>
              </div>

              {/* Auto-expenses Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Auto-expenses vs Income</span>
                  <span className="font-medium">58%</span>
                </div>
                <Progress value={58} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Good control over automatic expenses
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2">
              <Button
                variant="gradient"
                className="w-full transition-all hover:scale-105"
              >
                <DollarSign className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* High Priority Goals Section */}
        <Card className="lg:col-span-2 xl:col-span-1 h-full flex flex-col bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200/50 dark:border-violet-800/50 animate-in fade-in-50 slide-in-from-right-5 duration-500 delay-300">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-violet-500 p-2">
                <Target className="h-4 w-4 text-white" />
              </div>
              <CardTitle className="text-lg">Top Savings Goals</CardTitle>
            </div>
            <CardDescription>High priority financial goals</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col space-y-4">
            <div className="flex-1 space-y-4">
              {/* Goal 1 - Emergency Fund */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Emergency Fund</div>
                    <div className="text-sm text-muted-foreground">
                      $10,000 target
                    </div>
                    <div className="text-xs text-muted-foreground">
                      EGP 490,500 target
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-amber-600 border-amber-200"
                  >
                    Needs Margin
                  </Badge>
                </div>
                <Progress value={100} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  $10,000 / $10,000 (EGP 490,500)
                </div>
              </div>

              {/* Goal 2 - House Down Payment */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">House Down Payment</div>
                    <div className="text-sm text-muted-foreground">
                      $50,000 target
                    </div>
                    <div className="text-xs text-muted-foreground">
                      EGP 2,452,500 target
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200"
                  >
                    25%
                  </Badge>
                </div>
                <Progress value={25} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  $12,500 / $50,000 (EGP 613,125)
                </div>
              </div>

              {/* Goal 3 - Vacation 2025 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Vacation 2025</div>
                    <div className="text-sm text-muted-foreground">
                      $5,000 target
                    </div>
                    <div className="text-xs text-muted-foreground">
                      EGP 245,250 target
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-200"
                  >
                    60%
                  </Badge>
                </div>
                <Progress value={60} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  $3,000 / $5,000 (EGP 147,150)
                </div>
              </div>
            </div>

            {/* Action */}
            <Button
              variant="gradient-outline"
              className="w-full transition-all hover:scale-105"
            >
              <Target className="h-4 w-4 mr-2" />
              View All Goals
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Insights */}
      <Card className="animate-in fade-in-50 slide-in-from-bottom-5 duration-500 delay-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Quick Insights</CardTitle>
              <CardDescription>
                Recent activity and security status
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="transition-all hover:scale-105"
            >
              View Reports <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Security Score */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 dark:bg-blue-950/10 animate-in fade-in-50 slide-in-from-left-3 duration-100 delay-100 hover:scale-105 transition-transform">
              <div className="rounded-full bg-blue-500 p-2">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Security Score</div>
                <div className="text-sm text-muted-foreground">
                  Strong practices
                </div>
              </div>
              <div className="text-xl font-bold text-blue-600">85%</div>
            </div>

            {/* Savings Rate */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/10 animate-in fade-in-50 slide-in-from-bottom-3 duration-100 delay-200 hover:scale-105 transition-transform">
              <div className="rounded-full bg-emerald-500 p-2">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Savings Rate</div>
                <div className="text-sm text-muted-foreground">
                  42% increase
                </div>
              </div>
              <div className="text-xl font-bold text-emerald-600">+42%</div>
            </div>

            {/* Monthly Budget */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-violet-50/50 dark:bg-violet-950/10 animate-in fade-in-50 slide-in-from-right-3 duration-100 delay-300 hover:scale-105 transition-transform">
              <div className="rounded-full bg-violet-500 p-2">
                <Wallet className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium">Budget Status</div>
                <div className="text-sm text-muted-foreground">On track</div>
              </div>
              <div className="text-xl font-bold text-violet-600">78%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
