"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "MacBook Pro 14”",
    sold: 512,
    progress: 92,
    image: "https://picsum.photos/seed/macbook/60/60",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    sold: 438,
    progress: 82,
    image: "https://picsum.photos/seed/iphone/60/60",
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    sold: 342,
    progress: 66,
    image: "https://picsum.photos/seed/airpods/60/60",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    sold: 298,
    progress: 56,
    image: "https://picsum.photos/seed/watch/60/60",
  },
  {
    id: 5,
    name: "iPad Air 5",
    sold: 210,
    progress: 42,
    image: "https://picsum.photos/seed/ipad/60/60",
  },
];

export default function TopSellingProducts() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #eee",
        padding: 20,
        height: "100%",
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
          Top Selling Products
        </h3>

        <span
          style={{
            color: "#4F46E5",
            cursor: "pointer",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          View all
        </span>
      </div>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
           <img
              src={item.image}
              alt={item.name}
              width={48}
              height={48}
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                objectFit: "cover",
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {item.name}
                </span>

                <span
                  style={{
                    color: "#666",
                    fontSize: 14,
                  }}
                >
                  {item.sold} Sold
                </span>
              </div>

              <div
                style={{
                  height: 6,
                  background: "#ECECEC",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${item.progress}%`,
                    height: "100%",
                    background: "#4F46E5",
                    borderRadius: 10,
                    transition: "0.5s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}