"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";
import { UserRole } from "@/types";
import Swal from "sweetalert2";

// Define the auth state and user types based on your API response
export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  superAdminId?: string;
  shipAdminId?: string;
  vendorId?: string;
  vesselId?: string;
  companyName?: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

// Create a custom hook for authentication
export function useAuth() {
  // Initialize with isLoading: true to prevent premature redirects
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true, // Start with loading state
  });

  const router = useRouter();

  // Initialize authentication state from localStorage
  useEffect(() => {
    const initAuth = () => {
      try {
        console.log("Initializing auth state from localStorage");
        const { token, user } = AuthService.getAuthData();

        if (token && user) {
          setState({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
          console.log(
            "Auth state initialized successfully with user role:",
            user.role
          );
        } else {
          // Important to set isLoading to false even when no auth data is found
          setState((prev) => ({ ...prev, isLoading: false }));
          console.log("No auth data found in localStorage");
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    };

    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(initAuth, 100);
    return () => clearTimeout(timer);
  }, []);

  // Super Admin login
  const loginSuperAdmin = useCallback(
    async (email: string, password: string) => {
      console.log("Attempting to login as Super Admin...");
      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await AuthService.loginSuperAdmin(email, password);
        console.log("Login successful:", response.user?.name);

        // Auth data is already stored by the AuthService

        // Update authentication state
        setState({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
        });

        // Redirect to admin dashboard
        router.push("/admin");
      } catch (error) {
        console.error("Login failed:", error);
        setState((prev) => ({ ...prev, isLoading: false }));
        throw error;
      }
    },
    [router]
  );

  // Ship Admin login
  const loginShipAdmin = useCallback(
    async (email: string, password: string) => {
      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await AuthService.loginShipAdmin(email, password);
        console.log("Login successful:", response.user?.name);

        // Auth data is already stored by the AuthService

        // Update authentication state
        setState({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
        });

        // Redirect to officer dashboard
        router.push("/officer");
      } catch (error) {
        console.error("Login failed:", error);
        setState((prev) => ({ ...prev, isLoading: false }));
        throw error;
      }
    },
    [router]
  );

  // Vendor login
  const loginVendor = useCallback(
    async (email: string, password: string) => {
      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await AuthService.loginVendor(email, password);
        console.log("Login successful:", response.user?.name);

        // Auth data is already stored by the AuthService

        // Update authentication state
        setState({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
        });

        // Redirect to vendor dashboard
        router.push("/vendor");
      } catch (error) {
        console.error("Login failed:", error);
        setState((prev) => ({ ...prev, isLoading: false }));
        throw error;
      }
    },
    [router]
  );

  // Logout with SweetAlert confirmation
  const logout = useCallback(() => {
    Swal.fire({
      title: "Sign Out?",
      text: "Are you sure you want to sign out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear authentication data
        AuthService.clearAuthData();

        // Reset authentication state
        setState({
          user: null,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        });

        // Show success message
        Swal.fire({
          title: "Signed Out!",
          text: "You have been successfully signed out.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Redirect to login page
        router.push("/login");
      }
    });
  }, [router]);

  return {
    ...state,
    loginSuperAdmin,
    loginShipAdmin,
    loginVendor,
    logout,
  };
}

export default useAuth;
