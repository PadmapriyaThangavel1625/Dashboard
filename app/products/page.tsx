
"use client";

import { useState } from "react";
import { products } from "@/app/data/products";
import {
  Search,
  Plus,
  Edit,
  Upload,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

// Defined explicit interface for Type Safety
interface Product {
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

export default function ProductsPage() {
  const [productsData, setProductsData] = useState<Product[]>(products);
  const [search, setSearch] = useState("");
  
  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // New product form state
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    image: "",
    weight: "",
    price: "",
    discount: "",
    stock: "",
    status: "Active",
  });

  // Filtered list logic
  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  // Add Product Handler
  const handleAddProduct = () => {
    if (
      !newProduct.id ||
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.price
    ) {
      alert("Please fill all required fields");
      return;
    }

    const product: Product = {
      id: Number(newProduct.id),
      name: newProduct.name,
      category: newProduct.category,
      image: newProduct.image || "https://via.placeholder.com/100",
      weight: newProduct.weight,
      price: Number(newProduct.price),
      discount: Number(newProduct.discount || 0),
      stock: Number(newProduct.stock || 0),
      status: newProduct.status as "Active" | "Inactive",
    };

    setProductsData([...productsData, product]);

    // Reset Form
    setNewProduct({
      id: "",
      name: "",
      category: "",
      image: "",
      weight: "",
      price: "",
      discount: "",
      stock: "",
      status: "Active",
    });

    setShowModal(false);
  };

  // Open Edit Modal & Load Data
  const handleEdit = (id: number) => {
    const product = productsData.find((item) => item.id === id);
    if (!product) return;

    setEditingProduct({ ...product });
    setShowEditModal(true);
  };

  // Save Updated Product Handler
  const handleUpdateProduct = () => {
    if (!editingProduct || !editingProduct.name || !editingProduct.category || !editingProduct.price) {
      alert("Please fill all required fields");
      return;
    }

    setProductsData(
      productsData.map((prod) => (prod.id === editingProduct.id ? editingProduct : prod))
    );
    
    setShowEditModal(false);
    setEditingProduct(null);
  };

  // Delete Handler
  const handleDelete = (id: number) => {
    if (confirm("Delete this product?")) {
      setProductsData(productsData.filter((product) => product.id !== id));
    }
  };

  return (
    <motion.div
      className="p-6 bg-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Products</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="p-4">ID</th>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Weight</th>
              <th className="p-4">Price</th>
              <th className="p-4">Discount</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b text-center hover:bg-gray-50 transition"
              >
                <td className="p-4">{product.id}</td>
                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded mx-auto object-cover border"
                  />
                </td>
                <td className="p-4 font-medium">{product.name}</td>
                <td className="p-4">{product.category}</td>
                <td className="p-4">{product.weight || "-"}</td>
                <td className="p-4">₹{product.price}</td>
                <td className="p-4">{product.discount}%</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                      product.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- ADD PRODUCT MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[450px] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Add Product</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="number"
                placeholder="Product ID *"
                value={newProduct.id}
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="text"
                placeholder="Product Name *"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="text"
                placeholder="Category *"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />

              {/* Image Upload for Add */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                <label className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload size={32} className="text-green-600" />
                  <span className="text-gray-600 text-sm">Upload Product Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setNewProduct({ ...newProduct, image: URL.createObjectURL(file) });
                      }
                    }}
                  />
                </label>
                {newProduct.image && (
                  <img src={newProduct.image} alt="Preview" className="w-20 h-20 mx-auto mt-3 rounded-lg object-cover border" />
                )}
              </div>

              <input
                type="text"
                placeholder="Weight (e.g. 500g)"
                value={newProduct.weight}
                onChange={(e) => setNewProduct({ ...newProduct, weight: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                placeholder="Price *"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                placeholder="Discount %"
                value={newProduct.discount}
                onChange={(e) => setNewProduct({ ...newProduct, discount: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              />
              <select
                value={newProduct.status}
                onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <button
                onClick={handleAddProduct}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition mt-2"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- EDIT PRODUCT MODAL --- */}
      {showEditModal && editingProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[450px] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Edit Product (ID: {editingProduct.id})</h2>
              <button onClick={() => setShowEditModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Product Name *"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Category *"
                value={editingProduct.category}
                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Image Upload for Edit */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                <label className="cursor-pointer flex flex-col items-center gap-2">
                  <Upload size={32} className="text-blue-600" />
                  <span className="text-gray-600 text-sm">Update Product Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setEditingProduct({ ...editingProduct, image: URL.createObjectURL(file) });
                      }
                    }}
                  />
                </label>
                {editingProduct.image && (
                  <img src={editingProduct.image} alt="Preview" className="w-20 h-20 mx-auto mt-3 rounded-lg object-cover border" />
                )}
              </div>

              <input
                type="text"
                placeholder="Weight"
                value={editingProduct.weight}
                onChange={(e) => setEditingProduct({ ...editingProduct, weight: e.target.value })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="number"
                placeholder="Price *"
                value={editingProduct.price}
                onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="number"
                placeholder="Discount %"
                value={editingProduct.discount}
                onChange={(e) => setEditingProduct({ ...editingProduct, discount: Number(e.target.value) })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="number"
                placeholder="Stock"
                value={editingProduct.stock}
                onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select
                value={editingProduct.status}
                onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as "Active" | "Inactive" })}
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <button
                onClick={handleUpdateProduct}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition mt-2"
              >
                Update Product
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
