import { WelcomeHeader } from '@/components/features/dashboard';
import { NavigationBreadcrumb } from '@/components/shared/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, ArrowUpRight, Copy, DollarSign, Eye, Home, Plus, Shield, Target, TrendingUp, Wallet } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard - LifeHub',
    description: 'Your personal life management dashboard with password manager, savings tracker, and more.',
};

export default function DashboardPage() {
    const breadcrumbItems = [
        {
            href: '/dashboard',
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
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {/* Password Manager Section */}
                <Card className="animate-in fade-in-50 slide-in-from-left-5 flex h-full flex-col border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 duration-500 dark:border-blue-800/50 dark:from-blue-950/20 dark:to-cyan-950/20">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="animate-pulse rounded-full bg-blue-500 p-2">
                                <Shield className="h-4 w-4 text-white" />
                            </div>
                            <CardTitle className="text-lg">Passwords</CardTitle>
                        </div>
                        <CardDescription>Secure password management</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between space-y-4">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">24</div>
                                <div className="text-muted-foreground text-sm">Total</div>
                            </div>
                            <div className="text-center">
                                <div className="animate-bounce text-2xl font-bold text-orange-600">3</div>
                                <div className="text-muted-foreground text-sm">Expiring</div>
                            </div>
                        </div>

                        {/* Last 3 Copied Passwords */}
                        <div className="space-y-2">
                            <div className="text-muted-foreground text-sm font-medium">Recently copied:</div>
                            <div className="space-y-1">
                                <div className="flex cursor-pointer items-center justify-between rounded-lg bg-blue-50/50 p-2 transition-colors hover:bg-blue-100/50 dark:bg-blue-950/10 dark:hover:bg-blue-950/20">
                                    <div className="flex items-center gap-2">
                                        <Copy className="h-3 w-3 text-blue-600" />
                                        <span className="text-sm font-medium">GitHub</span>
                                    </div>
                                    <span className="text-muted-foreground text-xs">2 hours ago</span>
                                </div>
                                <div className="flex cursor-pointer items-center justify-between rounded-lg bg-blue-50/30 p-2 transition-colors hover:bg-blue-100/50 dark:bg-blue-950/5 dark:hover:bg-blue-950/20">
                                    <div className="flex items-center gap-2">
                                        <Copy className="h-3 w-3 text-blue-600" />
                                        <span className="text-sm font-medium">AWS Console</span>
                                    </div>
                                    <span className="text-muted-foreground text-xs">1 day ago</span>
                                </div>
                                <div className="flex cursor-pointer items-center justify-between rounded-lg bg-blue-50/30 p-2 transition-colors hover:bg-blue-100/50 dark:bg-blue-950/5 dark:hover:bg-blue-950/20">
                                    <div className="flex items-center gap-2">
                                        <Copy className="h-3 w-3 text-blue-600" />
                                        <span className="text-sm font-medium">Gmail</span>
                                    </div>
                                    <span className="text-muted-foreground text-xs">3 days ago</span>
                                </div>
                            </div>
                        </div>

                        {/* Password Alerts */}
                        <div className="rounded-lg border border-orange-200/50 bg-orange-50/50 p-3 dark:border-orange-800/50 dark:bg-orange-950/10">
                            <div className="mb-1 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-orange-600" />
                                <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Security Alert</span>
                            </div>
                            <p className="text-xs text-orange-700 dark:text-orange-300">3 passwords expire in the next 30 days</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <Button variant="gradient" className="transition-all hover:scale-105">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add New Password
                                </Button>
                                <Button variant="gradient-outline" className="transition-all hover:scale-105">
                                    <Eye className="mr-2 h-4 w-4" />
                                    View All Passwords
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Savings Tracker Section */}
                <Card className="animate-in fade-in-50 slide-in-from-bottom-5 flex h-full flex-col border-emerald-200/50 bg-gradient-to-br from-emerald-50/50 to-green-50/50 delay-150 duration-500 dark:border-emerald-800/50 dark:from-emerald-950/20 dark:to-green-950/20">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-emerald-500 p-2">
                                <Wallet className="h-4 w-4 text-white" />
                            </div>
                            <CardTitle className="text-lg">Savings</CardTitle>
                        </div>
                        <CardDescription>Financial portfolio overview</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col space-y-4">
                        <div className="flex-1 space-y-4">
                            {/* Quick Stats */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground text-sm">Total Savings</span>
                                    <div className="text-right">
                                        <div className="font-bold text-emerald-600">$12,450</div>
                                        <div className="text-muted-foreground text-xs">EGP 609,975</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground text-sm">Monthly Income</span>
                                    <div className="text-right">
                                        <div className="font-semibold text-green-600">$3,200</div>
                                        <div className="text-muted-foreground text-xs">EGP 157,120</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground text-sm">Monthly Expenses</span>
                                    <div className="text-right">
                                        <div className="font-semibold text-red-600">$1,850</div>
                                        <div className="text-muted-foreground text-xs">EGP 90,827</div>
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
                                <div className="text-muted-foreground text-xs">Good control over automatic expenses</div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2">
                            <Button variant="gradient" className="w-full transition-all hover:scale-105">
                                <DollarSign className="mr-2 h-4 w-4" />
                                Add Transaction
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* High Priority Goals Section */}
                <Card className="animate-in fade-in-50 slide-in-from-right-5 flex h-full flex-col border-violet-200/50 bg-gradient-to-br from-violet-50/50 to-purple-50/50 delay-300 duration-500 lg:col-span-2 xl:col-span-1 dark:border-violet-800/50 dark:from-violet-950/20 dark:to-purple-950/20">
                    <CardHeader className="pb-3">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full bg-violet-500 p-2">
                                <Target className="h-4 w-4 text-white" />
                            </div>
                            <CardTitle className="text-lg">Top Savings Goals</CardTitle>
                        </div>
                        <CardDescription>High priority financial goals</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col space-y-4">
                        <div className="flex-1 space-y-4">
                            {/* Goal 1 - Emergency Fund */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Emergency Fund</div>
                                        <div className="text-muted-foreground text-sm">$10,000 target</div>
                                        <div className="text-muted-foreground text-xs">EGP 490,500 target</div>
                                    </div>
                                    <Badge variant="outline" className="border-amber-200 text-amber-600">
                                        Needs Margin
                                    </Badge>
                                </div>
                                <Progress value={100} className="h-2" />
                                <div className="text-muted-foreground text-xs">$10,000 / $10,000 (EGP 490,500)</div>
                            </div>

                            {/* Goal 2 - House Down Payment */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">House Down Payment</div>
                                        <div className="text-muted-foreground text-sm">$50,000 target</div>
                                        <div className="text-muted-foreground text-xs">EGP 2,452,500 target</div>
                                    </div>
                                    <Badge variant="outline" className="border-blue-200 text-blue-600">
                                        25%
                                    </Badge>
                                </div>
                                <Progress value={25} className="h-2" />
                                <div className="text-muted-foreground text-xs">$12,500 / $50,000 (EGP 613,125)</div>
                            </div>

                            {/* Goal 3 - Vacation 2025 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Vacation 2025</div>
                                        <div className="text-muted-foreground text-sm">$5,000 target</div>
                                        <div className="text-muted-foreground text-xs">EGP 245,250 target</div>
                                    </div>
                                    <Badge variant="outline" className="border-orange-200 text-orange-600">
                                        60%
                                    </Badge>
                                </div>
                                <Progress value={60} className="h-2" />
                                <div className="text-muted-foreground text-xs">$3,000 / $5,000 (EGP 147,150)</div>
                            </div>
                        </div>

                        {/* Action */}
                        <Button variant="gradient-outline" className="w-full transition-all hover:scale-105">
                            <Target className="mr-2 h-4 w-4" />
                            View All Goals
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity Insights */}
            <Card className="animate-in fade-in-50 slide-in-from-bottom-5 delay-500 duration-500">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Quick Insights</CardTitle>
                            <CardDescription>Recent activity and security status</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" className="transition-all hover:scale-105">
                            View Reports <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Security Score */}
                        <div className="animate-in fade-in-50 slide-in-from-left-3 flex items-center gap-3 rounded-lg bg-blue-50/50 p-3 transition-transform delay-100 duration-100 hover:scale-105 dark:bg-blue-950/10">
                            <div className="rounded-full bg-blue-500 p-2">
                                <Shield className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">Security Score</div>
                                <div className="text-muted-foreground text-sm">Strong practices</div>
                            </div>
                            <div className="text-xl font-bold text-blue-600">85%</div>
                        </div>

                        {/* Savings Rate */}
                        <div className="animate-in fade-in-50 slide-in-from-bottom-3 flex items-center gap-3 rounded-lg bg-emerald-50/50 p-3 transition-transform delay-200 duration-100 hover:scale-105 dark:bg-emerald-950/10">
                            <div className="rounded-full bg-emerald-500 p-2">
                                <TrendingUp className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">Savings Rate</div>
                                <div className="text-muted-foreground text-sm">42% increase</div>
                            </div>
                            <div className="text-xl font-bold text-emerald-600">+42%</div>
                        </div>

                        {/* Monthly Budget */}
                        <div className="animate-in fade-in-50 slide-in-from-right-3 flex items-center gap-3 rounded-lg bg-violet-50/50 p-3 transition-transform delay-300 duration-100 hover:scale-105 dark:bg-violet-950/10">
                            <div className="rounded-full bg-violet-500 p-2">
                                <Wallet className="h-4 w-4 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="font-medium">Budget Status</div>
                                <div className="text-muted-foreground text-sm">On track</div>
                            </div>
                            <div className="text-xl font-bold text-violet-600">78%</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
