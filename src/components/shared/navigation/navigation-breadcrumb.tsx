import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import React from 'react';

export interface BreadcrumbItemType {
    label?: string;
    href?: string;
    icon?: React.ReactNode;
}

interface NavigationBreadcrumbProps {
    items: BreadcrumbItemType[];
    className?: string;
}

/**
 * NavigationBreadcrumb - A reusable breadcrumb component
 *
 * Features:
 * - Automatically detects the last item as the current page
 * - Supports optional labels for icon-only items
 * - Built on top of shadcn/ui breadcrumb components
 *
 * @param items - Array of breadcrumb items (last item is automatically current page)
 * @param className - Additional CSS classes
 *
 * Example usage:
 * ```tsx
 * const breadcrumbItems = [
 *   { label: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
 *   { label: "Dashboard", href: "/dashboard", icon: <Dashboard className="h-4 w-4" /> },
 *   { label: "Settings" }, // Automatically treated as current page
 *   { icon: <Settings className="h-4 w-4" /> } // Icon-only item
 * ];
 *
 * <NavigationBreadcrumb items={breadcrumbItems} />
 * ```
 */
export function NavigationBreadcrumb({ items, className }: NavigationBreadcrumbProps) {
    return (
        <Breadcrumb className={cn('animate-in fade-in-0 slide-in-from-left-4 duration-500', className)}>
            <BreadcrumbList>
                {items.map((item, index) => {
                    const isCurrentPage = index === items.length - 1;

                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {isCurrentPage ? (
                                    <BreadcrumbPage className="flex items-center gap-2">
                                        {item.icon && item.icon}
                                        {item.label && item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink
                                        href={item.href || '#'}
                                        className="hover:text-foreground flex items-center gap-2 transition-colors"
                                    >
                                        {item.icon && item.icon}
                                        {item.label && item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < items.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
