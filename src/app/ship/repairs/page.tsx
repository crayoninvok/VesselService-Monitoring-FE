// app/ship/repairs/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock repair data
const repairs = [
  {
    id: 1,
    equipment: "Main Engine",
    issue: "Overheating",
    status: "Repairing",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-15",
    estimatedCompletion: "2025-03-25",
  },
  {
    id: 2,
    equipment: "Navigation System",
    issue: "Display Error",
    status: "Waiting for Spareparts",
    vendor: "Nav Solutions",
    startDate: "2025-03-18",
    estimatedCompletion: "2025-03-28",
  },
  {
    id: 3,
    equipment: "Generator #2",
    issue: "Not Starting",
    status: "Technician Onboard",
    vendor: "PowerGen Co",
    startDate: "2025-03-22",
    estimatedCompletion: "2025-03-24",
  },
  {
    id: 4,
    equipment: "Auxiliary Engine #2",
    issue: "Oil Leak",
    status: "Success",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-10",
    estimatedCompletion: "2025-03-12",
  },
];

export default function RepairsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Repair Status
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Bright Horizon - Monitor ongoing and completed repairs
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
          Request New Repair
        </button>
      </div>

      {/* Status Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <a
            href="#"
            className="border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            All Repairs
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Active
          </a>
          <a
            href="#"
            className="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            Completed
          </a>
        </nav>
      </div>

      {/* Repairs Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={repairs}
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
                  Success:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
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
            { header: "Est. Completion", accessor: "estimatedCompletion" },
          ]}
          actions={(item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Details
              </button>
              {item.status !== "Success" && (
                <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                  Update
                </button>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
}
