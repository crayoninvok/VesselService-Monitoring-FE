// app/admin/page.tsx
import { StatCard } from "@/components/(dashboard)/StatCard";
import { DataTable } from "@/components/tables/DataTable";

// Mock Icons
const ShipIcon = () => <span className="text-xl">🚢</span>;
const ToolsIcon = () => <span className="text-xl">🔧</span>;
const AlertIcon = () => <span className="text-xl">⚠️</span>;
const VendorIcon = () => <span className="text-xl">👥</span>;

// Mock data
const recentRepairs = [
  {
    id: 1,
    vessel: "Bright Horizon",
    equipment: "Main Engine",
    status: "Repairing",
    vendor: "Marine Tech Ltd",
    date: "2025-03-20",
  },
  {
    id: 2,
    vessel: "Crystal Sea",
    equipment: "Navigation System",
    status: "Success",
    vendor: "Nav Solutions",
    date: "2025-03-18",
  },
  {
    id: 3,
    vessel: "Blue Wave",
    equipment: "Propeller",
    status: "Waiting for Spareparts",
    vendor: "PropFix Inc",
    date: "2025-03-15",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl libre-baskerville-bold text-foreground">
          SuperAdmin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Overview of fleet status and maintenance
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Vessels" value={12} icon={<ShipIcon />} />
        <StatCard
          title="Ongoing Repairs"
          value={5}
          icon={<ToolsIcon />}
          change="+2 from last month"
          changeType="negative"
        />
        <StatCard title="Equipment Alerts" value={8} icon={<AlertIcon />} />
        <StatCard
          title="Active Vendors"
          value={15}
          icon={<VendorIcon />}
          change="+3 from last month"
          changeType="positive"
        />
      </div>

      {/* Recent Repair Activities */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Recent Repair Activities
        </h2>

        <DataTable
          data={recentRepairs}
          columns={[
            { header: "Vessel", accessor: "vessel" },
            { header: "Equipment", accessor: "equipment" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Success:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  Repairing:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                  "Waiting for Spareparts":
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                };

                return (
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      statusColors[item.status] ||
                      "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {item.status}
                  </span>
                );
              },
            },
            { header: "Vendor", accessor: "vendor" },
            { header: "Date", accessor: "date" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                View
              </button>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Edit
              </button>
            </div>
          )}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-card-text">
            <span className="mr-2">🚢</span> Add New Vessel
          </button>
          <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-card-text">
            <span className="mr-2">👥</span> Add New Vendor
          </button>
          <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-card-text">
            <span className="mr-2">📋</span> Create Maintenance Report
          </button>
        </div>
      </div>
    </div>
  );
}
