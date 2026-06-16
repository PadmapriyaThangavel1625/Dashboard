"use client";

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

      <div className="font-semibold">
        Admin Dashboard
      </div>
    </div>
  );
}