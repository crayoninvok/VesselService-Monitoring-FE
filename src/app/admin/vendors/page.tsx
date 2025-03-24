// app/admin/vendors/page.tsx
import { DataTable } from "@/components/tables/DataTable";

// Mock vendor data
const vendors = [
  {
    id: 1,
    name: "Marine Tech Ltd",
    expertise: ["Engines & Propulsion", "Electrical Systems"],
    contactPerson: "John Smith",
    email: "john@marinetech.com",
    phone: "+65 9876 5432",
    status: "Active",
    joinDate: "2024-06-15",
    completedJobs: 28,
  },
  {
    id: 2,
    name: "Nav Solutions",
    expertise: ["Navigation Equipment"],
    contactPerson: "Emma Wong",
    email: "emma@navsolutions.com",
    phone: "+60 12 345 6789",
    status: "Active",
    joinDate: "2024-08-20",
    completedJobs: 15,
  },
  {
    id: 3,
    name: "PropFix Inc",
    expertise: ["Propulsion", "Hull Maintenance"],
    contactPerson: "Michael Chan",
    email: "michael@propfix.com",
    phone: "+62 812 3456 7890",
    status: "Active",
    joinDate: "2024-10-05",
    completedJobs: 9,
  },
  {
    id: 4,
    name: "ElectroMarine Systems",
    expertise: ["Electrical Systems", "Navigation Equipment"],
    contactPerson: "Sarah Lee",
    email: "sarah@electromarine.com",
    phone: "+66 84 123 4567",
    status: "Inactive",
    joinDate: "2024-05-12",
    completedJobs: 5,
  },
  {
    id: 5,
    name: "Ocean Safety Equipment",
    expertise: ["Safety Equipment"],
    contactPerson: "David Tan",
    email: "david@oceansafety.com",
    phone: "+65 8765 4321",
    status: "Pending Approval",
    joinDate: "2025-03-18",
    completedJobs: 0,
  },
];

export default function VendorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground">
            Vendor Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage service providers and suppliers
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            Add New Vendor
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-800 text-white px-4 py-2 rounded-md">
            Pending Approvals{" "}
            <span className="ml-1 bg-white text-yellow-500 px-2 py-0.5 rounded-full text-xs">
              1
            </span>
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="bg-card-bg p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Expertise
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground">
              <option value="">All Expertise</option>
              <option value="engines">Engines & Propulsion</option>
              <option value="electrical">Electrical Systems</option>
              <option value="navigation">Navigation Equipment</option>
              <option value="hull">Hull Maintenance</option>
              <option value="safety">Safety Equipment</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Status
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending Approval</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-card-text mb-1">
              Sort By
            </label>
            <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-40 text-foreground">
              <option value="name">Company Name</option>
              <option value="jobs">Completed Jobs</option>
              <option value="date">Join Date</option>
            </select>
          </div>
          <div className="flex-1"></div>
          <div className="self-end">
            <input
              type="text"
              placeholder="Search vendors..."
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 w-48 text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Vendors Table */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <DataTable
          data={vendors}
          columns={[
            { header: "Company Name", accessor: "name" },
            {
              header: "Expertise",
              accessor: "expertise",
              cell: (item) => (
                <div className="flex flex-wrap gap-1">
                  {item.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              ),
            },
            { header: "Contact Person", accessor: "contactPerson" },
            { header: "Email", accessor: "email" },
            {
              header: "Status",
              accessor: "status",
              cell: (item) => {
                const statusColors: Record<string, string> = {
                  Active:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
                  Inactive:
                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                  "Pending Approval":
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
            {
              header: "Completed Jobs",
              accessor: "completedJobs",
              cell: (item) => (
                <span className="font-medium text-card-text">
                  {item.completedJobs}
                </span>
              ),
            },
          ]}
          actions={(item) => (
            <div className="flex space-x-2">
              <a
                href={`/admin/vendors/${item.id}`}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View
              </a>
              <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                Edit
              </button>
              {item.status === "Pending Approval" ? (
                <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300">
                  Approve
                </button>
              ) : (
                <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                  {item.status === "Active" ? "Deactivate" : "Activate"}
                </button>
              )}
            </div>
          )}
        />
      </div>

      {/* Vendor Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card-bg p-5 rounded-lg shadow">
          <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
            Vendor Statistics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-card-text">Total Vendors</span>
              <span className="font-semibold text-card-heading">
                {vendors.length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Active Vendors</span>
              <span className="font-semibold text-card-heading">
                {vendors.filter((v) => v.status === "Active").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Pending Approvals</span>
              <span className="font-semibold text-card-heading">
                {vendors.filter((v) => v.status === "Pending Approval").length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Total Completed Jobs</span>
              <span className="font-semibold text-card-heading">
                {vendors.reduce((sum, v) => sum + v.completedJobs, 0)}
              </span>
            </div>
            <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
            <div className="flex justify-between items-center">
              <span className="text-card-text">Avg. Jobs per Vendor</span>
              <span className="font-semibold text-card-heading">
                {Math.round(
                  vendors.reduce((sum, v) => sum + v.completedJobs, 0) /
                    vendors.filter((v) => v.status === "Active").length
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-card-bg p-5 rounded-lg shadow">
          <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
            Top Performing Vendors
          </h2>
          <div className="space-y-3">
            {[...vendors]
              .sort((a, b) => b.completedJobs - a.completedJobs)
              .slice(0, 5)
              .map((vendor) => (
                <div
                  key={vendor.id}
                  className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded"
                >
                  <div>
                    <span className="font-medium text-card-heading">
                      {vendor.name}
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {vendor.contactPerson}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-card-text font-semibold mr-2">
                      {vendor.completedJobs}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      jobs
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
              View All Vendors →
            </button>
          </div>
        </div>
      </div>

      {/* Recent Vendor Activity */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Recent Vendor Activity
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Marine Tech Ltd
            </h3>
            <p className="text-sm text-card-text">
              Completed repair of Main Engine on Bright Horizon
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              March 20, 2025
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Nav Solutions
            </h3>
            <p className="text-sm text-card-text">
              Started repair of Navigation System on Crystal Sea
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              March 18, 2025
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              Ocean Safety Equipment
            </h3>
            <p className="text-sm text-card-text">
              New vendor registration pending approval
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              March 18, 2025
            </p>
          </div>

          <div className="border-l-4 border-gray-500 pl-4 py-2">
            <h3 className="text-md font-semibold text-card-heading">
              PropFix Inc
            </h3>
            <p className="text-sm text-card-text">
              Updated contact information
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              March 16, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
