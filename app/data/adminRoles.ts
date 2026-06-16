export type Role = {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  status: "Active" | "Inactive";
};

export const rolesData: Role[] = [
  {
    id: 1,
    name: "Super Admin",
    description: "Full access to all modules",
    permissions: [
      "Manage Users",
      "Manage Orders",
      "Manage Products",
      "Settings Access",
    ],
    status: "Active",
  },
  {
    id: 2,
    name: "Store Manager",
    description: "Handles store operations",
    permissions: ["Manage Products", "View Orders", "Update Inventory"],
    status: "Active",
  },
  {
    id: 3,
    name: "Inventory Manager",
    description: "Manages stock and inventory",
    permissions: ["Add Stock", "Update Stock", "View Inventory"],
    status: "Active",
  },
  {
    id: 4,
    name: "Delivery Manager",
    description: "Handles delivery operations",
    permissions: ["Assign Deliveries", "Track Orders"],
    status: "Active",
  },
  {
    id: 5,
    name: "Customer Support",
    description: "Handles customer queries",
    permissions: ["View Tickets", "Respond to Customers"],
    status: "Inactive",
  },
];