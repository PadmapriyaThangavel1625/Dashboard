"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const sources = [
  { name: "Google", value: 48, color: "#4F46E5" },
  { name: "Direct", value: 26, color: "#22C55E" },
  { name: "Facebook", value: 16, color: "#F59E0B" },
  { name: "Instagram", value: 10, color: "#EF4444" },
];

export default function TrafficSource() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #eee",
        padding: 20,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Traffic Source
        </h3>

        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#EEF2FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Globe size={20} color="#4F46E5" />
        </div>
      </div>

      {sources.map((item) => (
        <div key={item.name} style={{ marginBottom: 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span>{item.name}</span>
            <strong>{item.value}%</strong>
          </div>

          <div
            style={{
              height: 8,
              background: "#F3F4F6",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${item.value}%`,
                height: "100%",
                background: item.color,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}