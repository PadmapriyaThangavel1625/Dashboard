"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function 
({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1">
        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <div className="p-6 bg-gray-100 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}