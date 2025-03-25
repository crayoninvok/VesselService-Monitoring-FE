import Link from "next/link";
import { Sailboat, Anchor, Wrench } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white libre-baskerville-bold mb-2">
            VessM
          </h1>
          <p className="text-blue-100">Vessel Management System</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center libre-baskerville-regular">
            Select your login type
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Ship Owner */}
            <Link href="/login/owner-login" className="block">
              <div className="border border-gray-200 hover:border-blue-500 rounded-lg p-6 text-center transition-all hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <Sailboat size={48} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ship Owner
                </h3>
                <p className="text-gray-600 text-sm">
                  Fleet management and vessel oversight
                </p>
              </div>
            </Link>

            {/* Ship Officer */}
            <Link href="/login/officer-login" className="block">
              <div className="border border-gray-200 hover:border-blue-500 rounded-lg p-6 text-center transition-all hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <Anchor size={48} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ship Officer
                </h3>
                <p className="text-gray-600 text-sm">
                  Vessel operations and maintenance reports
                </p>
              </div>
            </Link>

            {/* Vendor */}
            <Link href="/login/vendor-login" className="block">
              <div className="border border-gray-200 hover:border-blue-500 rounded-lg p-6 text-center transition-all hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <Wrench size={48} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Vendor
                </h3>
                <p className="text-gray-600 text-sm">
                  Service providers and repair management
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register/vendor-register"
                className="text-blue-600 hover:text-blue-800"
              >
                Register as a vendor
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
