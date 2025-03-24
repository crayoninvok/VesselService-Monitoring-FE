"use client"
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

type DashboardLayoutProps = {
  children: ReactNode;
  sidebarLinks: Array<{
    label: string;
    href: string;
    icon: ReactNode;
  }>;
  userRole: "admin" | "ship" | "vendor";
  userName: string;
};

export function DashboardLayout({
  children,
  sidebarLinks,
  userRole,
  userName,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar links={sidebarLinks} userRole={userRole} />

      <div className="flex-1">
        <Header userName={userName} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
