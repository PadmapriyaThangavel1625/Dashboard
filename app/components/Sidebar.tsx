"use client";

import Link from "next/link";
import { Home, Users, Package, Settings,FolderTree,ShoppingCart ,Bike,Ticket,BarChart3,CreditCard,Bell,Shield} from "lucide-react";

export default function Sidebar({
  collapsed,
}: {
  collapsed: boolean;
}) {
  return (
    <div
      className={`bg-slate-900 text-white h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4 text-2xl font-bold border-b border-slate-700">
        {collapsed ? "A" : "Admin"}
      </div>

      <ul className="mt-5 space-y-2 px-2">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800"
          >
            <Home size={20} />
            {!collapsed && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
          >
            <FolderTree size={20} />
            {!collapsed && "Manage Categories"}
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
          >
            <FolderTree size={20} />
            {!collapsed && "Manage Products"}
          </Link>
        </li>

        <li>
          <Link
            href="/inventory"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
          >
            <Package size={20} />
            {!collapsed && "Inventory Management"}
          </Link>
        </li>
        <li>
          <Link
            href="/orders"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
          >
            <ShoppingCart size={20} />
            {!collapsed && "Order Management"}
          </Link>
        </li>
        <li>
          <Link
            href="/customer"
            className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
          >
            <Users size={20} />
            {!collapsed && "Customer Management"}
          </Link>
        </li>
        <li>
            <Link
              href="/delivery-partners"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <Bike size={20} />
              {!collapsed && "Delivery Partner Management"}
            </Link>
          </li>
          <li>
            <Link
              href="/coupons"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <Ticket size={20} />
              {!collapsed && "Coupons & Offers"}
            </Link>
          </li>
          {/* NEW ITEM ADDED */}
          <li>
            <Link
              href="/reports"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <BarChart3 size={20} />
              {!collapsed && "Reports & Analytics"}
            </Link>
          </li>
          <li>
            <Link
              href="/payment"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <CreditCard size={20} />
              {!collapsed && "Payment Management"}
            </Link>
          </li>
          <li>
            <Link
              href="/notifications"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <Bell size={20} />
              {!collapsed && "Notifications"}
            </Link>
          </li>
          <li>
            <Link
              href="/admin-roles"
              className="flex items-center gap-3 p-3 rounded hover:bg-slate-800 transition"
            >
              <Shield size={20} />
              {!collapsed && <span className="font-medium">Admin & Roles</span>}
            </Link>
          </li>

        


        <li>
          <Link
            href="/settings"
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