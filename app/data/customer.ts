export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  points: number;
  status: "Active" | "Blocked";
  joined: string;
  address: string;
}

export const customers: Customer[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    orders: 24,
    points: 450,
    status: "Active",
    joined: "12 Jan 2025",
    address: "Chennai",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "+91 9876543211",
    orders: 15,
    points: 220,
    status: "Active",
    joined: "20 Feb 2025",
    address: "Coimbatore",
  },
  {
    id: 3,
    name: "Arun Kumar",
    email: "arun@gmail.com",
    phone: "+91 9876543212",
    orders: 8,
    points: 100,
    status: "Blocked",
    joined: "15 Mar 2025",
    address: "Erode",
  },
  {
    id: 4,
    name: "Kavya",
    email: "kavya@gmail.com",
    phone: "+91 9876543213",
    orders: 30,
    points: 700,
    status: "Active",
    joined: "10 Apr 2025",
    address: "Salem",
  },
  {
    id: 5,
    name: "Vignesh",
    email: "vignesh@gmail.com",
    phone: "+91 9876543214",
    orders: 12,
    points: 180,
    status: "Active",
    joined: "02 May 2025",
    address: "Madurai",
  },
];