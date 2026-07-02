"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";

interface Props {
  title: string;
  value: string;
  type: "revenue" | "orders" | "customers" | "products";
}

export default function StatCard({ title, value, type }: Props) {
  const data = {
    revenue: {
      icon: DollarSign,
      bg: "linear-gradient(135deg,#8B5CF6,#A855F7)",
      color: "#fff",
      change: "+12.5%",
      text: "vs last week",
    },
    orders: {
      icon: ShoppingCart,
      bg: "linear-gradient(135deg,#22C55E,#86EFAC)",
      color: "#fff",
      change: "+8.3%",
      text: "vs last week",
    },
    customers: {
      icon: Users,
      bg: "linear-gradient(135deg,#C084FC,#E9D5FF)",
      color: "#6D28D9",
      change: "+16.2%",
      text: "vs last week",
    },
    products: {
      icon: Package,
      bg: "linear-gradient(135deg,#FB923C,#FDE68A)",
      color: "#EA580C",
      change: "-2.4%",
      text: "vs last week",
    },
  }[type];

  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: "0 18px 35px rgba(0,0,0,.12)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 20,
        display: "flex",
        alignItems: "center",
        gap: 18,
        border: "1px solid #eee",
        cursor: "pointer",
      }}
    >
      {/* Animated Icon */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
          rotate: 360,
        }}
        style={{
          width: 65,
          height: 65,
          borderRadius: 16,
          background: data.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon size={34} color={data.color} />
      </motion.div>

      <div>
        <p
          style={{
            color: "#666",
            margin: 0,
            fontSize: 15,
          }}
        >
          {title}
        </p>

        <h2
          style={{
            margin: "8px 0",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          {value}
        </h2>

        <span
          style={{
            color: data.change.startsWith("+") ? "#16A34A" : "#EF4444",
            fontWeight: 600,
          }}
        >
          {data.change}
        </span>

        <span
          style={{
            color: "#888",
            marginLeft: 8,
          }}
        >
          {data.text}
        </span>
      </div>
    </motion.div>
  );
}