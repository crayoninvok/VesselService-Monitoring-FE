"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";
import { UserRole } from "@/types";

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
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const router = useRouter();

  // Initialize authentication state from localStorage
  useEffect(() => {
    const initAuth = () => {
      const { token, user } = AuthService.getAuthData();

      if (token && user) {
        setState({
          user,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
        console.log("Auth state initialized from localStorage");
      }
    };

    initAuth();
  }, []);

  // Super Admin login
  const loginSuperAdmin = useCallback(
    async (email: string, password: string) => {
      console.log("Attempting to login as Super Admin...");
      setState((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await AuthService.loginSuperAdmin(email, password);
        console.log("Login successful:", response);

        // Store authentication data
        AuthService.storeAuthData(response);

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

        // Store authentication data
        AuthService.storeAuthData(response);

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

        // Store authentication data
        AuthService.storeAuthData(response);

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
        setState((prev) => ({ ...prev, isLoading: false }));
        throw error;
      }
    },
    [router]
  );

  // Logout
  const logout = useCallback(() => {
    // Clear authentication data
    AuthService.clearAuthData();

    // Reset authentication state
    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });

    // Redirect to login page
    router.push("/login");
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
