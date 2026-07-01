"use client";

import { useRouter } from "next/navigation";
import { Menu, LogOut } from "lucide-react";

export default function Navbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token"); // optional
      router.push("/login");
    }
  };

  return (
    <div className="h-16 bg-green-700 text-white flex items-center justify-between px-6">
      <button onClick={() => setCollapsed(!collapsed)}>
        <Menu />
      </button>

      <div className="font-semibold text-lg">
        Admin Dashboard
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}