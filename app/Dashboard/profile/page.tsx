"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("address");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleUpdate = () => {
    setMessage("Profile Updated Successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleChangePassword = () => {
    setMessage("Password Changed Successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const history = [
    {
      date: "19-06-2026",
      time: "09:15 AM",
      ip: "192.168.1.1",
    },
    {
      date: "18-06-2026",
      time: "04:30 PM",
      ip: "192.168.1.2",
    },
  ];

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-5">
      {message && (
        <div className="fixed top-5 right-5 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          {message}
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-green-700 text-white text-center p-8">
              <img
                src={user.photo}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white object-cover"
              />

              <h2 className="text-3xl mt-4">
                {user.user_name}
              </h2>

              <p className="mt-2">
                USER
              </p>
            </div>

            <div className="p-5">
              <div className="border-b py-3">
                {user.user_email}
              </div>

              <div className="border-b py-3 flex justify-between">
                <span>Mobile</span>
                <span>{user.mobile_no}</span>
              </div>

              <div className="border-b py-3 flex justify-between">
                <span>Referral</span>
                <span>{user.referral_code}</span>
              </div>

              <div className="border-b py-3 flex justify-between">
                <span>Reg Date</span>
                <span>{user.date_created}</span>
              </div>

              <button
                onClick={handleChangePassword}
                className="w-full mt-5 bg-green-700 hover:bg-sky-700 text-white py-3 rounded"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-12 lg:col-span-9">
          <div className="bg-white rounded-lg shadow">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("address")}
                className={`px-6 py-4 ${
                  activeTab === "address"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : ""
                }`}
              >
                Address
              </button>

              <button
                onClick={() => setActiveTab("bank")}
                className={`px-6 py-4 ${
                  activeTab === "bank"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : ""
                }`}
              >
                Bank
              </button>

              <button
                onClick={() => setActiveTab("history")}
                className={`px-6 py-4 ${
                  activeTab === "history"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : ""
                }`}
              >
                User Log History
              </button>
            </div>

            {activeTab === "address" && (
              <div className="p-6 space-y-4">
                <input className="w-full border p-3 rounded" defaultValue="118/B" />
                <input className="w-full border p-3 rounded" defaultValue="MARIYAMMAN KOVIL STREET" />
                <input className="w-full border p-3 rounded" defaultValue="VAIKKALMEDU" />
                <input className="w-full border p-3 rounded" defaultValue="PARK" />
                <input className="w-full border p-3 rounded" defaultValue="GOBICHETTIPALAYAM" />
                <input className="w-full border p-3 rounded" defaultValue="TAMIL NADU" />
                <input className="w-full border p-3 rounded" defaultValue="INDIA" />
                <input className="w-full border p-3 rounded" defaultValue="638476" />

                <div className="text-right">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-700 hover:bg-sky-700 text-white px-6 py-3 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}

            {activeTab === "bank" && (
              <div className="p-6 space-y-4">
                <input className="w-full border p-3 rounded" defaultValue="State Bank of India" />
                <input className="w-full border p-3 rounded" defaultValue="123456789012" />
                <input className="w-full border p-3 rounded" defaultValue="SBIN0001234" />
                <input className="w-full border p-3 rounded" defaultValue="Gobichettipalayam" />

                <div className="text-right">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-700 hover:bg-sky-700 text-white px-6 py-3 rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="p-6 overflow-auto">
                <table className="w-full border">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border p-3">Date</th>
                      <th className="border p-3">Time</th>
                      <th className="border p-3">IP Address</th>
                    </tr>
                  </thead>

                  <tbody>
                    {history.map((item, index) => (
                      <tr key={index}>
                        <td className="border p-3">{item.date}</td>
                        <td className="border p-3">{item.time}</td>
                        <td className="border p-3">{item.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}