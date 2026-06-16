export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  
  weight: string;
  price: number;
  discount: number;
  stock: number;
  status: "Active" | "Inactive";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Tomato",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300",
   
    weight: "1000g",
    price: 50,
    discount: 10,
    stock: 100,
    status: "Active",
  },
  {
    id: 2,
    name: "Potato",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300",
   
    weight: "1000g",
    price: 40,
    discount: 5,
    stock: 80,
    status: "Active",
  },
  {
    id: 3,
    name: "Onion",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?w=300",
   
    weight: "1000g",
    price: 45,
    discount: 8,
    stock: 70,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Carrot",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1447175008436-170170753d52?w=300",
    
    weight: "1000g",
    price: 60,
    discount: 12,
    stock: 90,
    status: "Active",
  },
  {
    id: 5,
    name: "Apple",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300",
    
    weight: "1000g",
    price: 180,
    discount: 15,
    stock: 50,
    status: "Active",
  },
  {
    id: 6,
    name: "Banana",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300",
    
    weight: "1 Dozen",
    price: 70,
    discount: 5,
    stock: 120,
    status: "Active",
  },
  {
    id: 7,
    name: "Orange",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=300",
    
    weight: "1000g",
    price: 120,
    discount: 10,
    stock: 65,
    status: "Active",
  },
  {
    id: 8,
    name: "Milk",
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300",
    
    weight: "500g",
    price: 35,
    discount: 0,
    stock: 200,
    status: "Active",
  },
  {
    id: 9,
    name: "Curd",
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300",
    
    weight: "500g",
    price: 45,
    discount: 5,
    stock: 110,
    status: "Active",
  },
  {
    id: 10,
    name: "Bread",
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300",
    
    weight: "400g",
    price: 40,
    discount: 5,
    stock: 95,
    status: "Inactive",
  },
];