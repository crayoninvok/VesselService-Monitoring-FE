"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  links: SidebarLink[];
  userRole: "admin" | "ship" | "vendor";
};

export function Sidebar({ links, userRole }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 dark:bg-gray-900">
      <div className="mb-8">
        <h1 className="text-2xl libre-baskerville-bold">VessM</h1>
        <p className="text-sm text-gray-300 capitalize">{userRole} Dashboard</p>
      </div>

      <nav>
        <ul className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href}>
                  <div
                    className={`flex items-center p-2 rounded-md ${
                      isActive
                        ? "bg-blue-700 dark:bg-blue-800"
                        : "hover:bg-gray-700 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="mr-3">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
