"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    const cleanPassword = password;

    if (!cleanEmail || !cleanPassword) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const payload = new URLSearchParams();
      payload.append("email", cleanEmail);
      payload.append("password", cleanPassword);

      const response = await fetch(
        "https://sbstechnologies.in/cloud/mobile/login/check_user_login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      console.log("API RESPONSE:", data);

      if (data.success === true || data.status === true) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.data || data)
        );

        alert("Login Successful!");

        router.push("/Dashboard");
      } else {
        alert(
          data.message ||
            data.msg ||
            "Warning! Please check login credentials."
        );
      }
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        "Unable to connect to the server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-500 p-5">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-green-500 text-white text-3xl font-bold flex items-center justify-center shadow-lg">
            S
          </div>
        </div>

        <h1 className="text-3xl font-bold text-green-700 text-center">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-green-500 focus:ring-4 focus:ring-green-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-20 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-green-500 focus:ring-4 focus:ring-green-200 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition duration-200 disabled:bg-green-300 disabled:cursor-not-allowed"
          >
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </div>
  );
}