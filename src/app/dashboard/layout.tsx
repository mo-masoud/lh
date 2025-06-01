import { AppSidebar } from '@/components/layout/app-sidebar';
import { DashboardHeader } from '@/components/layout/sidebar-header';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { requireAuth } from '@/lib/auth';

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Protect the dashboard - redirect to home if not authenticated
    await requireAuth();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="via-background/95 supports-[backdrop-filter]:bg-background/60 dark:via-background/95 sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-violet-200/30 bg-gradient-to-r from-violet-50/80 to-cyan-50/80 px-4 backdrop-blur dark:border-violet-800/30 dark:from-violet-950/50 dark:to-cyan-950/50">
                    <SidebarTrigger />
                    <DashboardHeader />
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="relative min-h-[calc(100vh-5rem)] flex-1 rounded-xl bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5" />
                        <div className="relative z-10 p-6">{children}</div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
