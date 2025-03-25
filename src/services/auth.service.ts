// services/auth.service.ts
import { LoginResponse, RegisterVendorRequest, UserRole } from "@/types";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL_BE;

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
    console.log("API URL being used:", API_URL);
    const response = await fetch(`${API_URL}/auth/login/super-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    const data = await response.json();
    return data;
  }

  /**
   * Login as a Ship Admin (Officer)
   */
  static async loginShipAdmin(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login/ship-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    return await response.json();
  }

  /**
   * Login as a Vendor
   */
  static async loginVendor(
    email: string,
    password: string
  ): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login/vendor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    return await response.json();
  }

  /**
   * Register a new vendor
   */
  static async registerVendor(
    vendorData: RegisterVendorRequest
  ): Promise<{ message: string; userId: string }> {
    const response = await fetch(`${API_URL}/auth/register/vendor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to register");
    }

    return await response.json();
  }

  /**
   * Verify email with token
   */
  static async verifyEmail(token: string): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/auth/verify-email/${token}`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to verify email");
    }

    return await response.json();
  }

  /**
   * Verify if token is valid
   */
  static async verifyToken(
    token: string
  ): Promise<{ message: string; user: LoginResponse["user"] }> {
    const response = await fetch(`${API_URL}/auth/verify-token`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Invalid token");
    }

    return await response.json();
  }

  /**
   * Store authentication data in localStorage
   */
  static storeAuthData(data: LoginResponse): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log("Auth data stored in localStorage");
    }
  }

  /**
   * Get authentication data from localStorage
   */
  static getAuthData(): {
    token: string | null;
    user: LoginResponse["user"] | null;
  } {
    if (typeof window === "undefined") {
      return { token: null, user: null };
    }

    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");

    return {
      token,
      user: userJson ? JSON.parse(userJson) : null,
    };
  }

  /**
   * Clear authentication data from localStorage
   */
  static clearAuthData(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
