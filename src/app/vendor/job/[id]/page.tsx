// app/vendor/job/[id]/page.tsx
import Link from "next/link";

const jobDetails = {
  id: "1",
  vessel: "Bright Horizon",
  equipment: "Main Engine",
  model: "Wartsila 8L32",
  issue: "Overheating during extended operation",
  description:
    "Engine temperature exceeds normal range after 4 hours of operation. Cooling system appears to be functioning normally, but temperature continues to rise. Captain reports unusual noise from starboard side of engine.",
  status: "Repairing",
  priority: "High",
  startDate: "2025-03-15",
  estimatedCompletion: "2025-03-25",
  location: "Singapore",
  contactPerson: "Captain Smith",
  contactPhone: "+65 9876 5432",
  notes: [
    {
      date: "2025-03-15",
      author: "Captain Smith",
      text: "Issue first noticed during morning operation.",
    },
    {
      date: "2025-03-16",
      author: "Engineer Lee",
      text: "Initial inspection shows possible cooling system blockage.",
    },
    {
      date: "2025-03-20",
      author: "Technician Wong",
      text: "Replaced faulty temperature sensors and flushed cooling system. The main coolant pump appears to be functioning at reduced capacity. Awaiting replacement parts.",
    },
  ],
  photos: [
    {
      id: 1,
      url: "/images/placeholder.jpg",
      caption: "Engine overview",
      uploadedBy: "Technician Wong",
      date: "2025-03-20",
    },
    {
      id: 2,
      url: "/images/placeholder.jpg",
      caption: "Temperature gauge reading",
      uploadedBy: "Technician Wong",
      date: "2025-03-20",
    },
  ],
};

// Status update options based on current status
const statusOptions = [
  "Process",
  "Technician Onboard",
  "Repairing",
  "Waiting for Spareparts",
  "Success",
  "Still Damaged",
];

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const jobId = params.id;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/vendor/job"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ← Back to Jobs
            </Link>
          </div>
          <h1 className="text-2xl libre-baskerville-bold text-foreground mt-1">
            Job #{jobId} Details
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {jobDetails.vessel} - {jobDetails.equipment}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            Upload Photos
          </button>
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white px-4 py-2 rounded-md">
            Submit Service Report
          </button>
        </div>
      </div>

      {/* Status Card */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Current Status
            </h3>
            <div className="mt-1">
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                {jobDetails.status}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Update Status
            </h3>
            <div className="mt-1 flex space-x-2">
              <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 text-foreground">
                {statusOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                    selected={option === jobDetails.status}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <button className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm">
                Update
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Priority
            </h3>
            <div className="mt-1">
              <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-3 py-1 rounded-full text-sm">
                {jobDetails.priority}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Job Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Vessel
            </h3>
            <p className="text-card-text">{jobDetails.vessel}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Location
            </h3>
            <p className="text-card-text">{jobDetails.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Equipment
            </h3>
            <p className="text-card-text">{jobDetails.equipment}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Model
            </h3>
            <p className="text-card-text">{jobDetails.model}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Start Date
            </h3>
            <p className="text-card-text">{jobDetails.startDate}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Est. Completion
            </h3>
            <p className="text-card-text">{jobDetails.estimatedCompletion}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Contact Person
            </h3>
            <p className="text-card-text">{jobDetails.contactPerson}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Contact Phone
            </h3>
            <p className="text-card-text">{jobDetails.contactPhone}</p>
          </div>

          <div className="col-span-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Issue
            </h3>
            <p className="text-card-text">{jobDetails.issue}</p>
          </div>

          <div className="col-span-2">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Description
            </h3>
            <p className="text-card-text">{jobDetails.description}</p>
          </div>
        </div>
      </div>

      {/* Communication Log */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Communication Log
        </h2>

        <div className="space-y-4">
          {jobDetails.notes.map((note, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-card-heading">
                  {note.author}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {note.date}
                </span>
              </div>
              <p className="text-card-text">{note.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Add New Note
          </h3>
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md p-2 h-24 text-foreground"
            placeholder="Type your notes here..."
          ></textarea>
          <div className="mt-2 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
              Add Note
            </button>
          </div>
        </div>
      </div>

      {/* Photo Documentation */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Photo Documentation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobDetails.photos.map((photo) => (
            <div
              key={photo.id}
              className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden"
            >
              <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">
                  Image Placeholder
                </span>
              </div>
              <div className="p-3">
                <p className="font-medium text-card-heading text-sm">
                  {photo.caption}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By: {photo.uploadedBy}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {photo.date}
                </p>
              </div>
            </div>
          ))}

          <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md flex flex-col items-center justify-center p-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 h-40 sm:h-auto">
            <span className="text-2xl mb-2">+</span>
            <span className="text-sm text-center">Upload New Photo</span>
          </div>
        </div>
      </div>

      {/* Required Parts */}
      <div className="bg-card-bg p-5 rounded-lg shadow">
        <h2 className="text-lg libre-baskerville-regular mb-4 text-card-heading">
          Required Parts & Materials
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Part Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Part Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  Coolant Pump
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  W32-CP-5678
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Ordered
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  Gasket Set
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  W32-GS-1234
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  2
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Available
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  Temperature Sensor
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  W32-TS-9012
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  3
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    Available
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-md">
            Add Required Part
          </button>
        </div>
      </div>
    </div>
  );
}
