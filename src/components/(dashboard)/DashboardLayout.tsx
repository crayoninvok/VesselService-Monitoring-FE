"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useAuth } from "@/hooks/useAuth";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        links={sidebarLinks}
        userRole={userRole}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={logout}
      />

      <div className="flex-1">
        <Header
          userName={userName}
          onMenuClick={toggleSidebar}
          onLogout={logout}
        />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
