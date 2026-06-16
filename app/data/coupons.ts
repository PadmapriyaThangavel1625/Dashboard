export interface Coupon {
  id: number;
  code: string;
  type: "Percentage" | "Flat" | "BOGO" | "Referral";
  discount: number;
  expiry: string;
  status: "Active" | "Expired";
}

export const coupons: Coupon[] = [
  {
    id: 1,
    code: "SAVE20",
    type: "Percentage",
    discount: 20,
    expiry: "2026-12-31",
    status: "Active",
  },
  {
    id: 2,
    code: "FLAT100",
    type: "Flat",
    discount: 100,
    expiry: "2026-10-15",
    status: "Active",
  },
  {
    id: 3,
    code: "BOGO50",
    type: "BOGO",
    discount: 50,
    expiry: "2026-08-20",
    status: "Active",
  },
  {
    id: 4,
    code: "REFER25",
    type: "Referral",
    discount: 25,
    expiry: "2026-09-30",
    status: "Active",
  },
];