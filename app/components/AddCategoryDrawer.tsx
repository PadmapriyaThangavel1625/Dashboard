"use client";

import { useEffect, useState } from "react";
import { X, Upload } from "lucide-react";

interface Category {
  category_id: number;
  category_name: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCategoryDrawer({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [categoryName, setCategoryName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [displayOrder, setDisplayOrder] = useState(0);

  const [isActive, setIsActive] = useState(1);
  const [isFeatured, setIsFeatured] = useState(0);

  const [parentCategory, setParentCategory] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const res = await fetch("/api/categories");

      const data = await res.json();

      let list: Category[] = [];

      if (Array.isArray(data)) {
        list = data;
      } else if (Array.isArray(data.categories)) {
        list = data.categories;
      } else if (Array.isArray(data.data)) {
        list = data.data;
      }

      setCategories(list);
    } catch (err) {
      console.error(err);
    }
  }
  // Auto Generate Slug
  useEffect(() => {
    const generatedSlug = categoryName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    setSlug(generatedSlug);
  }, [categoryName]);

  // Submit Form
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("category_name", categoryName);
      formData.append("slug", slug);
      formData.append("description", description);
      formData.append("display_order", displayOrder.toString());
      formData.append("is_active", isActive.toString());
      formData.append("is_featured", isFeatured.toString());
      formData.append("parent_category_id", parentCategory);

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/categories", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.status) {
        alert("✅ Category Added Successfully");

        // Reset Form
        setCategoryName("");
        setSlug("");
        setDescription("");
        setDisplayOrder(0);
        setIsActive(1);
        setIsFeatured(0);
        setParentCategory("");
        setImage(null);

        // Refresh Category List
        onSuccess();

        // Close Drawer
        onClose();
      } else {
        alert(data.message || "Failed to add category");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[500px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <div>
            <h2 className="text-2xl font-bold text-green-700">
              Add Category
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Create a new product category
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-red-50 hover:text-red-500 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5 overflow-y-auto h-[calc(100vh-90px)]"
        >
          {/* Category Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Name
            </label>

            <input
              required
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Slug
            </label>

            <input
              value={slug}
              readOnly
              className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3"
            />
          </div>

          {/* Parent Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Parent Category
            </label>

            <select
              value={parentCategory}
              onChange={(e) => setParentCategory(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Main Category</option>

              {categories.map((item) => (
                <option key={item.category_id} value={item.category_id}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Category description"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Display Order */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Display Order
            </label>

            <input
              type="number"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(Number(e.target.value))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Category Image */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full rounded-xl border border-gray-300 px-3 py-3 file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-green-600 file:text-white file:rounded-lg file:cursor-pointer"
            />

            {image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-xl border shadow"
                />
              </div>
            )}
          </div>

          {/* Featured & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured
              </label>

              <select
                value={isFeatured}
                onChange={(e) => setIsFeatured(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={0}>No</option>
                <option value={1}>Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>

              <select
                value={isActive}
                onChange={(e) => setIsActive(Number(e.target.value))}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 rounded-xl py-3 font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white rounded-xl py-3 font-semibold transition"
            >
              {loading ? "Saving..." : "Save Category"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
