"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Category {
  category_id: string;
  category_name: string;
  image_url: string | null;
  icon_url?: string | null;
  sub_categories: any[];
}

const IMAGE_PATH = "https://sbstechnologies.in/ecommerce/images/categories/images/";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Form states
  const [category_name, setCategoryName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [display_order, setDisplayOrder] = useState(1);
  const [is_active, setIsActive] = useState(1);

  // File states
  const [image, setImage] = useState<File | null>(null);
  const [icon, setIcon] = useState<File | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      // Bust browser cache during state refetches by appending a unique timestamp
      const res = await fetch(`/api/categories?t=${Date.now()}`);
      const data = await res.json();
      
      console.log("--- Loaded UI Grid Data ---", data);
      if (data.status) {
        setCategories(data.data || []);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  }

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  }

  function validateFile(file: File | null) {
    if (!file) return true;
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("Only JPG or PNG format allowed");
      return false;
    }
    if (file.size > 1024 * 1024) {
      alert("File size exceeds 1MB limit");
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!category_name.trim()) return alert("Please enter a category name");
    if (!validateFile(image) || !validateFile(icon)) return;

    const form = new FormData();
    form.append("action", "add");
    form.append("category_name", category_name);
    form.append("slug", slug || generateSlug(category_name));
    form.append("description", description);
    form.append("display_order", String(display_order));
    form.append("is_active", String(is_active));

    if (image) {
      const ext = image.name.split(".").pop();
      const renamed = new File([image], `${Date.now()}_category.${ext}`, { type: image.type });
      form.append("image", renamed);
    }

    if (icon) {
      const ext = icon.name.split(".").pop();
      const renamed = new File([icon], `${Date.now()}_icon.${ext}`, { type: icon.type });
      form.append("icon", renamed);
    }

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      
      // Look at your browser console layout tab to inspect these logs!
      console.log("--- Submission Server Response ---", data);

      alert(data.message || "Operation complete.");

      if (data.status === true || data.status === "true" || data.status === 1) {
        setShowModal(false);
        setCategoryName("");
        setSlug("");
        setDescription("");
        setImage(null);
        setIcon(null);
        
        console.log("Triggering UI re-fetch query...");
        fetchCategories();
      } else {
        console.warn("Server processed request but returned a false status flag.");
      }
    } catch (err) {
      console.error("Critical submission failure:", err);
      alert("An unexpected layout error occurred during submission.");
    }
  }

  if (loading) {
    return <div className="flex h-screen items-center justify-center font-medium text-gray-600">Loading items...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* HEADER SECTION */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-green-700">Categories</h1>
        <button
          onClick={() => setShowModal(true)}
          className="rounded bg-green-600 px-4 py-2 font-medium text-white shadow hover:bg-green-700 transition"
        >
          + Add Category
        </button>
      </div>

      {/* CATEGORIES GRID */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <div key={cat.category_id} className="overflow-hidden rounded-lg bg-white p-3 shadow transition hover:shadow-md">
            <div className="relative h-40 w-full bg-gray-50 rounded overflow-hidden">
              <Image
                src={cat.image_url ? IMAGE_PATH + cat.image_url : "/no-image.jpg"}
                alt={cat.category_name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h2 className="mt-3 font-semibold text-gray-800">{cat.category_name}</h2>
          </div>
        ))}
      </div>

      {/* FORM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-[450px] rounded-lg bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Add New Category</h2>

            <div className="space-y-3">
              <input
                className="w-full rounded border p-2 text-sm focus:outline-green-500"
                placeholder="Category Name"
                value={category_name}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <input
                className="w-full rounded border p-2 text-sm focus:outline-green-500"
                placeholder="Slug (Optional)"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />

              <textarea
                className="w-full rounded border p-2 text-sm focus:outline-green-500"
                placeholder="Description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Category Image</label>
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="w-full mt-1 text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-500">Category Icon</label>
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="w-full mt-1 text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  onChange={(e) => setIcon(e.target.files?.[0] || null)}
                />
              </div>

              <input
                type="number"
                className="w-full rounded border p-2 text-sm focus:outline-green-500"
                placeholder="Display Order"
                value={display_order}
                onChange={(e) => setDisplayOrder(Number(e.target.value))}
              />

              <select
                className="w-full rounded border p-2 text-sm focus:outline-green-500"
                value={is_active}
                onChange={(e) => setIsActive(Number(e.target.value))}
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
              >
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}