"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  RefreshCcw,
  History,
  Search,
  CheckCircle,
  XCircle,
  Mail,
  Hash,
} from "lucide-react";

import { paymentsData, Payment } from "@/app/data/payments";

export default function PaymentPage() {
  const [payments] = useState<Payment[]>(paymentsData);
  const [search, setSearch] = useState("");

  const filteredPayments = payments.filter(
    (p) =>
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.transactionId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50 space-y-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CreditCard /> Payment Management
        </h1>
      </motion.div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded shadow flex items-center gap-3"
        >
          <Smartphone className="text-green-500" />
          <div>
            <p className="font-semibold">UPI Payments</p>
            <p className="text-sm text-gray-500">Fast & secure transfers</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded shadow flex items-center gap-3"
        >
          <CreditCard className="text-blue-500" />
          <div>
            <p className="font-semibold">Card Payments</p>
            <p className="text-sm text-gray-500">Debit / Credit supported</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-4 rounded shadow flex items-center gap-3"
        >
          <RefreshCcw className="text-orange-500" />
          <div>
            <p className="font-semibold">Refund System</p>
            <p className="text-sm text-gray-500">Track all refunds easily</p>
          </div>
        </motion.div>

      </div>

      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 bg-white p-3 rounded shadow"
      >
        <Search size={18} />
        <input
          className="w-full outline-none"
          placeholder="Search by name, email, transaction ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded shadow overflow-hidden"
      >

        <div className="p-4 font-semibold flex items-center gap-2 border-b">
          <History size={18} />
          Transaction History
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Customer</th>
              <th>Email</th>
              <th>Method</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.map((p, i) => (
              <motion.tr
                key={p.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-t hover:bg-gray-50"
              >

                <td className="p-3 font-medium">{p.customer}</td>

                <td className="text-sm text-gray-600 flex items-center gap-1">
                  <Mail size={14} /> {p.email}
                </td>

                <td>{p.method}</td>

                <td className="text-xs text-gray-600 flex items-center gap-1">
                  <Hash size={14} /> {p.transactionId}
                </td>

                <td className="font-semibold">₹{p.amount}</td>

                <td>
                  {p.status === "Success" && (
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle size={16} /> Success
                    </span>
                  )}

                  {p.status === "Failed" && (
                    <span className="text-red-600 flex items-center gap-1">
                      <XCircle size={16} /> Failed
                    </span>
                  )}

                  {p.status === "Refunded" && (
                    <span className="text-orange-600 flex items-center gap-1">
                      <RefreshCcw size={16} /> Refunded
                    </span>
                  )}
                </td>

                <td className="text-sm">{p.date}</td>

              </motion.tr>
            ))}
          </tbody>
        </table>

      </motion.div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-4 bg-blue-50 rounded text-sm"
      >
        💡 Payments are processed via secure gateway integration (UPI, Card, Razorpay-ready).
      </motion.div>

    </div>
  );
}