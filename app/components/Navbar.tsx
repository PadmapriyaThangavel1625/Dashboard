"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, LogOut, Search } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
  // Remove user data
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Show success toast
  toast.success("Logout Successfully! 👋", {
    duration: 2000,
    style: {
      background: "#16a34a",
      color: "#fff",
    },
  });

  // Redirect after toast
  setTimeout(() => {
    router.replace("/login");
  }, 2000);
};
  return (
    <header className="h-16 bg-green-700 shadow-md px-6 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg bg-green-800 hover:bg-green-900 transition"
        >
          <Menu size={22} className="text-white" />
        </button>

        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 w-96 shadow">
          <Search size={18} className="text-green-700" />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src={user?.photo || "/profile.jpg"}
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover border-2 border-white"
            onError={(e) => {
              e.currentTarget.src = "/profile.jpg";
            }}
          />

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-white">
              {user?.user_name || "Guest"}
            </h3>

            <p className="text-xs text-green-100">ADMIN</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-full font-semibold transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}