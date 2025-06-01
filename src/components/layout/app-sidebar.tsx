"use client";

import * as React from "react";
import {
  Frame,
  Heart,
  Home,
  Lock,
  PiggyBank,
  Settings,
  Shield,
  Wallet,
  Plus,
  Eye,
  Target,
  BarChart3,
  TrendingUp,
  DollarSign,
  Folders,
  FolderClosed,
  FolderPlus,
} from "lucide-react";

import { NavMain } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data for the sidebar navigation
const data = {
  user: {
    name: "Masoud",
    email: "masoud@lifehub.com",
    avatar: "/avatars/masoud.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Password Manager",
      url: "/password-manager",
      icon: Shield,
      items: [
        {
          title: "All Passwords",
          url: "/password-manager/passwords",
          icon: Eye,
        },
        {
          title: "Add Password",
          url: "/password-manager/add",
          icon: Plus,
        },
        {
          title: "Security Audit",
          url: "/password-manager/audit",
          icon: Lock,
        },
      ],
    },
    {
      title: "Savings Tracker",
      url: "/savings",
      icon: PiggyBank,
      items: [
        {
          title: "Portfolio",
          url: "/savings/portfolio",
          icon: Wallet,
        },
        {
          title: "Add Transaction",
          url: "/savings/add-transaction",
          icon: DollarSign,
        },
        {
          title: "Goals",
          url: "/savings/goals",
          icon: Target,
        },
        {
          title: "Reports",
          url: "/savings/reports",
          icon: BarChart3,
        },
      ],
    },
    {
      title: "Folders",
      url: "/folders",
      icon: FolderClosed,
      items: [
        {
          title: "All Folders",
          url: "/folders",
          icon: Folders,
        },
        {
          title: "Add Folders",
          url: "/password-manager/add",
          icon: FolderPlus,
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: TrendingUp,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="sidebar-gradient" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg">
            <Heart className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h1 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              LifeHub
            </h1>
            <p className="text-xs text-muted-foreground">Personal Hub</p>
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
