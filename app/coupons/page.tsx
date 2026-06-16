"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  X,
  Ticket,
  Percent,
  Gift,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { coupons, Coupon } from "@/app/data/coupons";

/* ✅ STRICT TYPES */
type CouponType = "Percentage" | "Flat" | "BOGO" | "Referral";
type CouponStatus = "Active" | "Expired";

export default function CouponsPage() {
  const [couponList, setCouponList] = useState<Coupon[]>(coupons);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);

  /* ✅ FIXED FORM TYPE */
  const [formData, setFormData] = useState<{
    code: string;
    type: CouponType;
    discount: string;
    expiry: string;
    status: CouponStatus;
  }>({
    code: "",
    type: "Percentage",
    discount: "",
    expiry: "",
    status: "Active",
  });

  const filteredCoupons = couponList.filter((coupon) =>
    coupon.code.toLowerCase().includes(search.toLowerCase())
  );

  /* ADD COUPON */
  const handleAddCoupon = () => {
    if (!formData.code || !formData.discount || !formData.expiry) return;

    const newCoupon: Coupon = {
      id: Date.now(),
      code: formData.code,
      type: formData.type,
      discount: Number(formData.discount),
      expiry: formData.expiry,
      status: formData.status,
    };

    setCouponList([...couponList, newCoupon]);
    setShowModal(false);

    setFormData({
      code: "",
      type: "Percentage",
      discount: "",
      expiry: "",
      status: "Active",
    });
  };

  /* EDIT COUPON */
  const handleEditCoupon = () => {
    if (!editingCoupon) return;

    setCouponList(
      couponList.map((c) =>
        c.id === editingCoupon.id
          ? {
              ...c,
              code: formData.code,
              type: formData.type,
              discount: Number(formData.discount),
              expiry: formData.expiry,
              status: formData.status,
            }
          : c
      )
    );

    setEditingCoupon(null);
    setShowModal(false);
  };

  /* DELETE */
  const deleteCoupon = (id: number) => {
    setCouponList(couponList.filter((c) => c.id !== id));
  };

  /* OPEN EDIT */
  const openEditModal = (coupon: Coupon) => {
    setEditingCoupon(coupon);

    setFormData({
      code: coupon.code,
      type: coupon.type,
      discount: coupon.discount.toString(),
      expiry: coupon.expiry,
      status: coupon.status,
    });

    setShowModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 text-gray-900 p-6"
    >
      {/* HEADER */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center mb-6"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2 text-green-600">
          <Ticket />
          Coupons & Offers
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingCoupon(null);
            setFormData({
              code: "",
              type: "Percentage",
              discount: "",
              expiry: "",
              status: "Active",
            });
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow"
        >
          <Plus size={18} />
          Add Coupon
        </motion.button>
      </motion.div>

      {/* SEARCH */}
      <motion.div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search Coupon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border rounded-lg py-2 pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-green-400"
        />
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {[
          {
            icon: Ticket,
            label: "Total",
            value: couponList.length,
            color: "text-green-600",
          },
          {
            icon: Percent,
            label: "Percentage",
            value: couponList.filter((c) => c.type === "Percentage").length,
            color: "text-blue-600",
          },
          {
            icon: Gift,
            label: "BOGO",
            value: couponList.filter((c) => c.type === "BOGO").length,
            color: "text-pink-600",
          },
          {
            icon: Ticket,
            label: "Referral",
            value: couponList.filter((c) => c.type === "Referral").length,
            color: "text-yellow-600",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -3 }}
            className="bg-white p-4 rounded-xl shadow"
          >
            <item.icon className={`mb-2 ${item.color}`} />
            <h2 className="text-2xl font-bold">{item.value}</h2>
            <p className="text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow">
          <thead className="bg-gray-100">
            <tr>
              {["Code", "Type", "Discount", "Expiry", "Status", "Actions"].map(
                (h) => (
                  <th key={h} className="p-3 text-left">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            <AnimatePresence>
              {filteredCoupons.map((coupon) => (
                <motion.tr
                  key={coupon.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.01 }}
                  className="border-t"
                >
                  <td className="p-3">{coupon.code}</td>
                  <td className="p-3">{coupon.type}</td>
                  <td className="p-3">{coupon.discount}</td>
                  <td className="p-3">{coupon.expiry}</td>
                  <td className="p-3">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                      {coupon.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-3">
                    <button
                      onClick={() => openEditModal(coupon)}
                      className="text-blue-600 hover:scale-110 transition"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => deleteCoupon(coupon.id)}
                      className="text-red-600 hover:scale-110 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl"
            >
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold text-green-600">
                  {editingCoupon ? "Edit Coupon" : "Add Coupon"}
                </h2>
                <button onClick={() => setShowModal(false)}>
                  <X />
                </button>
              </div>

              <div className="space-y-3">
                <input
                  className="w-full p-3 border rounded"
                  placeholder="Coupon Code"
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({ ...formData, code: e.target.value })
                  }
                />

                <select
                  className="w-full p-3 border rounded"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as CouponType,
                    })
                  }
                >
                  <option>Percentage</option>
                  <option>Flat</option>
                  <option>BOGO</option>
                  <option>Referral</option>
                </select>

                <input
                  className="w-full p-3 border rounded"
                  type="number"
                  placeholder="Discount"
                  value={formData.discount}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                />

                <input
                  className="w-full p-3 border rounded"
                  type="date"
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({ ...formData, expiry: e.target.value })
                  }
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={editingCoupon ? handleEditCoupon : handleAddCoupon}
                  className="w-full bg-green-600 text-white py-3 rounded-lg"
                >
                  {editingCoupon ? "Update Coupon" : "Create Coupon"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}