// app/ship/equipment/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock equipment data
const equipmentItems = [
  {
    id: 1,
    name: "Main Engine",
    category: "Propulsion",
    lastChecked: "2025-03-10",
    status: "Normal",
    nextMaintenance: "2025-06-10",
  },
  {
    id: 2,
    name: "Auxiliary Engine #1",
    category: "Power",
    lastChecked: "2025-03-05",
    status: "Normal",
    nextMaintenance: "2025-05-05",
  },
  {
    id: 3,
    name: "Navigation Radar",
    category: "Navigation",
    lastChecked: "2025-02-20",
    status: "Damaged",
    nextMaintenance: "2025-04-20",
  },
  {
    id: 4,
    name: "Generator #2",
    category: "Power",
    lastChecked: "2025-03-18",
    status: "Must Repair",
    nextMaintenance: "2025-04-18",
  },
  {
    id: 5,
    name: "Fire Suppression System",
    category: "Safety",
    lastChecked: "2025-03-15",
    status: "Normal",
    nextMaintenance: "2025-06-15",
  },
];

export default function EquipmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Equipment Status
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Bright Horizon - Monitor and update equipment status
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
          Report New Issue
        </button>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Category
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Categories</option>
              <option value="propulsion">Propulsion</option>
              <option value="power">Power</option>
              <option value="navigation">Navigation</option>
              <option value="safety">Safety</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Statuses</option>
              <option value="normal">Normal</option>
              <option value="damaged">Damaged</option>
              <option value="must-repair">Must Repair</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Maintenance Due
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">Any Time</option>
              <option value="30days">Next 30 Days</option>
              <option value="60days">Next 60 Days</option>
              <option value="90days">Next 90 Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* Equipment Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={equipmentItems}
          columns={[
            { header: "Equipment Name", accessor: "name" },
            { header: "Category", accessor: "category" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Normal:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  Damaged:
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                  "Must Repair":
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
            { header: "Last Checked", accessor: "lastChecked" },
            { header: "Next Maintenance", accessor: "nextMaintenance" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Details
              </button>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Update Status
              </button>
              {_item.status !== "Normal" && (
                <button className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300">
                  Request Repair
                </button>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
}
