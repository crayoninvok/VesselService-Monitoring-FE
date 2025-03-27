// services/auth.service.ts
import { LoginResponse, RegisterVendorRequest, UserRole } from "@/types";

// Use environment variable with fallback for API URL
const API_URL = process.env.NEXT_PUBLIC_BASE_URL_BE || "http://localhost:8000/api";

console.log("Auth Service initialized with API_URL:", API_URL);

/**
 * AuthService handles all authentication related API calls
 */
export class AuthService {
  /**
   * Login as a Super Admin (Ship Owner)
   */
  static async loginSuperAdmin(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const url = `${API_URL}/auth/login/super-admin`;
    console.log("Sending login request to:", url);

    try {
      // Use window.fetch to ensure it's the browser's native fetch
      const response = await window.fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors", // Explicitly set CORS mode
      });

      console.log("Login response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      console.log("Login successful!");

      // Store the auth data
      this.storeAuthData(data);

      return data;
    } catch (error) {
      console.error("Login request error:", error);
      throw error;
    }
  }

  /**
   * Login as a Ship Admin (Officer)
   */
  static async loginShipAdmin(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const url = `${API_URL}/auth/login/ship-admin`;
    console.log("Sending request to:", url);

    try {
      const response = await window.fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      this.storeAuthData(data);
      return data;
    } catch (error) {
      console.error("Login request error:", error);
      throw error;
    }
  }

  /**
   * Login as a Vendor
   */
  static async loginVendor(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const url = `${API_URL}/auth/login/vendor`;
    console.log("Sending request to:", url);

    try {
      const response = await window.fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const data = await response.json();
      this.storeAuthData(data);
      return data;
    } catch (error) {
      console.error("Login request error:", error);
      throw error;
    }
  }

  /**
   * Register a new vendor
   */
  static async registerVendor(
    vendorData: RegisterVendorRequest
  ): Promise<{ message: string; userId: string }> {
    const url = `${API_URL}/auth/register/vendor`;
    console.log("Sending request to:", url);

    try {
      const response = await window.fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vendorData),
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register");
      }

      return await response.json();
    } catch (error) {
      console.error("Register request error:", error);
      throw error;
    }
  }

  /**
   * Verify email with token
   */
  static async verifyEmail(token: string): Promise<{ message: string }> {
    const url = `${API_URL}/auth/verify-email/${token}`;
    console.log("Sending request to:", url);

    try {
      const response = await window.fetch(url, {
        method: "GET",
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to verify email");
      }

      return await response.json();
    } catch (error) {
      console.error("Verify email request error:", error);
      throw error;
    }
  }

  /**
   * Verify if token is valid
   */
  static async verifyToken(
    token: string
  ): Promise<{ message: string; user: LoginResponse["user"] }> {
    const url = `${API_URL}/auth/verify-token`;
    console.log("Sending request to:", url);

    try {
      const response = await window.fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid token");
      }

      return await response.json();
    } catch (error) {
      console.error("Verify token request error:", error);
      throw error;
    }
  }

  /**
   * Store authentication data in localStorage
   */
  static storeAuthData(data: LoginResponse): void {
    try {
      console.log("Storing auth data in localStorage");

      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Auth data stored successfully");
      }
    } catch (error) {
      console.error("Error storing auth data:", error);
    }
  }

  /**
   * Get authentication data from localStorage
   */
  static getAuthData(): {
    token: string | null;
    user: LoginResponse["user"] | null;
  } {
    try {
      if (typeof window === "undefined") {
        return { token: null, user: null };
      }

      const token = localStorage.getItem("token");
      const userJson = localStorage.getItem("user");
      const user = userJson ? JSON.parse(userJson) : null;

      return { token, user };
    } catch (error) {
      console.error("Error getting auth data:", error);
      return { token: null, user: null };
    }
  }

  /**
   * Clear authentication data from localStorage
   */
  static clearAuthData(): void {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log("Auth data cleared");
      }
    } catch (error) {
      console.error("Error clearing auth data:", error);
    }
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    const { token } = this.getAuthData();
    return !!token;
  }

  /**
   * Get redirect path based on user role
   */
  static getRedirectPath(role: UserRole): string {
    switch (role) {
      case UserRole.SUPER_ADMIN:
        return "/admin";
      case UserRole.SHIP_ADMIN:
        return "/officer";
      case UserRole.VENDOR:
        return "/vendor";
      default:
        return "/login";
    }
  }
}

export default AuthService;
