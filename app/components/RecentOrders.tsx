"use client";

const orders = [
  {
    id: "#10245",
    customer: "John Smith",
    product: "MacBook Pro",
    amount: "$2,499",
    status: "Completed",
  },
  {
    id: "#10246",
    customer: "Emma Wilson",
    product: "iPhone 15 Pro",
    amount: "$1,299",
    status: "Pending",
  },
  {
    id: "#10247",
    customer: "Michael Lee",
    product: "Apple Watch",
    amount: "$499",
    status: "Processing",
  },
  {
    id: "#10248",
    customer: "Sophia Brown",
    product: "AirPods Pro",
    amount: "$279",
    status: "Completed",
  },
];

export default function RecentOrders() {
  return (
    <div
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
          Recent Orders
        </h3>

        <span
          style={{
            color: "#4F46E5",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          View All
        </span>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr
            style={{
              textAlign: "left",
              color: "#777",
              borderBottom: "1px solid #eee",
            }}
          >
            <th style={{ padding: "12px 0" }}>Order</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              style={{
                borderBottom: "1px solid #f3f3f3",
              }}
            >
              <td style={{ padding: "14px 0", fontWeight: 600 }}>
                {order.id}
              </td>

              <td>{order.customer}</td>

              <td>{order.product}</td>

              <td style={{ fontWeight: 600 }}>{order.amount}</td>

              <td>
                <span
                  style={{
                    padding: "5px 12px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    color:
                      order.status === "Completed"
                        ? "#15803d"
                        : order.status === "Pending"
                        ? "#b45309"
                        : "#2563eb",
                    background:
                      order.status === "Completed"
                        ? "#DCFCE7"
                        : order.status === "Pending"
                        ? "#FEF3C7"
                        : "#DBEAFE",
                  }}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}