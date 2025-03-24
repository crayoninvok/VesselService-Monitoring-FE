"use client";

import { useState } from "react";
import Image from "next/image";

// Define types for our data structure
type RoleKey = "super-admin" | "ship-admin" | "vendor";

interface Capability {
  icon: string;
  title: string;
  description: string;
}

interface RoleFeature {
  title: string;
  description: string;
  capabilities: Capability[];
  image: string;
}

interface FeaturesData {
  "super-admin": RoleFeature;
  "ship-admin": RoleFeature;
  vendor: RoleFeature;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState<RoleKey>("super-admin");

  const features: FeaturesData = {
    "super-admin": {
      title: "Ship Owner / Superintendent",
      description:
        "Comprehensive oversight of your entire fleet with powerful management tools.",
      capabilities: [
        {
          icon: "📊",
          title: "Vessel Information Management",
          description:
            "Manage dynamic AIS data and all vessel documentation in one place.",
        },
        {
          icon: "📝",
          title: "Maintenance Reports",
          description:
            "Track service reports, survey reports, docking reports, and more.",
        },
        {
          icon: "🔧",
          title: "Equipment Status Tracking",
          description:
            "Monitor the condition of all vessel equipment: Normal, Damaged, or Must Repair.",
        },
        {
          icon: "⏱️",
          title: "Repair Status Management",
          description:
            "Oversee the entire repair process from start to finish.",
        },
        {
          icon: "👥",
          title: "Vendor Management",
          description:
            "Create vendor accounts and authorize vendors with complete control.",
        },
      ],
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808630/dashboard-admin_uxg7rm.jpg",
    },
    "ship-admin": {
      title: "Ship Officer",
      description:
        "Streamlined tools for vessel management and maintenance reporting.",
      capabilities: [
        {
          icon: "📋",
          title: "Maintenance Reporting",
          description:
            "Submit and manage vessel maintenance reports directly from the ship.",
        },
        {
          icon: "🚨",
          title: "Equipment Status Updates",
          description:
            "Quickly update equipment status to ensure timely maintenance.",
        },
        {
          icon: "🔄",
          title: "Repair Status Tracking",
          description:
            "Monitor ongoing repairs and provide updates to ship owners.",
        },
        {
          icon: "📱",
          title: "Mobile-Friendly Interface",
          description:
            "Access all features from any device, even with limited connectivity.",
        },
        {
          icon: "📸",
          title: "Photo Documentation",
          description:
            "Upload images to document equipment condition and maintenance needs.",
        },
      ],
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808627/dashboard-ship_rn1iyf.jpg",
    },
    vendor: {
      title: "Vendor / Supplier",
      description:
        "Purpose-built tools to manage service jobs and communicate with vessel operators.",
      capabilities: [
        {
          icon: "📆",
          title: "Job Management Dashboard",
          description:
            "Manage all assigned jobs with real-time status updates.",
        },
        {
          icon: "📲",
          title: "Status Updates",
          description:
            "Provide real-time updates as jobs progress through the service cycle.",
        },
        {
          icon: "📄",
          title: "Service Report Uploads",
          description:
            "Upload completed service reports with captain signatures.",
        },
        {
          icon: "📷",
          title: "Photo Documentation",
          description:
            "Document work with photo uploads for verification and records.",
        },
        {
          icon: "ℹ️",
          title: "Vessel Information Access",
          description:
            "Access relevant vessel information for assigned service jobs.",
        },
      ],
      image:
        "https://res.cloudinary.com/dcf4czeat/image/upload/v1742808634/dashboard-vendor_f4g1qi.jpg",
    },
  };

  const benefits: Benefit[] = [
    {
      icon: "⏱️",
      title: "Reduce Downtime",
      description:
        "Streamlined maintenance processes reduce vessel downtime by up to 35%, keeping your fleet operational.",
    },
    {
      icon: "💰",
      title: "Lower Maintenance Costs",
      description:
        "Preventative maintenance scheduling and vendor coordination helps reduce overall maintenance costs.",
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      description:
        "Comprehensive reporting and analytics to make informed decisions about your fleet maintenance.",
    },
    {
      icon: "🔐",
      title: "Documentation Compliance",
      description:
        "Ensure all vessel documentation is up-to-date and compliant with maritime regulations.",
    },
    {
      icon: "👥",
      title: "Simplified Vendor Management",
      description:
        "Streamline communication and coordination with maintenance vendors and suppliers.",
    },
    {
      icon: "🌐",
      title: "Real-Time Visibility",
      description:
        "Access real-time information about your vessels and maintenance status from anywhere.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-libre text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Maritime Management
            </h1>
            <p className="text-lg opacity-90 mb-8">
              VessM brings together all stakeholders in the maritime maintenance
              ecosystem with role-specific toolsets designed for efficiency and
              coordination.
            </p>
          </div>
        </div>

        {/* Wave separator */}
        <div className="relative h-16 mt-8">
          <svg
            className="absolute bottom-0 w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,170.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Role Tabs Section */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md mb-10">
            <div className="flex flex-wrap border-b">
              {(Object.keys(features) as RoleKey[]).map((role) => (
                <button
                  key={role}
                  className={`px-6 py-3 font-medium text-sm md:text-base transition-colors duration-200 ${
                    activeTab === role
                      ? "border-b-2 border-blue-800 text-blue-800"
                      : "text-gray-600 hover:text-blue-800"
                  }`}
                  onClick={() => setActiveTab(role)}
                >
                  {features[role].title}
                </button>
              ))}
            </div>
            <div className="p-6">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-libre font-bold text-gray-800 mb-3">
                  {features[activeTab].title} Features
                </h2>
                <p className="text-gray-600">
                  {features[activeTab].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  {features[activeTab].capabilities.map(
                    (feature: Capability, index: number) => (
                      <div key={index} className="mb-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="relative h-64 md:h-auto">
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <Image
                      src={features[activeTab].image}
                      alt={`${features[activeTab].title} Dashboard`}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-libre text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefits of Using VessM
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our platform transforms the way you manage vessel maintenance,
                delivering tangible benefits across your entire operation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-(-4px) hover:shadow-lg"
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-libre text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Fleet Maintenance?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join the growing number of maritime companies that trust VessM for
              their maintenance management needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/register/vendor"
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300 text-center"
              >
                Register as Vendor
              </a>
              <a
                href="/login"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300 text-center"
              >
                Login to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
