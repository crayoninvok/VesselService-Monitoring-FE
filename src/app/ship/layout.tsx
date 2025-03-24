// app/ship/layout.tsx
import { ReactNode } from "react";
import { DashboardLayout } from "@/components/(dashboard)/DashboardLayout";

// Icons (simplified for example)
const HomeIcon = () => <span>🏠</span>;
const ToolsIcon = () => <span>🔧</span>;
const StatusIcon = () => <span>📊</span>;
const RepairIcon = () => <span>🛠️</span>;

const shipAdminLinks = [
  {
    label: "Dashboard",
    href: "/ship",
    icon: <HomeIcon />,
  },
  {
    label: "Maintenance Reports",
    href: "/ship/maintenance",
    icon: <ToolsIcon />,
  },
  {
    label: "Equipment Status",
    href: "/ship/equipment",
    icon: <StatusIcon />,
  },
  {
    label: "Repair Status",
    href: "/ship/repairs",
    icon: <RepairIcon />,
  },
];

export default function ShipAdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout
      sidebarLinks={shipAdminLinks}
      userRole="ship"
      userName="Captain Smith"
    >
      {children}
    </DashboardLayout>
  );
}
