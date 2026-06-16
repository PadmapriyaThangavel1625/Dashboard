export interface InventoryItem {
  id: number;
  product: string;
  stock: number;
  batch: string;
  expiry: string;
}

export const inventoryData: InventoryItem[] = [
  {
    id: 1,
    product: "Rice",
    stock: 50,
    batch: "B001",
    expiry: "2026-12-31",
  },
  {
    id: 2,
    product: "Sugar",
    stock: 8,
    batch: "B002",
    expiry: "2026-10-15",
  },
  {
    id: 3,
    product: "Oil",
    stock: 25,
    batch: "B003",
    expiry: "2027-01-10",
  },
];