"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  FileText,
  Users,
  Truck,
  Package,
  Tag,
  FileDown,
  Search,
} from "lucide-react";

import { reportsData, ReportItem } from "@/app/data/reports";

const iconMap: Record<string, any> = {
  Sales: BarChart3,
  Product: Package,
  Category: Tag,
  Customer: Users,
  Delivery: Truck,
  Tax: FileText,
};

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Sales", "Product", "Category", "Customer", "Delivery", "Tax"];

  const filteredData = useMemo(() => {
    return reportsData.filter((item: ReportItem) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ? true : item.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6"
      >
        <h1 className="text-2xl font-bold text-slate-800">
          📈 Reports & Analytics
        </h1>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex items-center bg-white border rounded-lg px-3">
            <Search size={18} className="text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reports..."
              className="p-2 outline-none bg-transparent"
            />
          </div>

          {/* Export buttons */}
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            <FileDown size={18} />
            Excel
          </button>

          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            <FileDown size={18} />
            PDF
          </button>
        </div>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              category === cat
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-700 hover:bg-slate-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map((item, index) => {
          const Icon = iconMap[item.category] || FileText;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Icon size={22} className="text-slate-700" />
                </div>

                <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>

              <h2 className="text-lg font-semibold mt-4 text-slate-800">
                {item.title}
              </h2>

              <p className="text-2xl font-bold text-slate-900 mt-2">
                {item.value}
              </p>

              {item.description && (
                <p className="text-sm text-slate-500 mt-2">
                  {item.description}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredData.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No reports found
        </div>
      )}

      {/* Bottom Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-5 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold mb-3">📊 Sales Overview</h2>
          <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-gray-400">
            Chart Area (Add Recharts / Chart.js)
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-5 rounded-xl shadow"
        >
          <h2 className="text-lg font-semibold mb-3">
            🚚 Delivery Performance
          </h2>
          <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-gray-400">
            Chart Area (Add Recharts / Chart.js)
          </div>
        </motion.div>
      </div>
    </div>
  );
}