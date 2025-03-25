"use client";

import { useState } from "react";
import { Menu, Bell, User, LogOut, Settings } from "lucide-react";

interface HeaderProps {
  userName: string;
  onMenuClick: () => void;
  onLogout: () => void;
}

export function Header({ userName, onMenuClick, onLogout }: HeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 dark:text-gray-300 mr-4"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <Bell className="w-5 h-5" />
          </button>

          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="hidden md:block">{userName}</span>
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </button>
                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                <button
                  onClick={onLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
