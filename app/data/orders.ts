export interface Order {
  id: number;
  customerName: string;
  phone: string;
  address: string;
  products: string[];
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: "Paid" | "Unpaid" | "Failed";
  status:
    | "Pending"
    | "Confirmed"
    | "Packed"
    | "Shipped"
    | "Delivered"
    | "Cancelled";
  orderDate: string;
}

export const orders: Order[] = [
  {
    id: 1001,
    customerName: "Rahul Kumar",
    phone: "9876543210",
    address: "Chennai, Tamil Nadu",
    products: ["Rice 5kg", "Milk 1L", "Sugar 1kg"],
    totalAmount: 850,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Pending",
    orderDate: "2026-06-10",
  },
  {
    id: 1002,
    customerName: "Priya Sharma",
    phone: "9876543211",
    address: "Coimbatore, Tamil Nadu",
    products: ["Oil 1L", "Wheat Flour 2kg"],
    totalAmount: 420,
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Unpaid",
    status: "Confirmed",
    orderDate: "2026-06-11",
  },
  {
    id: 1003,
    customerName: "Arun Kumar",
    phone: "9876543212",
    address: "Erode, Tamil Nadu",
    products: ["Eggs 12pcs", "Bread", "Butter"],
    totalAmount: 310,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Packed",
    orderDate: "2026-06-12",
  },
  {
    id: 1004,
    customerName: "Divya",
    phone: "9876543213",
    address: "Salem, Tamil Nadu",
    products: ["Apple 1kg", "Banana 1dozen"],
    totalAmount: 250,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Shipped",
    orderDate: "2026-06-12",
  },
  {
    id: 1005,
    customerName: "Karthik",
    phone: "9876543214",
    address: "Madurai, Tamil Nadu",
    products: ["Tomato 1kg", "Onion 1kg"],
    totalAmount: 180,
    paymentMethod: "Cash On Delivery",
    paymentStatus: "Unpaid",
    status: "Delivered",
    orderDate: "2026-06-13",
  },
  {
    id: 1006,
    customerName: "Meena",
    phone: "9876543215",
    address: "Tiruppur, Tamil Nadu",
    products: ["Milk 2L", "Curd 500ml"],
    totalAmount: 220,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Cancelled",
    orderDate: "2026-06-13",
  },
  {
    id: 1007,
    customerName: "Suresh",
    phone: "9876543216",
    address: "Namakkal, Tamil Nadu",
    products: ["Chicken 1kg", "Eggs 30pcs"],
    totalAmount: 650,
    paymentMethod: "Card",
    paymentStatus: "Paid",
    status: "Pending",
    orderDate: "2026-06-14",
  },
  {
    id: 1008,
    customerName: "Anitha",
    phone: "9876543217",
    address: "Karur, Tamil Nadu",
    products: ["Rice 10kg", "Dal 2kg"],
    totalAmount: 1200,
    paymentMethod: "UPI",
    paymentStatus: "Paid",
    status: "Confirmed",
    orderDate: "2026-06-14",
  },
];