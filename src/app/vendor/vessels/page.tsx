import { DataTable } from "@/components/tables/DataTable";

// Mock vessel data for vendor
const assignedVessels = [
  {
    id: 1,
    name: "Bright Horizon",
    type: "Cargo",
    currentLocation: "Singapore",
    assignedJobs: 2,
    lastServiced: "2025-02-15",
    nextService: "2025-05-15",
  },
  {
    id: 2,
    name: "Crystal Sea",
    type: "Container",
    currentLocation: "Port Klang",
    assignedJobs: 1,
    lastServiced: "2025-01-20",
    nextService: "2025-04-20",
  },
  {
    id: 3,
    name: "Blue Wave",
    type: "Tanker",
    currentLocation: "Jakarta",
    assignedJobs: 1,
    lastServiced: "2025-03-05",
    nextService: "2025-06-05",
  },
];

export default function VesselsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl libre-baskerville-bold text-foreground">
          Assigned Vessels
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          View vessels assigned to your company
        </p>
      </div>

      {/* Vessels Map */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Vessel Locations
        </h2>
        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            Map Visualization Placeholder
          </p>
        </div>
      </div>

      {/* Vessels Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={assignedVessels}
          columns={[
            { header: "Vessel Name", accessor: "name" },
            { header: "Type", accessor: "type" },
            { header: "Current Location", accessor: "currentLocation" },
            {
              header: "Assigned Jobs",
              accessor: "assignedJobs",
              cell: (item) => (
                <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs">
                  {item.assignedJobs}
                </span>
              ),
            },
            { header: "Last Serviced", accessor: "lastServiced" },
            { header: "Next Service Due", accessor: "nextService" },
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                View Details
              </button>
              <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                View Jobs
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
}
