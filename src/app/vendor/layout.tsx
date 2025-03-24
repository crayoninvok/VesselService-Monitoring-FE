import { ReactNode } from "react";
import { DashboardLayout } from "@/components/(dashboard)/DashboardLayout";

const HomeIcon = () => <span>🏠</span>;
const JobsIcon = () => <span>🔧</span>;
const VesselIcon = () => <span>🚢</span>;
const ReportIcon = () => <span>📋</span>;

const vendorLinks = [
  {
    label: "Dashboard",
    href: "/vendor",
    icon: <HomeIcon />,
  },
  {
    label: "Job Management",
    href: "/vendor/job",
    icon: <JobsIcon />,
  },
  {
    label: "Assigned Vessels",
    href: "/vendor/vessels",
    icon: <VesselIcon />,
  },
  {
    label: "Service Reports",
    href: "/vendor/reports",
    icon: <ReportIcon />,
  },
];

export default function VendorLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout
      sidebarLinks={vendorLinks}
      userRole="vendor"
      userName="Marine Tech Ltd"
    >
      {children}
    </DashboardLayout>
  );
}
