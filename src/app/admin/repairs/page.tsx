// app/admin/repairs/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock repair data
const repairs = [
  {
    id: 1,
    vessel: "Bright Horizon",
    equipment: "Main Engine",
    issue: "Overheating",
    status: "Repairing",
    priority: "High",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-15",
    estimatedCompletion: "2025-03-25",
    location: "Singapore",
  },
  {
    id: 2,
    vessel: "Crystal Sea",
    equipment: "Navigation System",
    issue: "Display Error",
    status: "Waiting for Spareparts",
    priority: "Medium",
    vendor: "Nav Solutions",
    startDate: "2025-03-18",
    estimatedCompletion: "2025-03-28",
    location: "Port Klang",
  },
  {
    id: 3,
    vessel: "Blue Wave",
    equipment: "Generator #2",
    issue: "Not Starting",
    status: "Technician Onboard",
    priority: "High",
    vendor: "PowerGen Co",
    startDate: "2025-03-22",
    estimatedCompletion: "2025-03-24",
    location: "Jakarta",
  },
  {
    id: 4,
    vessel: "Northern Star",
    equipment: "Air Conditioning Unit",
    issue: "Not Cooling",
    status: "Waiting Vendor",
    priority: "Low",
    vendor: "Pending Assignment",
    startDate: "2025-03-23",
    estimatedCompletion: "TBD",
    location: "Bangkok",
  },
  {
    id: 5,
    vessel: "Eastern Wind",
    equipment: "Sewage Treatment Plant",
    issue: "Malfunction",
    status: "Process",
    priority: "Medium",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-24",
    estimatedCompletion: "2025-04-05",
    location: "Ho Chi Minh City",
  },
  {
    id: 6,
    vessel: "Bright Horizon",
    equipment: "Freshwater Generator",
    issue: "Low Output",
    status: "Success",
    priority: "Medium",
    vendor: "Marine Tech Ltd",
    startDate: "2025-03-10",
    estimatedCompletion: "2025-03-15",
    location: "Singapore",
    completionDate: "2025-03-14",
  },
  {
    id: 7,
    vessel: "Western Breeze",
    equipment: "Navigation Radar",
    issue: "Signal Loss",
    status: "Still Damaged",
    priority: "High",
    vendor: "Nav Solutions",
    startDate: "2025-03-12",
    estimatedCompletion: "2025-03-18",
    location: "Manila",
    note: "Requires replacement unit",
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
            Monitor and manage repairs across the fleet
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-700 dark:hover:bg-orange-800 text-white px-4 py-2 rounded-md">
            Pending Assignment{" "}
            <span className="ml-1 bg-white text-orange-500 px-2 py-0.5 rounded-full text-xs">
              1
            </span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            Create New Repair Request
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Vessel
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Vessels</option>
              <option value="bright-horizon">Bright Horizon</option>
              <option value="crystal-sea">Crystal Sea</option>
              <option value="blue-wave">Blue Wave</option>
              <option value="northern-star">Northern Star</option>
              <option value="eastern-wind">Eastern Wind</option>
              <option value="western-breeze">Western Breeze</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground">
              <option value="">All Statuses</option>
              <option value="waiting-vendor">Waiting Vendor</option>
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
              Vendor
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Vendors</option>
              <option value="marine-tech">Marine Tech Ltd</option>
              <option value="nav-solutions">Nav Solutions</option>
              <option value="powergen">PowerGen Co</option>
              <option value="pending">Pending Assignment</option>
            </select>
          </div>
          <div className="flex-1"></div>
          <div className="self-end">
            <input
              type="text"
              placeholder="Search repairs..."
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Repair Status Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-card-bg p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Repairs
          </p>
          <p className="text-2xl font-bold text-card-heading">
            {repairs.length}
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Active:{" "}
            <span className="font-medium text-card-text">
              {
                repairs.filter(
                  (r) => r.status !== "Success" && r.status !== "Cancelled"
                ).length
              }
            </span>
          </div>
        </div>

        <div className="bg-card-bg p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            High Priority
          </p>
          <p className="text-2xl font-bold text-red-600 dark:text-red-500">
            {
              repairs.filter(
                (r) => r.priority === "High" && r.status !== "Success"
              ).length
            }
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Total:{" "}
            <span className="font-medium text-card-text">
              {repairs.filter((r) => r.priority === "High").length}
            </span>
          </div>
        </div>

        <div className="bg-card-bg p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-500">
            {repairs.filter((r) => r.status === "Success").length}
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Success Rate:{" "}
            <span className="font-medium text-card-text">
              {Math.round(
                (repairs.filter((r) => r.status === "Success").length /
                  repairs.length) *
                  100
              )}
              %
            </span>
          </div>
        </div>

        <div className="bg-card-bg p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Pending Assignment
          </p>
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-500">
            {repairs.filter((r) => r.status === "Waiting Vendor").length}
          </p>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Needs action{" "}
            <span className="animate-pulse inline-block w-2 h-2 bg-orange-500 rounded-full ml-1"></span>
          </div>
        </div>
      </div>

      {/* Repairs Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={repairs}
          columns={[
            { header: "Vessel", accessor: "vessel" },
            { header: "Equipment", accessor: "equipment" },
            { header: "Issue", accessor: "issue" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  "Waiting Vendor":
                    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
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
            { header: "Vendor", accessor: "vendor" },
            { header: "Location", accessor: "location" },
            { header: "Started", accessor: "startDate" },
            { header: "Est. Completion", accessor: "estimatedCompletion" },
          ]}
          actions={(item) => (
            <div className="flex space-x-2">
              <a
                href={`/admin/repairs/${item.id}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View
              </a>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Edit
              </button>
              {item.status === "Waiting Vendor" && (
                <button className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300">
                  Assign Vendor
                </button>
              )}
            </div>
          )}
        />
      </div>

      {/* Repair Statistics by Vessel */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Repair Statistics by Vessel
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Vessel
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Total Repairs
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Active
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Completed
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  High Priority
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Success Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {Array.from(new Set(repairs.map((r) => r.vessel))).map(
                (vessel) => {
                  const vesselRepairs = repairs.filter(
                    (r) => r.vessel === vessel
                  );
                  const activeRepairs = vesselRepairs.filter(
                    (r) => r.status !== "Success" && r.status !== "Cancelled"
                  );
                  const completedRepairs = vesselRepairs.filter(
                    (r) => r.status === "Success"
                  );
                  const highPriorityRepairs = vesselRepairs.filter(
                    (r) => r.priority === "High" && r.status !== "Success"
                  );
                  const successRate =
                    vesselRepairs.length > 0
                      ? Math.round(
                          (completedRepairs.length / vesselRepairs.length) * 100
                        )
                      : 0;

                  return (
                    <tr key={vessel}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {vessel}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {vesselRepairs.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            activeRepairs.length > 0
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {activeRepairs.length}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {completedRepairs.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            highPriorityRepairs.length > 0
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {highPriorityRepairs.length}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              successRate > 80
                                ? "bg-green-500"
                                : successRate > 50
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${successRate}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 inline-block">
                          {successRate}%
                        </span>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Repair Activity */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Recent Repair Activity
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Repair Completed: Freshwater Generator on Bright Horizon
            </h3>
            <p className="text-sm text-card-text">
              Marine Tech Ltd successfully fixed low output issue
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              1 day ago
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              New Repair Request: Air Conditioning Unit on Northern Star
            </h3>
            <p className="text-sm text-card-text">
              Waiting for vendor assignment
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              1 day ago
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Status Update: Generator #2 on Blue Wave
            </h3>
            <p className="text-sm text-card-text">
              Technician now onboard, diagnosis in progress
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              2 days ago
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Status Update: Navigation System on Crystal Sea
            </h3>
            <p className="text-sm text-card-text">
              Nav Solutions waiting for replacement parts
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              6 days ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
