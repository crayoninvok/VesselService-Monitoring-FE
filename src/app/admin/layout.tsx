// app/admin/layout.tsx
import { ReactNode } from "react";
import { DashboardLayout } from "@/components/(dashboard)/DashboardLayout";

// Icons (you can replace these with actual icons from a library like heroicons or react-icons)
const HomeIcon = () => <span>🏠</span>;
const ShipIcon = () => <span>🚢</span>;
const ToolsIcon = () => <span>🔧</span>;
const StatusIcon = () => <span>📊</span>;
const RepairIcon = () => <span>🛠️</span>;
const VendorIcon = () => <span>👥</span>;

const adminLinks = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: <HomeIcon />,
  },
  {
    label: "Vessels",
    href: "/admin/vessels",
    icon: <ShipIcon />,
  },
  {
    label: "Maintenance Reports",
    href: "/admin/maintenance",
    icon: <ToolsIcon />,
  },
  {
    label: "Equipment Status",
    href: "/admin/equipment",
    icon: <StatusIcon />,
  },
  {
    label: "Repair Status",
    href: "/admin/repairs",
    icon: <RepairIcon />,
  },
  {
    label: "Vendor Management",
    href: "/admin/vendors",
    icon: <VendorIcon />,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout
      sidebarLinks={adminLinks}
      userRole="admin"
      userName="Samudera Energi Tangguh"
    >
      {children}
    </DashboardLayout>
  );
}
