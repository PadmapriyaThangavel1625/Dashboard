"use client";

import { useEffect, useState } from "react";

interface Order {
  order_id: string;
  customer_name: string;
  phone: string;
  address: string;
  total_amount: string;
  payment_method: string;
  payment_status: string;
  order_status: string;
  created_at: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          No Orders Found
        </div>
      ) : (
        <div className="grid gap-5">
          {orders.map((order) => (
            <div
              key={order.order_id}
              className="bg-white rounded-xl shadow-md p-5 border"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  Order #{order.order_id}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    order.order_status === "Delivered"
                      ? "bg-green-500"
                      : order.order_status === "Pending"
                      ? "bg-yellow-500"
                      : order.order_status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`}
                >
                  {order.order_status}
                </span>
              </div>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Customer:</strong> {order.customer_name}
                </p>

                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>

                <p>
                  <strong>Address:</strong> {order.address}
                </p>

                <p>
                  <strong>Total:</strong> ₹{order.total_amount}
                </p>

                <p>
                  <strong>Payment:</strong> {order.payment_method}
                </p>

                <p>
                  <strong>Payment Status:</strong> {order.payment_status}
                </p>

                <p>
                  <strong>Date:</strong> {order.created_at}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}