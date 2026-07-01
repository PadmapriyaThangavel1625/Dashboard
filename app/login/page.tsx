"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

export default function LoginPage() {
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Enter Email & Password");
      return;
    }

    setLoading(true);

    try {
      const payload = new URLSearchParams();

      payload.append("email", email);
      payload.append("password", password);

      const res = await fetch(
        "https://sbstechnologies.in/cloud/mobile/login/check_user_login.php",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );

      const data = await res.json();

      if (data.success || data.status) {
        toast.success("OTP Sent Successfully");

        setTimeout(() => {
          setStep(2);
        }, 1000);
      } else {
        toast.error(
          data.message || "Invalid Login Credentials"
        );
      }
    } catch {
      toast.error("Server Connection Failed");
    }

    setLoading(false);
  };

  const verifyOTP = () => {
    if (otp === "1234") {
      toast.success("Login Successful");

      setTimeout(() => {
        window.location.href = "/Dashboard";
      }, 1000);
    } else {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-500 flex items-center justify-center p-5">

      <Toaster position="top-right" />

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">

        <div className="flex justify-center mb-5">

          <Image
            src="/logo.jpg"
            alt="logo"
            width={90}
            height={90}
          />

        </div>

        <h1 className="text-3xl font-bold text-center text-green-700">
          QuickCommerce
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        {step === 1 ? (
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div>

              <label className="font-semibold text-gray-700">
                Email
              </label>

              <div className="relative mt-2">

                <FiMail className="absolute left-3 top-4 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full border rounded-xl py-3 pl-10 pr-3 outline-none focus:border-green-500"
                />

              </div>
            </div>

            <div>

              <label className="font-semibold text-gray-700">
                Password
              </label>

              <div className="relative mt-2">

                <FiLock className="absolute left-3 top-4 text-gray-400" />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full border rounded-xl py-3 pl-10 pr-12 outline-none focus:border-green-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4"
                >
                  {showPassword ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </button>

              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Signing In..."
                : "SIGN IN"}
            </button>

          </form>
        ) : (
          <div className="space-y-6">

            <div className="text-center">

              <h2 className="text-2xl font-bold">
                Verify OTP
              </h2>

              <p className="text-gray-500 mt-2">
                Dummy OTP : <b>1234</b>
              </p>

            </div>

            <input
              type="text"
              maxLength={4}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
              className="w-full border rounded-xl py-3 text-center text-2xl tracking-[10px] outline-none focus:border-green-500"
            />

            <button
              onClick={verifyOTP}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              VERIFY OTP
            </button>

          </div>
        )}
      </div>
    </div>
  );
}