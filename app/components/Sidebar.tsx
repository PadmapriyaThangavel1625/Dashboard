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

      {/* Profile Section */}
      {!collapsed && (
        <div className="p-4 border-b border-slate-700">
          <div className="flex flex-col items-center">
            <Image
              src={profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full border-2 border-green-500 object-cover"
            />

            <h3 className="mt-3 font-semibold">Padmapriya</h3>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

            <div className="flex items-center gap-1 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-green-400">
                Online
              </span>
            </div>

            {/* Upload Button */}
            <label className="mt-3 cursor-pointer bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm">
              Import Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}

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