export interface DeliveryPartner {
  id: number;
  name: string;
  phone: string;
  vehicle: string;
  image: string;
  status: "Available" | "Busy" | "Offline";
  assignedOrders: number;
  earnings: number;
  rating: number;
}

export const deliveryPartners: DeliveryPartner[] = [
  {
    id: 1,
    name: "Ravi Kumar",
    phone: "9876543210",
    vehicle: "Bike",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    status: "Available",
    assignedOrders: 12,
    earnings: 8500,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Arun Prakash",
    phone: "9876501234",
    vehicle: "Scooter",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    status: "Busy",
    assignedOrders: 8,
    earnings: 6200,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Suresh",
    phone: "9876123456",
    vehicle: "Bike",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    status: "Offline",
    assignedOrders: 5,
    earnings: 4000,
    rating: 4.2,
  },
];