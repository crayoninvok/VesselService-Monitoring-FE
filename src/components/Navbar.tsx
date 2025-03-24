"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="https://res.cloudinary.com/dcf4czeat/image/upload/v1742806425/virtual_1_maagcr.png"
                alt="VessM Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
              <span className="ml-3 font-libre text-xl font-bold text-blue-900">
                VessM
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-libre text-gray-700 hover:text-blue-900 px-3 py-2 text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-libre text-gray-700 hover:text-blue-900 px-3 py-2 text-sm"
            >
              About
            </Link>
            <Link
              href="/features"
              className="font-libre text-gray-700 hover:text-blue-900 px-3 py-2 text-sm"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="font-libre text-gray-700 hover:text-blue-900 px-3 py-2 text-sm"
            >
              Contact
            </Link>
            <div className="flex space-x-3">
              <Link
                href="/register/"
                className="font-libre bg-blue-100 text-blue-900 hover:bg-blue-200 px-3 py-2 rounded-md text-sm transition duration-300"
              >
                Register
              </Link>
              <Link
                href="/vendor-login"
                className="font-libre bg-blue-800 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="font-libre text-gray-700 hover:text-blue-900 block px-3 py-2 text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-libre text-gray-700 hover:text-blue-900 block px-3 py-2 text-base"
            >
              About
            </Link>
            <Link
              href="/features"
              className="font-libre text-gray-700 hover:text-blue-900 block px-3 py-2 text-base"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="font-libre text-gray-700 hover:text-blue-900 block px-3 py-2 text-base"
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                href="/register/vendor"
                className="font-libre bg-blue-100 text-blue-900 hover:bg-blue-200 block w-full text-center px-3 py-2 rounded-md text-base mb-2"
              >
                Register as Vendor
              </Link>
              <Link
                href="/login"
                className="font-libre bg-blue-800 text-white hover:bg-blue-700 block w-full text-center px-3 py-2 rounded-md text-base"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
