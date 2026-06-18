"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  return (
    <div className="h-16 bg-green-700 text-white flex items-center justify-between px-6">
      <button onClick={() => setCollapsed(!collapsed)}>
        <Menu />
      </button>

      <div className="font-semibold text-lg">
        Admin Dashboard
      </div>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-5 py-2 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-green-700"
        >
          Login
        </Link>

        <Link
          href="/registration"
          className="px-5 py-2 rounded-lg bg-white text-green-700 font-medium hover:bg-gray-100"
        >
          Register
        </Link>
      </div>
    </div>
  );
}