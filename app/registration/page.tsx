
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  User,
  Mail,
  AtSign,
  Lock,
  Calendar,
  CheckCircle,
  Eye,
  EyeOff,
  X,
} from "lucide-react";

export default function RegistrationPage() {
  const [registered, setRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setRegistered(true);
    setShowPopup(true);
  };

  return (
    <main className="relative min-h-screen bg-slate-50 p-8 overflow-hidden">

      {/* Decorations */}
      <div className="absolute top-10 left-10 grid grid-cols-4 gap-3 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-purple-500"
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-3 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-cyan-500"
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto ">

        {/* LEFT */}
        <div>
          

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white">
                <User size={42} />
              </div>
            </div>

            <h1 className="text-center text-4xl font-bold mt-6">
              Create Your Account
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Join us today! Fill in the details to get started.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <InputField
                label="Full Name"
                icon={<User size={18} />}
                placeholder="Enter your full name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <InputField
                label="Email Address"
                icon={<Mail size={18} />}
                placeholder="Enter your email address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <InputField
                label="Username"
                icon={<AtSign size={18} />}
                placeholder="Choose a username"
                name="username"
                value={form.username}
                onChange={handleChange}
              />

              <PasswordField
                label="Password"
                name="password"
                value={form.password}
                show={showPassword}
                setShow={setShowPassword}
                onChange={handleChange}
              />

              <PasswordField
                label="Confirm Password"
                name="confirmPassword"
                value={form.confirmPassword}
                show={showConfirmPassword}
                setShow={setShowConfirmPassword}
                onChange={handleChange}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium mb-2 block">
                    Date of Birth
                  </label>

                  <div className="flex items-center border rounded-xl px-3">
                    <Calendar
                      size={18}
                      className="text-purple-600"
                    />

                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className="w-full p-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium mb-2 block">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  >
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" required />
                <span className="text-sm text-gray-600">
                  I agree to the Terms & Conditions and Privacy Policy
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-xl font-semibold"
              >
                Create Account
              </button>

              <p className="text-center text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          

          <div className="bg-white rounded-3xl shadow-lg p-10 h-full flex items-center justify-center">

            {!registered ? (
              <p className="text-gray-400 text-xl">
                Fill the form and submit
              </p>
            ) : (
              <div className="text-center w-full">

                <div className="relative flex justify-center">
                  <div className="absolute -top-6 flex gap-6">
                    

            <div className="absolute top-12 left-12 w-3 h-3 bg-pink-500 rotate-45"></div>
            <div className="absolute top-20 left-24 w-3 h-3 bg-blue-500 rotate-45"></div>
            <div className="absolute top-14 right-24 w-3 h-3 bg-green-500 rotate-45"></div>
            <div className="absolute top-24 right-12 w-3 h-3 bg-yellow-500 rotate-45"></div>

                  </div>

                  <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle
                      size={90}
                      className="text-green-500"
                    />
                  </div>
                </div>

                <h2 className="text-5xl font-bold mt-8">
                  Registration Successful!
                </h2>

                <p className="mt-4 text-gray-600">
                  Welcome {form.name}
                </p>

                <p className="text-gray-500">
                  @{form.username}
                </p>

                <p className="text-gray-500 mb-8">
                  {form.email}
                </p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-green-700 mb-8">
                  Your account has been created successfully.
                  <br />
                  You can now log in and explore our features.
                </div>

                <Link
                  href="/login"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg"
                >
                  Go to Login →
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl shadow-2xl p-10 w-[500px] text-center relative">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>

            <div className="absolute top-12 left-12 w-3 h-3 bg-pink-500 rotate-45"></div>
            <div className="absolute top-20 left-24 w-3 h-3 bg-blue-500 rotate-45"></div>
            <div className="absolute top-14 right-24 w-3 h-3 bg-green-500 rotate-45"></div>
            <div className="absolute top-24 right-12 w-3 h-3 bg-yellow-500 rotate-45"></div>

            <div className="w-36 h-36 mx-auto rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle
                size={100}
                className="text-green-500"
              />
            </div>

            <h2 className="text-4xl font-bold text-green-600 mt-6">
              Registration Successful!
            </h2>

            <p className="text-gray-600 mt-4">
              Your account has been created successfully.
            </p>

            <p className="text-gray-500">
              You can now log in and explore our features.
            </p>

            <Link
              href="/login"
              className="inline-block mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-xl font-semibold"
            >
              Go to Login
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

function InputField({
  label,
  icon,
  ...props
}: any) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        {label}
      </label>

      <div className="flex items-center border rounded-xl px-3">
        <div className="text-purple-600">
          {icon}
        </div>

        <input
          {...props}
          className="w-full p-3 outline-none"
        />
      </div>
    </div>
  );
}

function PasswordField({
  label,
  show,
  setShow,
  ...props
}: any) {
  return (
    <div>
      <label className="font-medium mb-2 block">
        {label}
      </label>

      <div className="flex items-center border rounded-xl px-3">
        <Lock
          size={18}
          className="text-purple-600"
        />

        <input
          {...props}
          type={show ? "text" : "password"}
          className="w-full p-3 outline-none"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

