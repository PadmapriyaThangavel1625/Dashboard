export type PaymentStatus = "Success" | "Failed" | "Refunded";
export type PaymentMethod = "UPI" | "Card" | "Razorpay";

export interface Payment {
  id: number;
  customer: string;
  email: string;
  method: PaymentMethod;
  amount: number;
  status: PaymentStatus;
  transactionId: string;
  date: string;
}

export const paymentsData: Payment[] = [
  {
    id: 1,
    customer: "Arun Kumar",
    email: "arun@gmail.com",
    method: "UPI",
    amount: 499,
    status: "Success",
    transactionId: "UPI123456789",
    date: "2026-06-10",
  },
  {
    id: 2,
    customer: "Priya S",
    email: "priya@gmail.com",
    method: "Card",
    amount: 1299,
    status: "Refunded",
    transactionId: "CARD987654321",
    date: "2026-06-11",
  },
  {
    id: 3,
    customer: "John Doe",
    email: "john@gmail.com",
    method: "Razorpay",
    amount: 799,
    status: "Failed",
    transactionId: "RZP1122334455",
    date: "2026-06-12",
  },
  {
    id: 4,
    customer: "Meena R",
    email: "meena@gmail.com",
    method: "UPI",
    amount: 999,
    status: "Success",
    transactionId: "UPI9988776655",
    date: "2026-06-13",
  },
  {
    id: 5,
    customer: "Karthik",
    email: "karthik@gmail.com",
    method: "Card",
    amount: 1599,
    status: "Success",
    transactionId: "CARD5566778899",
    date: "2026-06-14",
  },
];