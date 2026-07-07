"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", thisWeek: 14000, lastWeek: 10000 },
  { day: "Tue", thisWeek: 17000, lastWeek: 14000 },
  { day: "Wed", thisWeek: 15000, lastWeek: 11000 },
  { day: "Thu", thisWeek: 21000, lastWeek: 16000 },
  { day: "Fri", thisWeek: 18000, lastWeek: 14000 },
  { day: "Sat", thisWeek: 21000, lastWeek: 15000 },
  { day: "Sun", thisWeek: 24000, lastWeek: 19000 },
];

export default function ChartBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #eee",
        padding: 20,
        height: 420,
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
        <h3 style={{ margin: 0 }}>Sales Overview</h3>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 14,
          }}
        >
          <span style={{ color: "#4f46e5", fontWeight: 600 }}>
            ● This Week
          </span>

          <span style={{ color: "#9ca3af" }}>
            ● Last Week
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" vertical={false} />

          <XAxis dataKey="day" />

          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />

          <Tooltip
            formatter={(value) => {
              const num = Number(value);
              return [`$${num.toLocaleString()}`, ""];
            }}
          />

          <Line
            type="monotone"
            dataKey="thisWeek"
            stroke="#4F46E5"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="lastWeek"
            stroke="#C7C9D9"
            strokeWidth={3}
            strokeDasharray="6 6"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}