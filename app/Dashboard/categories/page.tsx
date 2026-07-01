"use client";

import { useEffect, useState } from "react";
import { Pencil, Power } from "lucide-react";
import AddCategoryDrawer from "@/app/components/AddCategoryDrawer";

interface Category {
  category_id: number;
  category_name: string;
  slug: string;
  description: string;
  display_order: number;
  is_featured: number;
  is_active: number;
  sub_categories_count?: number;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const res = await fetch("/api/categories", { cache: "no-store" });
      const data = await res.json();

      let list: Category[] = [];

      if (Array.isArray(data)) list = data;
      else if (Array.isArray(data.categories)) list = data.categories;
      else if (Array.isArray(data.data)) list = data.data;

      setCategories(list);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function toggleStatus(category: Category) {
    try {
      const formData = new FormData();
      formData.append("category_id", category.category_id.toString());
      formData.append(
        "is_active",
        category.is_active === 1 ? "0" : "1"
      );

      await fetch("/api/categories/status", {
        method: "POST",
        body: formData,
      });

      loadCategories();
    } catch (err) {
      console.log(err);
    }
  }

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-500">
          Loading Categories...
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex gap-6 items-start">
        {/* Categories List */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Categories List
            </h1>

            {!showPanel && (
              <button
                onClick={() => setShowPanel(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow"
              >
                + Add Category
              </button>
            )}
          </div>

          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="text-left text-gray-400 text-xs uppercase border-b">
                <th className="pb-3 pr-4 font-medium">Display Order</th>
                <th className="pb-3 pr-4 font-medium">Name</th>
                <th className="pb-3 pr-4 font-medium">Slug</th>
                <th className="pb-3 pr-4 font-medium">
                  Sub-Categories
                </th>
                <th className="pb-3 pr-4 font-medium">Status</th>
                <th className="pb-3 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr
                    key={category.category_id}
                    className="border-b last:border-0"
                  >
                    <td className="py-4 pr-4 text-gray-700">
                      {category.display_order}
                    </td>

                    <td className="py-4 pr-4 font-semibold text-gray-800">
                      {category.category_name}
                    </td>

                    <td className="py-4 pr-4 text-blue-500">
                      {category.slug}
                    </td>

                    <td className="py-4 pr-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold">
                        {category.sub_categories_count ?? 0}
                      </span>
                    </td>

                    <td className="py-4 pr-4">
                      {category.is_active === 1 ? (
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                          ACTIVE
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                          INACTIVE
                        </span>
                      )}
                    </td>

                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50"
                          title="Edit"
                        >
                          <Pencil size={14} className="text-gray-500" />
                        </button>

                        <button
                          onClick={() => toggleStatus(category)}
                          className="w-8 h-8 flex items-center justify-center border border-amber-200 bg-amber-50 rounded-lg hover:bg-amber-100"
                          title="Toggle Status"
                        >
                          <Power size={14} className="text-amber-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-16">
                    <div className="text-5xl mb-3">📂</div>
                    <h2 className="text-xl font-bold text-gray-700">
                      No Categories Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                      Add your first category using the panel.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Category Panel (button-triggered) */}
        {showPanel && (
          <AddCategoryDrawer
          open={showPanel}
          onClose={() => setShowPanel(false)}
          onSuccess={() => {
            loadCategories();
            setShowPanel(false);
          }}
        />
        )}
      </div>
    </div>
  );
}