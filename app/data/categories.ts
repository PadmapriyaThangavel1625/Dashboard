export interface Category {
  id: number;
  name: string;
  image: string;
  status: string;
}

export const categoryData: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    image: "https://via.placeholder.com/300x200",
    status: "Active",
  },
  {
    id: 2,
    name: "Fruits",
    image: "https://via.placeholder.com/300x200",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Dairy",
    image: "https://via.placeholder.com/300x200",
    status: "Active",
  },
];