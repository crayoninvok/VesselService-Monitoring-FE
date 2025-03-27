"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { UserRole } from "@/types";

// Loading component when authentication state is being checked
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
  </div>
);

// Error screen for unauthorized access
const UnauthorizedScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-2xl font-bold text-red-600 mb-4">
      Unauthorized Access
    </h1>
    <p className="text-gray-600 mb-6">
      You don&apos;t have permission to access this page.
    </p>
    <button
      onClick={() => (window.location.href = "/login")}
      className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
    >
      Return to Login
    </button>
  </div>
);

/**
 * Higher Order Component to protect routes based on authentication and roles
 * @param Component The component to wrap
 * @param allowedRoles Array of roles allowed to access this component
 * @returns Protected component
 */
export function withAuthGuard<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: UserRole[] = []
) {
  return function ProtectedRoute(props: P) {
    const router = useRouter();
    const { user, isAuthenticated, isLoading } = useAuth();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    // Use useRef to store the allowedRoles to avoid the linter warning
    const rolesRef = useRef(allowedRoles);

    useEffect(() => {
      console.log("Auth guard checking authentication:", {
        isLoading,
        isAuthenticated,
        userRole: user?.role,
      });

      // If still loading auth state, do nothing yet
      if (isLoading) {
        return;
      }

      // If not authenticated, redirect immediately
      if (!isAuthenticated || !user) {
        console.log("Not authenticated, redirecting to login");
        router.push("/login");
        return;
      }

      // If no roles specified or user has required role, mark as authorized
      const roles = rolesRef.current;
      const hasRequiredRole = roles.length === 0 || roles.includes(user.role);

      setIsAuthorized(hasRequiredRole);
      setIsCheckingAuth(false);

      // Log authorization status for debugging
      console.log(
        `User role: ${user.role}, Required roles: ${roles.join(
          ", "
        )}, Authorized: ${hasRequiredRole}`
      );

      // If not authorized (wrong role), no need to redirect - we'll show the unauthorized screen
    }, [isAuthenticated, user, isLoading, router]); // allowedRoles removed from deps array

    // Show loading screen while checking authentication
    if (isLoading || isCheckingAuth) {
      return <LoadingScreen />;
    }

    // Show unauthorized screen if user doesn't have required role
    if (!isAuthorized) {
      return <UnauthorizedScreen />;
    }

    // Render the protected component
    return <Component {...props} />;
  };
}

export default withAuthGuard;
