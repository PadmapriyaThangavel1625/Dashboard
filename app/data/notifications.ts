export interface Notification {
  id: number;
  title: string;
  type: "Push" | "SMS" | "Email" | "Promo";
  message: string;
  status: "Sent" | "Pending" | "Failed";
  date: string;
}

export const notificationsData: Notification[] = [
  {
    id: 1,
    title: "Order Update",
    type: "Push",
    message: "Your order has been shipped successfully.",
    status: "Sent",
    date: "2026-06-10",
  },
  {
    id: 2,
    title: "OTP Verification",
    type: "SMS",
    message: "Your OTP code is 123456.",
    status: "Sent",
    date: "2026-06-11",
  },
  {
    id: 3,
    title: "Welcome Email",
    type: "Email",
    message: "Thanks for joining our platform!",
    status: "Pending",
    date: "2026-06-12",
  },
  {
    id: 4,
    title: "Big Sale Offer",
    type: "Promo",
    message: "Flat 50% off on all products this weekend.",
    status: "Sent",
    date: "2026-06-13",
  },
];