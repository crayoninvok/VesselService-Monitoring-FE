"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LogOut } from "lucide-react";
import { ReactNode } from "react";

interface SidebarProps {
  links: Array<{
    label: string;
    href: string;
    icon: ReactNode;
  }>;
  userRole: "admin" | "ship" | "vendor";
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function Sidebar({
  links,
  userRole,
  isOpen,
  onClose,
  onLogout,
}: SidebarProps) {
  const pathname = usePathname();

  // Role-specific titles
  const roleTitle = {
    admin: "Super Admin",
    ship: "Ship Officer",
    vendor: "Service Vendor",
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 w-64 h-screen transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 bg-blue-900 text-white lg:static lg:z-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold libre-baskerville-bold">
                VessM
              </h2>
              <p className="text-xs text-blue-200">
                {roleTitle[userRole]} Panel
              </p>
            </div>
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-grow mt-5 px-2">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                      pathname === link.href
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800"
                    }`}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-blue-800">
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm w-full rounded-md bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
