"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LogOut, Settings, HelpCircle } from "lucide-react";
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
    admin: "Admin Dashboard",
    ship: "Officer Dashboard",
    vendor: "Vendor Dashboard",
  };

  // Simply call the onLogout function which now uses SweetAlert internally
  const handleLogout = () => {
    onLogout();
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar - using h-full instead of fixed positioning */}
      <aside
        className={`h-full bg-blue-900 text-white overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform lg:static z-40 w-full`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 flex items-center justify-between border-b border-blue-800/40">
            <div>
              <h2 className="text-xl font-medium tracking-tight">VessM</h2>
              <p className="text-xs font-light text-blue-200 mt-0.5">
                {roleTitle[userRole]}
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
          <nav className="flex-grow py-4 px-2">
            <div className="px-3 mb-2">
              <p className="text-xs tracking-wider font-medium text-blue-300/80 uppercase">
                Navigation
              </p>
            </div>
            <ul className="space-y-0.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === link.href
                        ? "bg-blue-800 text-white font-medium"
                        : "text-blue-100 hover:bg-blue-800/50 font-normal"
                    }`}
                  >
                    <span className="mr-3 opacity-80">{link.icon}</span>
                    <span className="tracking-wide">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Account section */}
          <div className="px-5 py-2">
            <p className="text-xs tracking-wider font-medium text-blue-300/80 uppercase mb-2">
              Account
            </p>
            <ul className="space-y-0.5">
              <li>
                <Link
                  href="/profile/settings"
                  className="flex items-center px-3 py-2 text-sm rounded-md text-blue-100 hover:bg-blue-800/50 transition-colors"
                >
                  <Settings className="w-4 h-4 mr-3 opacity-80" />
                  <span className="tracking-wide">Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/help-support"
                  className="flex items-center px-3 py-2 text-sm rounded-md text-blue-100 hover:bg-blue-800/50 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 mr-3 opacity-80" />
                  <span className="tracking-wide">Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar footer with Sign Out button */}
          <div className="p-4 mt-auto border-t border-blue-800/40">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center px-3 py-2 text-sm w-full rounded-md transition-all duration-200 font-medium bg-blue-800 hover:bg-blue-700/90 text-blue-50"
            >
              <LogOut className="w-4 h-4 mr-2 opacity-90" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
