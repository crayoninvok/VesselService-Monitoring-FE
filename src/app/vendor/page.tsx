// app/vendor/page.tsx
import { StatCard } from "@/components/(dashboard)/StatCard";
import { DataTable } from "@/components/tables/DataTable";

// Mock Icons
const JobsIcon = () => <span className="text-xl">🔧</span>;
const PendingIcon = () => <span className="text-xl">⏳</span>;
const CompleteIcon = () => <span className="text-xl">✅</span>;
const EarningsIcon = () => <span className="text-xl">💰</span>;

// Mock data
const recentJobs = [
  {
    id: 1,
    vessel: "Bright Horizon",
    equipment: "Main Engine",
    issue: "Overheating",
    status: "Repairing",
    startDate: "2025-03-15",
    location: "Singapore",
  },
  {
    id: 2,
    vessel: "Crystal Sea",
    equipment: "Navigation System",
    issue: "Display Error",
    status: "Waiting for Spareparts",
    startDate: "2025-03-18",
    location: "Port Klang",
  },
  {
    id: 3,
    vessel: "Blue Wave",
    equipment: "Generator #2",
    issue: "Not Starting",
    status: "Technician Onboard",
    startDate: "2025-03-22",
    location: "Jakarta",
  },
];

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl libre-baskerville-bold text-foreground">
          Vendor Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Marine Tech Ltd - Service Management
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Jobs" value={28} icon={<JobsIcon />} />
        <StatCard title="Pending Jobs" value={3} icon={<PendingIcon />} />
        <StatCard
          title="Completed Jobs"
          value={25}
          icon={<CompleteIcon />}
          change="+5 this month"
          changeType="positive"
        />
        <StatCard
          title="Monthly Earnings"
          value="$28,500"
          icon={<EarningsIcon />}
          change="+12% from last month"
          changeType="positive"
        />
      </div>

      {/* Active Jobs */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Active Jobs
        </h2>

        <DataTable
          data={recentJobs}
          columns={[
            { header: "Vessel", accessor: "vessel" },
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
            { header: "Started", accessor: "startDate" },
            { header: "Location", accessor: "location" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                View Details
              </button>
              <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                Update Status
              </button>
            </div>
          )}
        />
      </div>

      {/* Vessel Locations */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Assigned Vessel Locations
        </h2>

        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            Map Visualization Placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
