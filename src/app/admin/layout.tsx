"use client";

import { ReactNode, useEffect } from "react";
import { DashboardLayout } from "@/components/(dashboard)/DashboardLayout";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  Home,
  Ship,
  Wrench,
  BarChart2,
  Settings,
  Users,
  FileText,
  Shield,
} from "lucide-react";

// Admin navigation links with Lucide icons
const adminLinks = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <Home className="w-5 h-5" />,
  },
  {
    label: "Vessels",
    href: "/admin/vessels",
    icon: <Ship className="w-5 h-5" />,
  },
  {
    label: "Maintenance Reports",
    href: "/admin/maintenance",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    label: "Equipment Status",
    href: "/admin/equipment",
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    label: "Repair Status",
    href: "/admin/repairs",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    label: "Vendor Management",
    href: "/admin/vendors",
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: "Statistics",
    href: "/admin/statistics",
    icon: <BarChart2 className="w-5 h-5" />,
  },
  {
    label: "Security",
    href: "/admin/security",
    icon: <Shield className="w-5 h-5" />,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Use useEffect for client-side redirects instead of redirect()
  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== "SUPER_ADMIN")) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, user, router]);

  // Show loading state while checking authentication
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <DashboardLayout
      sidebarLinks={adminLinks}
      userRole="admin"
      userName={user?.name || "Admin User"}
    >
      {children}
    </DashboardLayout>
  );
}
