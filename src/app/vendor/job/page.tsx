// app/vendor/jobs/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock job data
const jobs = [
  {
    id: 1,
    vessel: "Bright Horizon",
    equipment: "Main Engine",
    issue: "Overheating",
    status: "Repairing",
    priority: "High",
    startDate: "2025-03-15",
    location: "Singapore",
    estimatedCompletion: "2025-03-25",
  },
  {
    id: 2,
    vessel: "Crystal Sea",
    equipment: "Navigation System",
    issue: "Display Error",
    status: "Waiting for Spareparts",
    priority: "Medium",
    startDate: "2025-03-18",
    location: "Port Klang",
    estimatedCompletion: "2025-03-28",
  },
  {
    id: 3,
    vessel: "Blue Wave",
    equipment: "Generator #2",
    issue: "Not Starting",
    status: "Technician Onboard",
    priority: "High",
    startDate: "2025-03-22",
    location: "Jakarta",
    estimatedCompletion: "2025-03-24",
  },
  {
    id: 4,
    vessel: "Northern Star",
    equipment: "Air Conditioning Unit",
    issue: "Not Cooling",
    status: "Process",
    priority: "Low",
    startDate: "2025-03-23",
    location: "Bangkok",
    estimatedCompletion: "2025-03-30",
  },
  {
    id: 5,
    vessel: "Eastern Wind",
    equipment: "Sewage Treatment Plant",
    issue: "Malfunction",
    status: "Process",
    priority: "Medium",
    startDate: "2025-03-24",
    location: "Ho Chi Minh City",
    estimatedCompletion: "2025-04-05",
  },
  {
    id: 6,
    vessel: "Western Star",
    equipment: "Ballast Water System",
    issue: "Pump Failure",
    status: "Success",
    priority: "High",
    startDate: "2025-03-10",
    location: "Manila",
    estimatedCompletion: "2025-03-15",
  },
  {
    id: 7,
    vessel: "Golden Sunrise",
    equipment: "Freshwater Generator",
    issue: "Low Output",
    status: "Waiting for Spareparts",
    priority: "Medium",
    startDate: "2025-03-17",
    location: "Johor Bahru",
    estimatedCompletion: "2025-03-29",
  },
];

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Job Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage and update job statuses
          </p>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground">
              <option value="">All Statuses</option>
              <option value="process">Process</option>
              <option value="technician-onboard">Technician Onboard</option>
              <option value="repairing">Repairing</option>
              <option value="waiting-spareparts">Waiting for Spareparts</option>
              <option value="success">Success</option>
              <option value="still-damaged">Still Damaged</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Priority
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Priorities</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Time Range
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Time</option>
              <option value="current">Current Week</option>
              <option value="last30">Last 30 Days</option>
              <option value="last90">Last 90 Days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Location
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Locations</option>
              <option value="singapore">Singapore</option>
              <option value="port-klang">Port Klang</option>
              <option value="jakarta">Jakarta</option>
              <option value="bangkok">Bangkok</option>
              <option value="ho-chi-minh">Ho Chi Minh City</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            Apply Filters
          </button>
          <button className="ml-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            Reset
          </button>
        </div>
      </div>

      {/* Job Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card-bg p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Jobs
          </h3>
          <p className="text-2xl font-bold text-card-heading mt-1">
            {jobs.length}
          </p>
        </div>
        <div className="bg-card-bg p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Active Jobs
          </h3>
          <p className="text-2xl font-bold text-card-heading mt-1">
            {
              jobs.filter(
                (job) => job.status !== "Success" && job.status !== "Cancelled"
              ).length
            }
          </p>
        </div>
        <div className="bg-card-bg p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            High Priority
          </h3>
          <p className="text-2xl font-bold text-card-heading mt-1">
            {
              jobs.filter(
                (job) => job.priority === "High" && job.status !== "Success"
              ).length
            }
          </p>
        </div>
        <div className="bg-card-bg p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Completed Jobs
          </h3>
          <p className="text-2xl font-bold text-card-heading mt-1">
            {jobs.filter((job) => job.status === "Success").length}
          </p>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={jobs}
          columns={[
            { header: "Vessel", accessor: "vessel" },
            { header: "Equipment", accessor: "equipment" },
            { header: "Issue", accessor: "issue" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Process:
                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                  "Technician Onboard":
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
                  Repairing:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                  "Waiting for Spareparts":
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                  Success:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  "Still Damaged":
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
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
            {
              header: "Priority",
              accessor: "priority",
              cell: (item) => {
                const priorityColors: Record<string, string> = {
                  High: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
                  Medium:
                    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
                  Low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                };

                return (
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      priorityColors[item.priority]
                    }`}
                  >
                    {item.priority}
                  </span>
                );
              },
            },
            { header: "Location", accessor: "location" },
            { header: "Est. Completion", accessor: "estimatedCompletion" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <a
                href={`/vendor/job/${_item.id}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View
              </a>
              {_item.status !== "Success" && (
                <>
                  <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                    Update Status
                  </button>
                  <button className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
                    Upload Report
                  </button>
                </>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
}
