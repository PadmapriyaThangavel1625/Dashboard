"use client";

import { useState } from "react";
import { rolesData, Role } from "@/app/data/adminRoles";
import { Shield, Search, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminRolesPage() {
  const [roles] = useState<Role[]>(rolesData);
  const [search, setSearch] = useState("");

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-green-600 flex items-center gap-2">
          <Shield size={28} />
          Admin & Roles Management
        </h1>
        <p className="text-gray-600">
          Manage roles and permissions for system users
        </p>
      </motion.div>

      {/* Search */}
      <div className="flex items-center gap-2 mb-6 border p-2 rounded">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search roles..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-green-600 flex items-center gap-2">
                <Users size={18} />
                {role.name}
              </h2>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  role.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {role.status}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-3">
              {role.description}
            </p>

            <div>
              <h3 className="font-medium mb-1">Permissions:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {role.permissions.map((perm, i) => (
                  <li key={i}>{perm}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}