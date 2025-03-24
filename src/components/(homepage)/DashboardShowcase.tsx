"use client";

import { useState } from "react";
import DashboardTab from "./DashboardTab";

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState("superAdmin");

  const dashboardTabs = [
    {
      id: "superAdmin",
      title: "Super Admin",
      heading: "Superintendant / Ship Owner Dashboard",
      description:
        "Full control over your fleet management with comprehensive tools for vessel information, maintenance reports, and vendor oversight.",
      features: [
        "Manage vessel information and documentation",
        "Track maintenance, service, and docking reports",
        "Monitor equipment status and repair progress",
        "Create and manage vendor accounts",
      ],
      imagePath: "/super-admin-dashboard.png",
      imageAlt: "Super Admin Dashboard",
    },
    {
      id: "shipAdmin",
      title: "Ship Admin",
      heading: "Ship Officer Dashboard",
      description:
        "Dedicated tools for ship officers to manage day-to-day maintenance and equipment status updates.",
      features: [
        "Add and update vessel maintenance reports",
        "Monitor and update equipment status",
        "Track vessel repair status",
        "Access vessel documentation",
      ],
      imagePath: "/ship-admin-dashboard.png",
      imageAlt: "Ship Admin Dashboard",
    },
    {
      id: "vendor",
      title: "Vendor",
      heading: "Vendor Dashboard",
      description:
        "Streamlined interface for vendors to manage jobs, document repairs, and communicate with ship owners.",
      features: [
        "Manage assigned repair jobs",
        "Update job status from process to completion",
        "Upload service reports and documentation",
        "Access vessel information for assigned jobs",
      ],
      imagePath: "/vendor-dashboard.png",
      imageAlt: "Vendor Dashboard",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="features-heading font-libre text-3xl font-bold text-center mb-8">
          Powerful Role-Based Dashboards
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          VessM provides tailored dashboards for each user role, ensuring
          everyone has access to exactly what they need.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {dashboardTabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 font-medium ${
                  activeTab === tab.id
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-b-2 border-blue-700 dark:border-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {dashboardTabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <DashboardTab
                    key={tab.id}
                    heading={tab.heading}
                    description={tab.description}
                    features={tab.features}
                    imagePath={tab.imagePath}
                    imageAlt={tab.imageAlt}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
