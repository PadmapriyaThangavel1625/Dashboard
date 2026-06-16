"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Package,
  AlertTriangle,
  BarChart3,
  X,
  PackagePlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  inventoryData,
  InventoryItem,
} from "@/app/data/inventory";

export default function InventoryPage() {
  const [inventory, setInventory] =
    useState<InventoryItem[]>(inventoryData);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] =
    useState(false);

  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [batch, setBatch] = useState("");
  const [expiry, setExpiry] = useState("");

  const addInventory = () => {
    if (
      !product ||
      !stock ||
      !batch ||
      !expiry
    )
      return;

    const newItem: InventoryItem = {
      id: Date.now(),
      product,
      stock: Number(stock),
      batch,
      expiry,
    };

    setInventory([...inventory, newItem]);

    setProduct("");
    setStock("");
    setBatch("");
    setExpiry("");
    setShowModal(false);
  };

  const filteredInventory =
    inventory.filter((item) =>
      item.product
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const totalProducts = inventory.length;

  const totalStock = inventory.reduce(
    (sum, item) => sum + item.stock,
    0
  );

  const lowStockCount = inventory.filter(
    (item) => item.stock < 10
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Inventory Management
          </h1>
          <p className="text-slate-500">
            Manage your inventory stocks
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Stock
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-5 mb-8">
        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="bg-white p-5 rounded-2xl shadow-md"
        >
          <Package
            className="text-blue-600 mb-3"
            size={30}
          />
          <h3 className="text-gray-500">
            Total Products
          </h3>
          <p className="text-3xl font-bold">
            {totalProducts}
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="bg-white p-5 rounded-2xl shadow-md"
        >
          <AlertTriangle
            className="text-red-600 mb-3"
            size={30}
          />
          <h3 className="text-gray-500">
            Low Stock Alerts
          </h3>
          <p className="text-3xl font-bold">
            {lowStockCount}
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="bg-white p-5 rounded-2xl shadow-md"
        >
          <Package
            className="text-green-600 mb-3"
            size={30}
          />
          <h3 className="text-gray-500">
            Total Stock
          </h3>
          <p className="text-3xl font-bold">
            {totalStock}
          </p>
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="bg-white p-5 rounded-2xl shadow-md"
        >
          <BarChart3
            className="text-purple-600 mb-3"
            size={30}
          />
          <h3 className="text-gray-500">
            Reports
          </h3>
          <p className="text-3xl font-bold">
            Monthly
          </p>
        </motion.div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
        <div className="flex items-center border-2 border-gray-200 rounded-xl px-4">
          <Search
            className="text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full p-3 outline-none"
          />
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <tr>
              <th className="p-4 text-left">
                Product
              </th>
              <th className="p-4">
                Stock
              </th>
              <th className="p-4">
                Batch
              </th>
              <th className="p-4">
                Expiry
              </th>
              <th className="p-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredInventory.map((item) => (
              <motion.tr
                key={item.id}
                whileHover={{
                  backgroundColor:
                    "#f8fafc",
                }}
                className="border-b"
              >
                <td className="p-4">
                  {item.product}
                </td>

                <td className="p-4 text-center">
                  {item.stock}
                </td>

                <td className="p-4 text-center">
                  {item.batch}
                </td>

                <td className="p-4 text-center">
                  {item.expiry}
                </td>

                <td className="p-4 text-center">
                  {item.stock < 10 ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      Low Stock
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      In Stock
                    </span>
                  )}
                </td>
              </motion.tr>
            ))}

            {filteredInventory.length ===
              0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-8 text-gray-500"
                >
                  No inventory found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Stock Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-5 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <PackagePlus size={30} />

                  <div>
                    <h2 className="text-xl font-bold">
                      Add Inventory
                    </h2>
                    <p className="text-sm opacity-80">
                      Create New Stock Item
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="hover:bg-white/20 p-2 rounded-full"
                >
                  <X />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={product}
                  onChange={(e) =>
                    setProduct(
                      e.target.value
                    )
                  }
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-green-500 outline-none"
                />

                <input
                  type="number"
                  placeholder="Stock Quantity"
                  value={stock}
                  onChange={(e) =>
                    setStock(
                      e.target.value
                    )
                  }
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-green-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Batch Number"
                  value={batch}
                  onChange={(e) =>
                    setBatch(
                      e.target.value
                    )
                  }
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-green-500 outline-none"
                />

                <input
                  type="date"
                  value={expiry}
                  onChange={(e) =>
                    setExpiry(
                      e.target.value
                    )
                  }
                  className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-green-500 outline-none"
                />
              </div>

              {/* Footer */}
              <div className="border-t p-5 flex gap-3">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={addInventory}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold"
                >
                  Save Stock
                </motion.button>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="flex-1 bg-gray-100 hover:bg-gray-200 py-3 rounded-xl font-semibold"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}