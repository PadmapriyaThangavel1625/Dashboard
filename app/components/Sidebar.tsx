"use client";

import { useState } from "react";
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
  User,
} from "lucide-react";

export default function Sidebar({
  collapsed,
}: {
  collapsed: boolean;
}) {
  const [profileImage, setProfileImage] = useState("/profile.jpg");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div
      className={`bg-slate-900 text-white min-h-screen overflow-y-auto transition-all duration-300 ${
      collapsed ? "w-20" : "w-64"
    }`}
    >
      {/* Header */}
      <div className="p-4 text-2xl font-bold border-b border-slate-700">
        {collapsed ? "A" : "Admin"}
      </div>

      

      {/* Menu */}
      <ul className="mt-5 space-y-2 px-2">
        <li>
          <Link
            href="/Dashboard"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Home size={20} />
            {!collapsed && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link
            href="/Dashboard/profile"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <FolderTree size={20} />
            {!collapsed && "Profile"}
          </Link>
        </li>

        

        <li>
          <Link
            href="/Dashboard/categories"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <FolderTree size={20} />
            {!collapsed && "Manage Categories"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/products"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <FolderTree size={20} />
            {!collapsed && "Manage Products"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/inventory"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Package size={20} />
            {!collapsed && "Inventory Management"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/orders"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <ShoppingCart size={20} />
            {!collapsed && "Order Management"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/customer"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Users size={20} />
            {!collapsed && "Customer Management"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/delivery-partners"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Bike size={20} />
            {!collapsed && "Delivery Partner Management"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/coupons"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Ticket size={20} />
            {!collapsed && "Coupons & Offers"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/reports"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <BarChart3 size={20} />
            {!collapsed && "Reports & Analytics"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/payment"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <CreditCard size={20} />
            {!collapsed && "Payment Management"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/notifications"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Bell size={20} />
            {!collapsed && "Notifications"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/admin-roles"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Shield size={20} />
            {!collapsed && "Admin & Roles"}
          </Link>
        </li>

        <li>
          <Link
            href="/Dashboard/settings"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Settings size={20} />
            {!collapsed && "Settings"}
          </Link>
        </li>
      </ul>
    </div>
  );
}