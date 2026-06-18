"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Smartphone,
  Mail,
  Megaphone,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

import { notificationsData, Notification } from "@/app/data/notifications";

export default function NotificationsPage() {
  const [notifications] = useState<Notification[]>(notificationsData);
  const [search, setSearch] = useState("");

  const filtered = notifications.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const getIcon = (type: string) => {
    switch (type) {
      case "Push":
        return <Bell size={18} />;
      case "SMS":
        return <Smartphone size={18} />;
      case "Email":
        return <Mail size={18} />;
      case "Promo":
        return <Megaphone size={18} />;
      default:
        return <Bell size={18} />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sent":
        return <CheckCircle className="text-green-600" size={18} />;
      case "Pending":
        return <Clock className="text-yellow-500" size={18} />;
      case "Failed":
        return <XCircle className="text-red-500" size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-2xl font-bold text-green-600 flex items-center gap-2">
          <Bell /> Notifications
        </h1>

        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search notifications..."
            className="pl-10 pr-4 py-2 rounded border border-gray-300 bg-white text-black outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Cards Animation */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((n, index) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold flex items-center gap-2">
                {getIcon(n.type)}
                {n.title}
              </h2>

              <div className="flex items-center gap-1">
                {getStatusIcon(n.status)}
                <span className="text-sm text-gray-700">{n.status}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-2">{n.message}</p>

            <div className="flex justify-between mt-3 text-xs text-gray-500">
              <span>Type: {n.type}</span>
              <span>{n.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State Animation */}
      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-500 mt-10"
        >
          No notifications found
        </motion.div>
      )}
    </div>
  );
}