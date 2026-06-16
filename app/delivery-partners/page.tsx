"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  X,
  Bike,
  IndianRupee,
  Star,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  deliveryPartners,
  DeliveryPartner,
} from "@/app/data/deliveryPartners";

export default function DeliveryPartnersPage() {
  const [partners, setPartners] =
    useState<DeliveryPartner[]>(deliveryPartners);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imagePreview, setImagePreview] =
    useState("");

  const [newPartner, setNewPartner] =
    useState<Partial<DeliveryPartner>>({
      name: "",
      phone: "",
      vehicle: "",
      image: "",
      status: "Available",
      assignedOrders: 0,
      earnings: 0,
      rating: 5,
    });

  const addPartner = () => {
    if (
      !newPartner.name ||
      !newPartner.phone ||
      !newPartner.vehicle
    ) {
      alert("Please fill all fields");
      return;
    }

    const partner: DeliveryPartner = {
      id: Date.now(),
      name: newPartner.name,
      phone: newPartner.phone,
      vehicle: newPartner.vehicle,
      image:
        newPartner.image ||
        "https://via.placeholder.com/150",
      status:
        (newPartner.status as
          | "Available"
          | "Busy"
          | "Offline") || "Available",
      assignedOrders:
        Number(newPartner.assignedOrders) || 0,
      earnings:
        Number(newPartner.earnings) || 0,
      rating: Number(newPartner.rating) || 5,
    };

    setPartners((prev) => [partner, ...prev]);

    setNewPartner({
      name: "",
      phone: "",
      vehicle: "",
      image: "",
      status: "Available",
      assignedOrders: 0,
      earnings: 0,
      rating: 5,
    });

    setImagePreview("");
    setShowModal(false);
  };

  const filteredPartners = partners.filter(
    (partner) =>
      partner.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      partner.phone.includes(search)
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            🚚 Delivery Partner Management
          </h1>
          <p className="text-gray-500">
            Manage delivery partners and track
            performance
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg transition"
        >
          <Plus size={20} />
          Add Partner
        </button>
      </motion.div>

      {/* Search */}
      <div className="relative mb-8">
        <Search
          className="absolute left-4 top-4 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search Partner..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full pl-12 pr-4 py-4 rounded-xl border bg-white shadow"
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPartners.map((partner) => (
          <motion.div
            key={partner.id}
            whileHover={{
              scale: 1.03,
              y: -5,
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="h-20 bg-gradient-to-r from-green-500 to-emerald-600" />

            <div className="p-5">
              <div className="flex flex-col items-center -mt-14">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                />

                <h2 className="mt-3 text-xl font-bold">
                  {partner.name}
                </h2>

                <p className="text-gray-500">
                  {partner.phone}
                </p>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Bike size={18} />
                  <span>
                    {partner.vehicle}
                  </span>
                </div>

                <div>
                  Status :
                  <span
                    className={`ml-2 font-semibold ${
                      partner.status ===
                      "Available"
                        ? "text-green-600"
                        : partner.status === "Busy"
                        ? "text-orange-500"
                        : "text-red-500"
                    }`}
                  >
                    {partner.status}
                  </span>
                </div>

                <div>
                  Assigned Orders :
                  <span className="font-semibold ml-2">
                    {partner.assignedOrders}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee size={18} />
                  <span>
                    ₹{partner.earnings}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="text-yellow-500"
                  />
                  <span>
                    {partner.rating}/5
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
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
              className="bg-white rounded-2xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">
                  Add Delivery Partner
                </h2>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  <X />
                </button>
              </div>

              <div className="space-y-4">
                {/* Image Upload */}
                <div className="flex flex-col items-center gap-3">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover border-4 border-green-500"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <User size={40} />
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file =
                        e.target.files?.[0];

                      if (file) {
                        const imageUrl =
                          URL.createObjectURL(
                            file
                          );

                        setImagePreview(
                          imageUrl
                        );

                        setNewPartner({
                          ...newPartner,
                          image: imageUrl,
                        });
                      }
                    }}
                    className="w-full border p-2 rounded"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Partner Name"
                  value={
                    newPartner.name || ""
                  }
                  onChange={(e) =>
                    setNewPartner({
                      ...newPartner,
                      name: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={
                    newPartner.phone || ""
                  }
                  onChange={(e) =>
                    setNewPartner({
                      ...newPartner,
                      phone: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="text"
                  placeholder="Vehicle"
                  value={
                    newPartner.vehicle || ""
                  }
                  onChange={(e) =>
                    setNewPartner({
                      ...newPartner,
                      vehicle: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                />

                <select
                  value={
                    newPartner.status
                  }
                  onChange={(e) =>
                    setNewPartner({
                      ...newPartner,
                      status:
                        e.target.value as
                          | "Available"
                          | "Busy"
                          | "Offline",
                    })
                  }
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="Available">
                    Available
                  </option>
                  <option value="Busy">
                    Busy
                  </option>
                  <option value="Offline">
                    Offline
                  </option>
                </select>

                <button
                  onClick={addPartner}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Add Partner
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}