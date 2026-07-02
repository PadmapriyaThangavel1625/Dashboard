"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Users,
  Package,
  Settings,
  FolderTree,
  ShoppingCart,
  Bike,
  Ticket,
  BarChart3,
  CreditCard,
  Bell,
  Shield,
} from "lucide-react";

interface User {
  name: string;
  role: string;
  photo: string;
}

export default function Sidebar({
  collapsed,
}: {
  collapsed: boolean;
}) {
  const [user, setUser] = useState<User>({
    name: "Guest",
    role: "Admin",
    photo: "/profile.jpg",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const data = JSON.parse(storedUser);

      setUser({
        name: data.name || "Guest",
        role: data.role || "Admin",
        photo: data.photo || "/profile.jpg",
      });
    }
  }, []);

  const menus = [
    { name: "Dashboard", icon: Home, link: "/Dashboard" },
    { name: "Profile", icon: FolderTree, link: "/Dashboard/profile" },
    {
      name: "Manage Categories",
      icon: FolderTree,
      link: "/Dashboard/categories",
    },
    {
      name: "Manage Products",
      icon: FolderTree,
      link: "/Dashboard/products",
    },
    {
      name: "Inventory Management",
      icon: Package,
      link: "/Dashboard/inventory",
    },
    {
      name: "Order Management",
      icon: ShoppingCart,
      link: "/Dashboard/orders",
    },
    {
      name: "Customer Management",
      icon: Users,
      link: "/Dashboard/customer",
    },
    {
      name: "Delivery Partner Management",
      icon: Bike,
      link: "/Dashboard/delivery-partners",
    },
    {
      name: "Coupons & Offers",
      icon: Ticket,
      link: "/Dashboard/coupons",
    },
    {
      name: "Reports & Analytics",
      icon: BarChart3,
      link: "/Dashboard/reports",
    },
    {
      name: "Payment Management",
      icon: CreditCard,
      link: "/Dashboard/payment",
    },
    {
      name: "Notifications",
      icon: Bell,
      link: "/Dashboard/notifications",
    },
    {
      name: "Admin & Roles",
      icon: Shield,
      link: "/Dashboard/admin-roles",
    },
    {
      name: "Settings",
      icon: Settings,
      link: "/Dashboard/settings",
    },
  ];

  return (
    <div
      className={`bg-slate-900 text-white flex flex-col min-h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="p-5 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          {collapsed ? "A" : "Admin"}
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-4 px-2 space-y-2">
          {menus.map((menu, index) => {
            const Icon = menu.icon;

            return (
              <li key={index}>
                <Link
                  href={menu.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition"
                >
                  <Icon size={20} />
                  {!collapsed && <span>{menu.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="border-t border-slate-700 p-4">
          <div className="flex items-center gap-3">

            <Image
              src={user.photo || "/profile.jpg"}
              alt="Profile"
              width={45}
              height={45}
              className="rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />

            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-400">{user.role}</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}