# VesselService-Monitoring-FE
VessM web app is a service and maintenance monitoring system for vessel equipment.
Ship Service Maintenance Web Application
Name of WebApp : VessM
Features:
    1. There is 3 Role Authorization on this web:
        a. User/ Superintendant / Ship Owner (Super Admin Account)
        b. Ship Officer (Ship Admin Account)
        c. Vendor
    2. User/Superintendant/Ship Owner (Super Admin) Dashboard account can Create ,
    Edit, Delete the :
        a. Vessel Information:
            - Dynamic AIS data
            - Vessel Documentation
        b. Vessel Maintenance Report:
            - Service Report
            - Survey Report
            - Docking Report
            - Etc.
        c. Equipment Status :
            - Normal
            - Damaged
            - Must Repair
        d. Vessel Repair Status:
            - Waiting Vendor
            - Process
            - Technician On Board
            - Repairing
            - Success
            - Still Damaged
            - Waiting for the Spareparts
            - Cancelled
        e. Vendor Account Create or Authorization Vendor :
            - Directly Create Vendor
            - Approve the Vendor when vendor register
    3. Vendor Account Create and request Authorization :
        a. Register for Vendor or Suppliers
            - Vendor must Register 
            – Verify Email -Waiting Admin Approval
            - Vendor must complete the register with Email, Phone Number, Person In-Charge, Name of the Company and Expertise.
    4. Vendor Jobs Dashboard
        a. Dashboard Work Management
            - Vendor must change the enum when job are accepted from the Process to Technician on board
            - Vendor must upload the service report when job done with captain sign inside the pdf file.
            - Vendor can upload the photos documentation in the working vessel to check the proof.
            - Vendor can check the vessel information when the job is assign.
            - Vendor only can change the enum to Technician Onboard, Repairing and Waiting for the Spareparts.
    5. Ship Officer Account (Ship Admin) Dashboard Account
        a. Ship Admin can add the vessel maintenance report
        b. Equipment Status
        c. Vessel Repair Status
    6. UI/UX Design
        a. First on home/landing page shown little company profile
        b. There is 3 login page
            - Super Admin
            - Ship Admin
            - Vendor
        c. There is 1 register page
            - Vendor register
            - Vendor Verify
            - Vendor Forgot Password
        d. There is 3 Dashboard Management Page with different function. From the
        dashboard there is link to creation, edit, delete
            - For Super Admin (Dynamicly)
            - For Ship Admin (Dynamicly)
            - For Vendor (Dynamicly)