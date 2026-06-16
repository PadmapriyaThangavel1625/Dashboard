"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  storeInformation,
  deliveryCharges,
  taxConfiguration,
  paymentGatewaySettings,
  emailSmsSettings,
  appConfiguration,
} from "@/app/data/settings";

import { Settings } from "lucide-react";

const tabs = [
  { name: "Store Info", data: storeInformation },
  { name: "Delivery", data: deliveryCharges },
  { name: "Tax", data: taxConfiguration },
  { name: "Payments", data: paymentGatewaySettings },
  { name: "Email/SMS", data: emailSmsSettings },
  { name: "App Config", data: appConfiguration },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-green-600 flex items-center gap-2 mb-6"
      >
        <Settings /> Settings
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-3 rounded border transition
                ${
                  activeTab.name === tab.name
                    ? "bg-green-100 border-green-500 font-semibold"
                    : "hover:bg-gray-100"
                }`}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-3 border rounded-lg p-6 bg-white shadow-sm"
        >
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            {activeTab.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTab.data.map((item) => (
              <div
                key={item.id}
                className="border rounded p-3 hover:shadow transition"
              >
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>

                <input
                  type="text"
                  placeholder="Enter value"
                  className="mt-2 w-full border p-2 rounded outline-none focus:border-green-500"
                />
              </div>
            ))}
          </div>

          <button className="mt-6 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Save Changes
          </button>
        </motion.div>
      </div>
    </div>
  );
}