export type ReportItem = {
  id: number;
  title: string;
  category:
    | "Sales"
    | "Product"
    | "Category"
    | "Customer"
    | "Delivery"
    | "Tax";
  value: string;
  description?: string;
};

export const reportsData: ReportItem[] = [
  {
    id: 1,
    title: "Total Sales",
    category: "Sales",
    value: "₹1,25,000",
    description: "Overall revenue generated this month",
  },
  {
    id: 2,
    title: "Today Sales",
    category: "Sales",
    value: "₹8,500",
    description: "Sales generated today",
  },
  {
    id: 3,
    title: "Products Sold",
    category: "Product",
    value: "320 Items",
    description: "Total products sold across all categories",
  },
  {
    id: 4,
    title: "Top Selling Product",
    category: "Product",
    value: "Samsung Earbuds",
    description: "Highest revenue product",
  },
  {
    id: 5,
    title: "Category Revenue",
    category: "Category",
    value: "₹78,000",
    description: "Revenue grouped by category",
  },
  {
    id: 6,
    title: "Most Profitable Category",
    category: "Category",
    value: "Electronics",
    description: "Highest earning category",
  },
  {
    id: 7,
    title: "Active Customers",
    category: "Customer",
    value: "1,250",
    description: "Customers who placed orders recently",
  },
  {
    id: 8,
    title: "New Customers",
    category: "Customer",
    value: "85",
    description: "New registrations this month",
  },
  {
    id: 9,
    title: "Deliveries Completed",
    category: "Delivery",
    value: "890",
    description: "Successfully delivered orders",
  },
  {
    id: 10,
    title: "Pending Deliveries",
    category: "Delivery",
    value: "42",
    description: "Orders yet to be delivered",
  },
  {
    id: 11,
    title: "Tax Collected",
    category: "Tax",
    value: "₹18,500",
    description: "Total GST collected",
  },
  {
    id: 12,
    title: "Pending Tax",
    category: "Tax",
    value: "₹2,300",
    description: "Unpaid tax amount",
  },
];