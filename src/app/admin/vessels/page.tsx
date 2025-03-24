// app/admin/vessels/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock vessel data
const vessels = [
  {
    id: 1,
    name: "Bright Horizon",
    type: "Cargo",
    status: "Active",
    lastMaintenance: "2025-02-15",
    location: "Singapore",
    aisStatus: "Transmitting",
  },
  {
    id: 2,
    name: "Crystal Sea",
    type: "Container",
    status: "Active",
    lastMaintenance: "2025-01-20",
    location: "Port Klang",
    aisStatus: "Transmitting",
  },
  {
    id: 3,
    name: "Blue Wave",
    type: "Tanker",
    status: "Docked",
    lastMaintenance: "2025-03-05",
    location: "Jakarta",
    aisStatus: "Inactive",
  },
  {
    id: 4,
    name: "Northern Star",
    type: "Passenger",
    status: "Maintenance",
    lastMaintenance: "2025-03-10",
    location: "Bangkok",
    aisStatus: "Inactive",
  },
  {
    id: 5,
    name: "Eastern Wind",
    type: "Bulk Carrier",
    status: "Active",
    lastMaintenance: "2025-02-25",
    location: "Ho Chi Minh City",
    aisStatus: "Transmitting",
  },
  {
    id: 6,
    name: "Western Breeze",
    type: "Container",
    status: "Active",
    lastMaintenance: "2025-01-30",
    location: "Manila",
    aisStatus: "Transmitting",
  },
  {
    id: 7,
    name: "Southern Mist",
    type: "Tanker",
    status: "Docked",
    lastMaintenance: "2025-02-20",
    location: "Johor Bahru",
    aisStatus: "Inactive",
  },
];

export default function VesselsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Vessel Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your fleet
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
          Add New Vessel
        </button>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Vessel Type
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Types</option>
              <option value="cargo">Cargo</option>
              <option value="container">Container</option>
              <option value="tanker">Tanker</option>
              <option value="passenger">Passenger</option>
              <option value="bulk">Bulk Carrier</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="docked">Docked</option>
              <option value="maintenance">Maintenance</option>
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
          <div className="flex-1"></div>
          <div className="self-end">
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              Apply Filters
            </button>
            <button className="ml-2 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Vessels Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={vessels}
          columns={[
            { header: "Vessel Name", accessor: "name" },
            { header: "Type", accessor: "type" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Active:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  Docked:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
                  Maintenance:
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
            { header: "Last Maintenance", accessor: "lastMaintenance" },
            { header: "Current Location", accessor: "location" },
            {
              header: "AIS Status",
              accessor: "aisStatus",
              cell: (item) => {
                const aisColors: Record<string, string> = {
                  Transmitting:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  Inactive:
                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                };

                return (
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      aisColors[item.aisStatus] ||
                      "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {item.aisStatus}
                  </span>
                );
              },
            },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <a
                href={`/admin/vessels/${_item.id}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View
              </a>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                Delete
              </button>
            </div>
          )}
        />
      </div>

      {/* Fleet Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card-bg p-5 rounded-lg shadow">
          <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
            Fleet Overview
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-card-text">Total Vessels</span>
              <span className="font-semibold text-card-heading">
                {vessels.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Active Vessels</span>
              <span className="font-semibold text-card-heading">
                {vessels.filter((v) => v.status === "Active").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">In Maintenance</span>
              <span className="font-semibold text-card-heading">
                {vessels.filter((v) => v.status === "Maintenance").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Docked</span>
              <span className="font-semibold text-card-heading">
                {vessels.filter((v) => v.status === "Docked").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">AIS Transmitting</span>
              <span className="font-semibold text-card-heading">
                {vessels.filter((v) => v.aisStatus === "Transmitting").length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-card-bg p-5 rounded-lg shadow">
          <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
            Fleet Location
          </h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Map Visualization Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
