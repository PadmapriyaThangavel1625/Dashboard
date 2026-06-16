"use client";

import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { orders, Order } from "@/app/data/orders";

export default function OrdersPage() {
  const [ordersData, setOrdersData] =
    useState<Order[]>(orders);

  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  const filteredOrders = ordersData.filter(
    (order) =>
      order.customerName
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id.toString().includes(search)
  );

  const updateStatus = (
    id: number,
    status: Order["status"]
  ) => {
    setOrdersData((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Order Management
        </motion.h1>

        <motion.div
          className="relative w-full md:w-80"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Order..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
        </motion.div>
      </div>

      {/* Orders Table */}
      <motion.div
        className="bg-white rounded-xl shadow overflow-hidden"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">
                  Customer
                </th>
                <th className="p-4">
                  Amount
                </th>
                <th className="p-4">
                  Payment
                </th>
                <th className="p-4">
                  Status
                </th>
                <th className="p-4">
                  Date
                </th>
                <th className="p-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map(
                (order, index) => (
                  <motion.tr
                    key={order.id}
                    className="border-b hover:bg-gray-50"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay:
                        index * 0.05,
                    }}
                  >
                    <td className="p-4">
                      #{order.id}
                    </td>

                    <td className="p-4">
                      {
                        order.customerName
                      }
                    </td>

                    <td className="p-4">
                      ₹
                      {
                        order.totalAmount
                      }
                    </td>

                    <td className="p-4">
                      {
                        order.paymentStatus
                      }
                    </td>

                    <td className="p-4">
                      <select
                        value={
                          order.status
                        }
                        onChange={(
                          e
                        ) =>
                          updateStatus(
                            order.id,
                            e.target
                              .value as Order["status"]
                          )
                        }
                        className="border rounded px-2 py-1"
                      >
                        <option>
                          Pending
                        </option>
                        <option>
                          Confirmed
                        </option>
                        <option>
                          Packed
                        </option>
                        <option>
                          Shipped
                        </option>
                        <option>
                          Delivered
                        </option>
                        <option>
                          Cancelled
                        </option>
                      </select>
                    </td>

                    <td className="p-4">
                      {
                        order.orderDate
                      }
                    </td>

                    <td className="p-4">
                      <motion.button
                        whileHover={{
                          scale: 1.1,
                        }}
                        whileTap={{
                          scale: 0.9,
                        }}
                        onClick={() =>
                          setSelectedOrder(
                            order
                          )
                        }
                        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                      >
                        <Eye
                          size={18}
                        />
                      </motion.button>
                    </td>
                  </motion.tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 w-full max-w-lg shadow-2xl"
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 30,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Order Details
              </h2>

              <div className="space-y-3">
                <p>
                  <strong>
                    Order ID:
                  </strong>{" "}
                  #
                  {
                    selectedOrder.id
                  }
                </p>

                <p>
                  <strong>
                    Customer:
                  </strong>{" "}
                  {
                    selectedOrder.customerName
                  }
                </p>

                <p>
                  <strong>
                    Phone:
                  </strong>{" "}
                  {
                    selectedOrder.phone
                  }
                </p>

                <p>
                  <strong>
                    Address:
                  </strong>{" "}
                  {
                    selectedOrder.address
                  }
                </p>

                <p>
                  <strong>
                    Products:
                  </strong>
                </p>

                <ul className="list-disc ml-5">
                  {selectedOrder.products.map(
                    (
                      product,
                      index
                    ) => (
                      <li
                        key={
                          index
                        }
                      >
                        {
                          product
                        }
                      </li>
                    )
                  )}
                </ul>

                <p>
                  <strong>
                    Total:
                  </strong>{" "}
                  ₹
                  {
                    selectedOrder.totalAmount
                  }
                </p>

                <p>
                  <strong>
                    Payment Method:
                  </strong>{" "}
                  {
                    selectedOrder.paymentMethod
                  }
                </p>

                <p>
                  <strong>
                    Payment Status:
                  </strong>{" "}
                  {
                    selectedOrder.paymentStatus
                  }
                </p>

                <p>
                  <strong>
                    Order Status:
                  </strong>{" "}
                  {
                    selectedOrder.status
                  }
                </p>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setSelectedOrder(
                    null
                  )
                }
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}