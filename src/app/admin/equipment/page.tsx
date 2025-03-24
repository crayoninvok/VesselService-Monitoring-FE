// app/admin/equipment/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock equipment data
const equipmentItems = [
  {
    id: 1,
    name: "Main Engine",
    vessel: "Bright Horizon",
    category: "Propulsion",
    lastChecked: "2025-03-10",
    status: "Normal",
    nextMaintenance: "2025-06-10",
    location: "Engine Room",
    manufacturer: "Wartsila",
  },
  {
    id: 2,
    name: "Auxiliary Engine #1",
    vessel: "Bright Horizon",
    category: "Power",
    lastChecked: "2025-03-05",
    status: "Normal",
    nextMaintenance: "2025-05-05",
    location: "Engine Room",
    manufacturer: "Caterpillar",
  },
  {
    id: 3,
    name: "Navigation Radar",
    vessel: "Crystal Sea",
    category: "Navigation",
    lastChecked: "2025-02-20",
    status: "Damaged",
    nextMaintenance: "2025-04-20",
    location: "Bridge",
    manufacturer: "Furuno",
  },
  {
    id: 4,
    name: "Generator #2",
    vessel: "Blue Wave",
    category: "Power",
    lastChecked: "2025-03-18",
    status: "Must Repair",
    nextMaintenance: "2025-04-18",
    location: "Engine Room",
    manufacturer: "Volvo Penta",
  },
  {
    id: 5,
    name: "Fire Suppression System",
    vessel: "Northern Star",
    category: "Safety",
    lastChecked: "2025-03-15",
    status: "Normal",
    nextMaintenance: "2025-06-15",
    location: "Throughout Ship",
    manufacturer: "Johnson Controls",
  },
  {
    id: 6,
    name: "Main Engine",
    vessel: "Eastern Wind",
    category: "Propulsion",
    lastChecked: "2025-02-25",
    status: "Normal",
    nextMaintenance: "2025-05-25",
    location: "Engine Room",
    manufacturer: "MAN Energy",
  },
  {
    id: 7,
    name: "Freshwater Generator",
    vessel: "Western Breeze",
    category: "Utility",
    lastChecked: "2025-02-10",
    status: "Damaged",
    nextMaintenance: "2025-04-10",
    location: "Utility Deck",
    manufacturer: "Alfa Laval",
  },
  {
    id: 8,
    name: "Ballast Water Treatment System",
    vessel: "Southern Mist",
    category: "Utility",
    lastChecked: "2025-03-01",
    status: "Normal",
    nextMaintenance: "2025-06-01",
    location: "Pump Room",
    manufacturer: "Wärtsilä",
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
            Monitor and manage equipment across all vessels
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-800 text-white px-4 py-2 rounded-md">
            Equipment Alerts{" "}
            <span className="ml-1 bg-white text-yellow-500 px-2 py-0.5 rounded-full text-xs">
              2
            </span>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            Register New Equipment
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
              <option value="southern-mist">Southern Mist</option>
            </select>
          </div>
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
              <option value="utility">Utility</option>
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
          <div className="flex-1"></div>
          <div className="self-end">
            <input
              type="text"
              placeholder="Search equipment..."
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Equipment Status Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card-bg p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Normal</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-500">
              {equipmentItems.filter((item) => item.status === "Normal").length}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
            <span>✓</span>
          </div>
        </div>

        <div className="bg-card-bg p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Damaged</p>
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-500">
              {
                equipmentItems.filter((item) => item.status === "Damaged")
                  .length
              }
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-600 dark:text-yellow-300">
            <span>!</span>
          </div>
        </div>

        <div className="bg-card-bg p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Must Repair
            </p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-500">
              {
                equipmentItems.filter((item) => item.status === "Must Repair")
                  .length
              }
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300">
            <span>⚠</span>
          </div>
        </div>
      </div>

      {/* Equipment Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={equipmentItems}
          columns={[
            { header: "Equipment Name", accessor: "name" },
            { header: "Vessel", accessor: "vessel" },
            { header: "Category", accessor: "category" },
            { header: "Manufacturer", accessor: "manufacturer" },
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
              <a
                href={`/admin/equipment/${_item.id}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View
              </a>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Update
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

      {/* Upcoming Maintenance */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Upcoming Maintenance
        </h2>

        <div className="space-y-3">
          {[...equipmentItems]
            .sort(
              (a, b) =>
                new Date(a.nextMaintenance).getTime() -
                new Date(b.nextMaintenance).getTime()
            )
            .slice(0, 5)
            .map((item) => (
              <div
                key={item.id}
                className="border-l-4 border-blue-500 pl-4 py-2"
              >
                <h3 className="text-md font-semibold text-card-heading">
                  {item.name} - {item.vessel}
                </h3>
                <p className="text-sm text-card-text">
                  Scheduled for: {item.nextMaintenance}
                </p>
                <div className="flex justify-between mt-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Category: {item.category}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Current Status:
                    <span
                      className={`
                      ${
                        item.status === "Normal"
                          ? "text-green-600 dark:text-green-400"
                          : ""
                      }
                      ${
                        item.status === "Damaged"
                          ? "text-yellow-600 dark:text-yellow-400"
                          : ""
                      }
                      ${
                        item.status === "Must Repair"
                          ? "text-red-600 dark:text-red-400"
                          : ""
                      }
                      ml-1 font-medium
                    `}
                    >
                      {item.status}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
            View Full Maintenance Schedule →
          </button>
        </div>
      </div>
    </div>
  );
}
