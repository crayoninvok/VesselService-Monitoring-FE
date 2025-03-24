// app/admin/maintenance/page.tsx
"use client";

import { useState } from "react";

// Types for Maintenance Report
interface MaintenanceReport {
  id: string;
  vesselId: string;
  date: string;
  type: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
}

export default function MaintenancePage() {
  // Mock data - in a real app, this would come from an API
  const [reports, setReports] = useState<MaintenanceReport[]>([
    {
      id: "1",
      vesselId: "V001",
      date: "2024-03-15",
      type: "Routine Inspection",
      description: "General hull and machinery check",
      status: "Completed",
    },
    {
      id: "2",
      vesselId: "V002",
      date: "2024-03-20",
      type: "Repair",
      description: "Engine room pump replacement",
      status: "In Progress",
    },
    {
      id: "3",
      vesselId: "V003",
      date: "2024-03-25",
      type: "Preventive Maintenance",
      description: "Electrical system check",
      status: "Pending",
    },
  ]);

  // State for new maintenance report
  const [newReport, setNewReport] = useState<Omit<MaintenanceReport, "id">>({
    vesselId: "",
    date: "",
    type: "",
    description: "",
    status: "Pending",
  });

  // Handler to add a new maintenance report
  const handleAddReport = () => {
    if (!newReport.vesselId || !newReport.date || !newReport.type) {
      alert("Please fill in all required fields");
      return;
    }

    const reportToAdd = {
      ...newReport,
      id: (reports.length + 1).toString(),
    };

    setReports([...reports, reportToAdd]);

    // Reset the new report form
    setNewReport({
      vesselId: "",
      date: "",
      type: "",
      description: "",
      status: "Pending",
    });
  };

  // Handler to update report status
  const updateReportStatus = (
    id: string,
    newStatus: MaintenanceReport["status"]
  ) => {
    setReports(
      reports.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

  return (
    <div className="maintenance-page">
      <h1>Maintenance Reports</h1>

      {/* New Report Form */}
      <div className="new-report-form">
        <h2>Add New Maintenance Report</h2>
        <div>
          <label>Vessel ID:</label>
          <input
            type="text"
            value={newReport.vesselId}
            onChange={(e) =>
              setNewReport({ ...newReport, vesselId: e.target.value })
            }
            placeholder="Enter Vessel ID"
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={newReport.date}
            onChange={(e) =>
              setNewReport({ ...newReport, date: e.target.value })
            }
          />
        </div>
        <div>
          <label>Type:</label>
          <select
            value={newReport.type}
            onChange={(e) =>
              setNewReport({ ...newReport, type: e.target.value })
            }
          >
            <option value="">Select Type</option>
            <option value="Routine Inspection">Routine Inspection</option>
            <option value="Repair">Repair</option>
            <option value="Preventive Maintenance">
              Preventive Maintenance
            </option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={newReport.description}
            onChange={(e) =>
              setNewReport({ ...newReport, description: e.target.value })
            }
            placeholder="Enter maintenance description"
          />
        </div>
        <button onClick={handleAddReport}>Add Report</button>
      </div>

      {/* Maintenance Reports List */}
      <div className="maintenance-reports">
        <h2>Current Maintenance Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Vessel ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.vesselId}</td>
                <td>{report.date}</td>
                <td>{report.type}</td>
                <td>{report.description}</td>
                <td>{report.status}</td>
                <td>
                  <select
                    value={report.status}
                    onChange={(e) =>
                      updateReportStatus(
                        report.id,
                        e.target.value as MaintenanceReport["status"]
                      )
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
