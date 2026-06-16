"use client";

import { useState } from "react";
import { customers, Customer } from "@/app/data/customer";
import {
  Search,
  Eye,
  X,
  Users,
  Gift,
  ShoppingCart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomerPage() {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold">
            Customer Management
          </h1>
          <p className="text-gray-500">
            Manage all customers
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-xl shadow"
        >
          <Users className="text-blue-600 mb-2" />
          <h3 className="text-gray-500">
            Total Customers
          </h3>
          <p className="text-3xl font-bold">
            {customers.length}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-xl shadow"
        >
          <ShoppingCart className="text-green-600 mb-2" />
          <h3 className="text-gray-500">
            Total Orders
          </h3>
          <p className="text-3xl font-bold">
            {customers.reduce(
              (sum, item) => sum + item.orders,
              0
            )}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white p-5 rounded-xl shadow"
        >
          <Gift className="text-orange-600 mb-2" />
          <h3 className="text-gray-500">
            Loyalty Points
          </h3>
          <p className="text-3xl font-bold">
            {customers.reduce(
              (sum, item) => sum + item.points,
              0
            )}
          </p>
        </motion.div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Orders</th>
              <th className="p-4 text-left">Points</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map(
              (customer, index) => (
                <motion.tr
                  key={customer.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {customer.name}
                  </td>
                  <td className="p-4">
                    {customer.email}
                  </td>
                  <td className="p-4">
                    {customer.orders}
                  </td>
                  <td className="p-4">
                    {customer.points}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        customer.status ===
                        "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        setSelectedCustomer(
                          customer
                        )
                      }
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </motion.tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Customer Details Modal */}
      <AnimatePresence>
        {selectedCustomer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              className="bg-white rounded-xl p-6 w-[500px] shadow-xl"
            >
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">
                  Customer Profile
                </h2>

                <button
                  onClick={() =>
                    setSelectedCustomer(
                      null
                    )
                  }
                >
                  <X />
                </button>
              </div>

              <div className="space-y-3">
                <p>
                  <strong>Name:</strong>{" "}
                  {selectedCustomer.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {selectedCustomer.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedCustomer.phone}
                </p>

                <p>
                  <strong>Orders:</strong>{" "}
                  {selectedCustomer.orders}
                </p>

                <p>
                  <strong>Points:</strong>{" "}
                  {selectedCustomer.points}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {selectedCustomer.address}
                </p>

                <p>
                  <strong>Joined:</strong>{" "}
                  {selectedCustomer.joined}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {selectedCustomer.status}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}