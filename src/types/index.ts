// types/index.ts
export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  SHIP_ADMIN = "SHIP_ADMIN",
  VENDOR = "VENDOR",
}

export enum EquipmentStatus {
  NORMAL = "NORMAL",
  DAMAGED = "DAMAGED",
  MUST_REPAIR = "MUST_REPAIR",
}

export enum RepairStatus {
  WAITING_VENDOR = "WAITING_VENDOR",
  PROCESS = "PROCESS",
  TECHNICIAN_ON_BOARD = "TECHNICIAN_ON_BOARD",
  REPAIRING = "REPAIRING",
  SUCCESS = "SUCCESS",
  STILL_DAMAGED = "STILL_DAMAGED",
  WAITING_SPAREPARTS = "WAITING_SPAREPARTS",
  CANCELLED = "CANCELLED",
}

export enum DocumentType {
  CERTIFICATE = "CERTIFICATE",
  MANUAL = "MANUAL",
  DRAWING = "DRAWING",
  REPORT = "REPORT",
  OTHER = "OTHER",
}

export enum MaintenanceReportType {
  SERVICE = "SERVICE",
  SURVEY = "SURVEY",
  DOCKING = "DOCKING",
  INSPECTION = "INSPECTION",
  OTHER = "OTHER",
}

export enum NotificationType {
  JOB_ASSIGNED = "JOB_ASSIGNED",
  STATUS_CHANGED = "STATUS_CHANGED",
  DOCUMENT_UPLOADED = "DOCUMENT_UPLOADED",
  APPROVAL_NEEDED = "APPROVAL_NEEDED",
  GENERAL = "GENERAL",
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
}

export interface SuperAdmin {
  id: string;
  userId: string;
  companyName: string;
  position?: string;
  user?: User;
}

export interface ShipAdmin {
  id: string;
  userId: string;
  vesselId: string;
  position: string;
  user?: User;
  vessel?: Vessel;
}

export interface Vendor {
  id: string;
  userId: string;
  companyName: string;
  personInCharge: string;
  expertise: string[];
  isVerified: boolean;
  isApproved: boolean;
  approvedById?: string;
  user?: User;
  approvedBy?: SuperAdmin;
}

// Vessel and Equipment Types
export interface Vessel {
  id: string;
  name: string;
  imo: string;
  type: string;
  flag: string;
  buildYear: number;
  grossTonnage?: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner?: SuperAdmin;
}

export interface Equipment {
  id: string;
  vesselId: string;
  name: string;
  category: string;
  manufacturer?: string;
  model?: string;
  serialNumber?: string;
  installationDate?: string;
  status: EquipmentStatus;
  lastInspectionDate?: string;
  nextInspectionDate?: string;
  vessel?: Vessel;
}

// Repair and Maintenance Types
export interface RepairJob {
  id: string;
  equipmentId: string;
  vendorId?: string;
  title: string;
  description: string;
  status: RepairStatus;
  createdAt: string;
  updatedAt: string;
  startDate?: string;
  completionDate?: string;
  equipment?: Equipment;
  vendor?: Vendor;
  statusUpdates?: StatusUpdate[];
  serviceReports?: ServiceReport[];
  jobPhotos?: JobPhoto[];
}

export interface StatusUpdate {
  id: string;
  repairJobId: string;
  status: RepairStatus;
  notes?: string;
  updatedAt: string;
  repairJob?: RepairJob;
}

export interface ServiceReport {
  id: string;
  repairJobId: string;
  reportUrl: string;
  hasCaptainSignature: boolean;
  uploadedAt: string;
  repairJob?: RepairJob;
}

export interface JobPhoto {
  id: string;
  repairJobId: string;
  photoUrl: string;
  description?: string;
  uploadedAt: string;
  repairJob?: RepairJob;
}

export interface MaintenanceReport {
  id: string;
  vesselId: string;
  createdById: string;
  reportType: MaintenanceReportType;
  title: string;
  description: string;
  reportDate: string;
  fileUrl?: string;
  createdAt: string;
  updatedAt: string;
  vessel?: Vessel;
  createdBy?: ShipAdmin;
}

// Document Types
export interface Document {
  id: string;
  vesselId: string;
  title: string;
  documentType: DocumentType;
  fileUrl: string;
  uploadedAt: string;
  expiryDate?: string;
  isValid: boolean;
  vessel?: Vessel;
}

export interface AISData {
  id: string;
  vesselId: string;
  timestamp: string;
  latitude: number;
  longitude: number;
  speed?: number;
  course?: number;
  destination?: string;
  eta?: string;
  vessel?: Vessel;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  relatedJobId?: string;
  createdAt: string;
  user?: User;
}

// Auth Types
export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    vendorId?: string;
    companyName?: string;
    superAdminId?: string;
    shipAdminId?: string;
    vesselId?: string;
    vesselName?: string;
    position?: string;
  };
}

export interface RegisterVendorRequest {
  email: string;
  password: string;
  name: string;
  phone?: string;
  companyName: string;
  personInCharge: string;
  expertise: string[];
}

export interface AuthState {
  user: LoginResponse["user"] | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
