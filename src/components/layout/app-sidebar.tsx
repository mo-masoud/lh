'use client';

import {
    BarChart3,
    DollarSign,
    Eye,
    FolderClosed,
    FolderPlus,
    Folders,
    Heart,
    Home,
    Lock,
    PiggyBank,
    Plus,
    Settings,
    Shield,
    Target,
    TrendingUp,
    Wallet,
} from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/layout/nav-main';
import { NavUser } from '@/components/layout/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

// This is sample data for the sidebar navigation
const data = {
    user: {
        name: 'Masoud',
        email: 'masoud@lifehub.com',
        avatar: '/avatars/masoud.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: Home,
        },
        {
            title: 'Password Manager',
            url: '/password-manager',
            icon: Shield,
            items: [
                {
                    title: 'All Passwords',
                    url: '/password-manager/passwords',
                    icon: Eye,
                },
                {
                    title: 'Add Password',
                    url: '/password-manager/add',
                    icon: Plus,
                },
                {
                    title: 'Security Audit',
                    url: '/password-manager/audit',
                    icon: Lock,
                },
            ],
        },
        {
            title: 'Savings Tracker',
            url: '/savings',
            icon: PiggyBank,
            items: [
                {
                    title: 'Portfolio',
                    url: '/savings/portfolio',
                    icon: Wallet,
                },
                {
                    title: 'Add Transaction',
                    url: '/savings/add-transaction',
                    icon: DollarSign,
                },
                {
                    title: 'Goals',
                    url: '/savings/goals',
                    icon: Target,
                },
                {
                    title: 'Reports',
                    url: '/savings/reports',
                    icon: BarChart3,
                },
            ],
        },
        {
            title: 'Folders',
            url: '/folders',
            icon: FolderClosed,
            items: [
                {
                    title: 'All Folders',
                    url: '/folders',
                    icon: Folders,
                },
                {
                    title: 'Add Folders',
                    url: '/password-manager/add',
                    icon: FolderPlus,
                },
            ],
        },
        {
            title: 'Analytics',
            url: '/analytics',
            icon: TrendingUp,
        },
        {
            title: 'Settings',
            url: '/settings',
            icon: Settings,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" className="sidebar-gradient" {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600">
                        <Heart className="h-5 w-5 text-white" fill="currentColor" />
                    </div>
                    <div className="group-data-">
                        <h1 className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-lg font-bold text-transparent">LifeHub</h1>
                        <p className="text-muted-foreground text-xs">Personal Hub</p>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
