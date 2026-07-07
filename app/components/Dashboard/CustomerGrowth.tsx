"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function CustomerGrowth() {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
      }}
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
          marginBottom: 25,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Customer Growth
        </h3>

        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#EEF2FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TrendingUp size={22} color="#4F46E5" />
        </div>
      </div>

      {/* Circle + Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Progress Circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "conic-gradient(#4F46E5 78%, #E5E7EB 78%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#111827",
            }}
          >
            78%
          </div>
        </div>

        {/* Information */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 700,
              color: "#111827",
            }}
          >
            12,486
          </h1>

          <p
            style={{
              margin: "10px 0",
              color: "#22C55E",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            ↑ +12.5% this month
          </p>

          <p
            style={{
              margin: 0,
              color: "#6B7280",
              fontSize: 14,
              lineHeight: "22px",
            }}
          >
            Customer acquisition continues to grow steadily compared with the previous month.
          </p>
        </div>
      </div>

      {/* Bottom Stats */}
                
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 25,
              paddingTop: 20,
              borderTop: "1px solid #F3F4F6",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#9CA3AF",
                  fontSize: 13,
                }}
              >
                New Customers
              </p>

              <h3
                style={{
                  margin: "8px 0 0",
                  color: "#16A34A",
                  fontWeight: 700,
                }}
              >
                2,348
              </h3>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  color: "#9CA3AF",
                  fontSize: 13,
                }}
              >
                Inactive Customers
              </p>

              <h3
                style={{
                  margin: "8px 0 0",
                  color: "#EF4444",
                  fontWeight: 700,
                }}
              >
                356
              </h3>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  color: "#9CA3AF",
                  fontSize: 13,
                }}
              >
                Returning Customers
              </p>

              <h3
                style={{
                  margin: "8px 0 0",
                  color: "#4F46E5",
                  fontWeight: 700,
                }}
              >
                10,138
              </h3>
            </div>
          </div>
    </motion.div>
  );
}