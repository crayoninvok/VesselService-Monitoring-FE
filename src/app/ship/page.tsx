// app/ship/page.tsx
import { StatCard } from "@/components/(dashboard)/StatCard";
import { DataTable } from "@/components/tables/DataTable";

// Mock Icons
const ToolsIcon = () => <span className="text-xl">🔧</span>;
const AlertIcon = () => <span className="text-xl">⚠️</span>;
const CheckIcon = () => <span className="text-xl">✅</span>;
const ClockIcon = () => <span className="text-xl">⏱️</span>;

// Mock data
const activeRepairs = [
  {
    id: 1,
    equipment: "Main Engine",
    issue: "Overheating",
    status: "Repairing",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-15",
  },
  {
    id: 2,
    equipment: "Navigation System",
    issue: "Display Error",
    status: "Waiting for Spareparts",
    vendor: "Nav Solutions",
    startDate: "2025-03-18",
  },
  {
    id: 3,
    equipment: "Generator #2",
    issue: "Not Starting",
    status: "Technician Onboard",
    vendor: "PowerGen Co",
    startDate: "2025-03-22",
  },
];

export default function ShipAdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl libre-baskerville-bold text-foreground">
          Ship Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Bright Horizon - Vessel Maintenance Overview
        </p>
      </div>

      {/* Vessel Overview */}
      <div className="bg-card-bg p-5 rounded-lg shadow mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-2xl">🚢</span>
          </div>
          <div>
            <h2 className="text-xl libre-baskerville-regular text-card-heading">
              Bright Horizon
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cargo Vessel • IMO: 9876543
            </p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full text-sm">
              Active
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-4 text-center">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Current Location
            </p>
            <p className="font-medium text-card-text">Singapore</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Last Port
            </p>
            <p className="font-medium text-card-text">Port Klang</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Next Port
            </p>
            <p className="font-medium text-card-text">Jakarta</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">ETA</p>
            <p className="font-medium text-card-text">Mar 26, 2025</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Equipment Items" value={45} icon={<ToolsIcon />} />
        <StatCard
          title="Need Attention"
          value={3}
          icon={<AlertIcon />}
          change="+1 from last week"
          changeType="negative"
        />
        <StatCard title="Operational" value={42} icon={<CheckIcon />} />
        <StatCard title="Ongoing Repairs" value={3} icon={<ClockIcon />} />
      </div>

      {/* Active Repairs */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Active Repairs
        </h2>

        <DataTable
          data={activeRepairs}
          columns={[
            { header: "Equipment", accessor: "equipment" },
            { header: "Issue", accessor: "issue" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Repairing:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                  "Waiting for Spareparts":
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                  "Technician Onboard":
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
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
            { header: "Started", accessor: "startDate" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Details
              </button>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Update
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
            <span className="mr-2">🔧</span> Report Equipment Issue
          </button>
          <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-card-text">
            <span className="mr-2">📋</span> Add Maintenance Report
          </button>
          <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center text-card-text">
            <span className="mr-2">📷</span> Upload Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
