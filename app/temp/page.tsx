"use client";

import {
  ShoppingCart,
  IndianRupee,
  Users,
  Package,
  Bike,
  Clock,
  AlertTriangle,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Orders",
      value: "1,250",
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      title: "Total Revenue",
      value: "₹2,45,000",
      icon: IndianRupee,
      color: "bg-green-500",
    },
    {
      title: "Total Customers",
      value: "850",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Total Products",
      value: "420",
      icon: Package,
      color: "bg-orange-500",
    },
    {
      title: "Delivery Partners",
      value: "35",
      icon: Bike,
      color: "bg-pink-500",
    },
    {
      title: "Pending Orders",
      value: "18",
      icon: Clock,
      color: "bg-yellow-500",
    },
    {
      title: "Low Stock Alerts",
      value: "12",
      icon: AlertTriangle,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Grocery Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-2xl
              shadow-md
              p-5
              flex
              items-center
              justify-between
              cursor-pointer
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              hover:scale-105
            "
          >
            <div>
              <h3 className="text-gray-500 text-sm">
                {item.title}
              </h3>

              <h2 className="text-3xl font-bold mt-2 text-slate-800">
                {item.value}
              </h2>
            </div>

            <div
              className={`
                ${item.color}
                p-4
                rounded-xl
                text-white
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:scale-110
              `}
            >
              <item.icon size={30} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Sales Overview */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            transition-all
            duration-300
            hover:shadow-2xl
            hover:-translate-y-1
          "
        >
          <h2 className="text-xl font-bold mb-6 text-slate-800">
            Sales Overview
          </h2>

          <div className="h-64 flex items-end gap-3">
            {[40, 70, 50, 90, 60, 100, 80].map(
              (height, index) => (
                <div
                  key={index}
                  className="
                    bg-green-500
                    rounded-t-lg
                    flex-1
                    transition-all
                    duration-500
                    hover:bg-green-600
                    hover:scale-y-110
                    cursor-pointer
                  "
                  style={{
                    height: `${height}%`,
                  }}
                />
              )
            )}
          </div>
        </div>

        {/* Revenue Analytics */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            transition-all
            duration-300
            hover:shadow-2xl
            hover:-translate-y-1
          "
        >
          <h2 className="text-xl font-bold mb-6 text-slate-800">
            Revenue Analytics
          </h2>

          <div className="flex items-center justify-center h-64">
            <div
              className="
                w-48
                h-48
                rounded-full
                border-[25px]
                border-green-500
                border-t-blue-500
                border-r-yellow-500
                transition-all
                duration-700
                hover:rotate-180
                cursor-pointer
              "
            />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-6
          mt-8
          transition-all
          duration-300
          hover:shadow-xl
        "
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-slate-800">
            Recent Orders
          </h2>

          <button
            className="
              bg-green-600
              text-white
              px-4
              py-2
              rounded-lg
              transition-all
              duration-300
              hover:bg-green-700
              hover:scale-105
            "
          >
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-3">Order ID</th>
                <th className="text-left px-4 py-3">Customer</th>
                <th className="text-left px-4 py-3">Amount</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr
                className="
                  border-b
                  transition-all
                  duration-300
                  hover:bg-green-50
                "
              >
                <td className="px-4 py-4 font-medium">
                  #1001
                </td>

                <td className="px-4 py-4">
                  Priya
                </td>

                <td className="px-4 py-4 font-semibold text-green-600">
                  ₹850
                </td>

                <td className="px-4 py-4">
                  <span
                    className="
                      bg-green-100
                      text-green-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      transition-all
                      duration-300
                      hover:scale-110
                      inline-block
                    "
                  >
                    Delivered
                  </span>
                </td>
              </tr>

              <tr
                className="
                  border-b
                  transition-all
                  duration-300
                  hover:bg-yellow-50
                "
              >
                <td className="px-4 py-4 font-medium">
                  #1002
                </td>

                <td className="px-4 py-4">
                  Ravi
                </td>

                <td className="px-4 py-4 font-semibold text-green-600">
                  ₹1,250
                </td>

                <td className="px-4 py-4">
                  <span
                    className="
                      bg-yellow-100
                      text-yellow-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      transition-all
                      duration-300
                      hover:scale-110
                      inline-block
                    "
                  >
                    Pending
                  </span>
                </td>
              </tr>

              <tr
                className="
                  transition-all
                  duration-300
                  hover:bg-blue-50
                "
              >
                <td className="px-4 py-4 font-medium">
                  #1003
                </td>

                <td className="px-4 py-4">
                  Kumar
                </td>

                <td className="px-4 py-4 font-semibold text-green-600">
                  ₹670
                </td>

                <td className="px-4 py-4">
                  <span
                    className="
                      bg-blue-100
                      text-blue-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      transition-all
                      duration-300
                      hover:scale-110
                      inline-block
                    "
                  >
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}