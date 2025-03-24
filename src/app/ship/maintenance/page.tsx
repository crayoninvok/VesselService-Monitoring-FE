// app/ship/maintenance/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock maintenance report data
const maintenanceReports = [
  {
    id: 1,
    reportType: "Service",
    equipment: "Main Engine",
    performedBy: "Marine Tech Ltd",
    date: "2025-02-15",
    approvedBy: "Captain Smith",
    status: "Completed",
  },
  {
    id: 2,
    reportType: "Survey",
    equipment: "Hull Integrity",
    performedBy: "Ocean Inspect Co",
    date: "2025-01-20",
    approvedBy: "Captain Smith",
    status: "Pending Review",
  },
  {
    id: 3,
    reportType: "Docking",
    equipment: "Entire Vessel",
    performedBy: "DryDock Facilities",
    date: "2024-12-05",
    approvedBy: "Captain Lee",
    status: "Completed",
  },
  {
    id: 4,
    reportType: "Service",
    equipment: "Navigation Radar",
    performedBy: "Nav Solutions",
    date: "2025-01-10",
    approvedBy: "Captain Smith",
    status: "Completed",
  },
  {
    id: 5,
    reportType: "Inspection",
    equipment: "Safety Equipment",
    performedBy: "MarineSafe Co",
    date: "2025-03-01",
    approvedBy: "Captain Smith",
    status: "Scheduled",
  },
];

export default function MaintenancePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Maintenance Reports
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Bright Horizon - Service, Survey, and Docking Reports
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
          Create New Report
        </button>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Report Type
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Types</option>
              <option value="service">Service</option>
              <option value="survey">Survey</option>
              <option value="docking">Docking</option>
              <option value="inspection">Inspection</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending Review</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Date Range
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Time</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Maintenance Reports Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={maintenanceReports}
          columns={[
            { header: "Report Type", accessor: "reportType" },
            { header: "Equipment", accessor: "equipment" },
            { header: "Performed By", accessor: "performedBy" },
            { header: "Date", accessor: "date" },
            { header: "Approved By", accessor: "approvedBy" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Completed:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  "Pending Review":
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
                  Scheduled:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
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
          ]}
          actions={(_item) => (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                View
              </button>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Download PDF
              </button>
              {_item.status === "Pending Review" && (
                <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                  Approve
                </button>
              )}
            </div>
          )}
        />
      </div>

      {/* Maintenance Schedule */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Upcoming Maintenance
        </h2>

        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Engine Room Inspection
            </h3>
            <p className="text-sm text-card-text">
              Scheduled for: April 10, 2025
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Marine Tech Ltd
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Safety Equipment Check
            </h3>
            <p className="text-sm text-card-text">
              Scheduled for: April 15, 2025
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MarineSafe Co
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Annual Hull Survey
            </h3>
            <p className="text-sm text-card-text">
              Scheduled for: May 05, 2025
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Ocean Inspect Co
            </p>
          </div>
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
