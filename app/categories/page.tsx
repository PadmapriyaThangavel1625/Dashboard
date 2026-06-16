"use client";

import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Upload,
  X,
} from "lucide-react";

import {
  Category,
  categoryData,
} from "@/app/data/categories";

export default function CategoriesPage() {
  const [categories, setCategories] =
    useState<Category[]>(categoryData);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [search, setSearch] = useState("");
  const [categoryName, setCategoryName] =
    useState("");
  const [status, setStatus] =
    useState("Active");
  const [image, setImage] = useState("");

  const filteredCategories =
    categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  const resetForm = () => {
    setCategoryName("");
    setImage("");
    setStatus("Active");
    setEditingId(null);
    setShowModal(false);
  };

  const handleSave = () => {
    if (!categoryName.trim()) {
      alert("Enter Category Name");
      return;
    }

    if (editingId !== null) {
      setCategories(
        categories.map((category) =>
          category.id === editingId
            ? {
                ...category,
                name: categoryName,
                image:
                  image ||
                  category.image,
                status,
              }
            : category
        )
      );
    } else {
      const newCategory: Category = {
        id: Date.now(),
        name: categoryName,
        image:
          image ||
          "https://via.placeholder.com/300x200",
        status,
      };

      setCategories([
        ...categories,
        newCategory,
      ]);
    }

    resetForm();
  };

  const handleEdit = (
    category: Category
  ) => {
    setCategoryName(category.name);
    setImage(category.image);
    setStatus(category.status);

    setEditingId(category.id);
    setShowModal(true);
  };

  const handleDelete = (
    id: number
  ) => {
    setCategories(
      categories.filter(
        (category) =>
          category.id !== id
      )
    );
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Manage Categories
          </h1>

          
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="
            flex items-center gap-2
            bg-green-600 text-white
            px-5 py-3 rounded-xl
            hover:bg-green-700
          "
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative">
          <Search
            size={18}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search Category..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
              w-full pl-10 py-3
              border rounded-xl
            "
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(
          (category) => (
            <div
              key={category.id}
              className="
                bg-white rounded-2xl
                shadow-md overflow-hidden
                hover:shadow-xl
                transition
              "
            >
              <img
                src={category.image}
                alt={category.name}
                className="
                  w-full h-48
                  object-cover
                "
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {category.name}
                </h2>

                <span
                  className={`
                    inline-block mt-3
                    px-3 py-1 rounded-full
                    text-sm
                    ${
                      category.status ===
                      "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {category.status}
                </span>

                <div className="flex gap-2 mt-5">
                  <button
                    onClick={() =>
                      handleEdit(
                        category
                      )
                    }
                    className="
                      flex-1 bg-blue-500
                      text-white py-2
                      rounded-lg
                    "
                  >
                    <Pencil
                      size={16}
                    />
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        category.id
                      )
                    }
                    className="
                      flex-1 bg-red-500
                      text-white py-2
                      rounded-lg
                    "
                  >
                    <Trash2
                      size={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="
            fixed inset-0
            bg-black/50
            flex items-center
            justify-center
          "
        >
          <div className="bg-white p-6 rounded-2xl w-full max-w-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">
                {editingId
                  ? "Edit Category"
                  : "Add Category"}
              </h2>

              <button
                onClick={
                  resetForm
                }
              >
                <X />
              </button>
            </div>

            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) =>
                setCategoryName(
                  e.target.value
                )
              }
              className="
                w-full border
                rounded-xl p-3 mb-4
              "
            />

            <label
              htmlFor="upload"
              className="
                border-2 border-dashed
                rounded-xl p-6
                flex flex-col
                items-center
                cursor-pointer
              "
            >
              <Upload />
              <p>
                Upload Image
              </p>
            </label>

            <input
              id="upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file =
                  e.target
                    .files?.[0];

                if (file) {
                  setImage(
                    URL.createObjectURL(
                      file
                    )
                  );
                }
              }}
            />

            {image && (
              <img
                src={image}
                alt="preview"
                className="
                  w-full h-40
                  object-cover
                  rounded-xl mt-4
                "
              />
            )}

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="
                w-full border
                rounded-xl p-3 mt-4
              "
            >
              <option>
                Active
              </option>
              <option>
                Inactive
              </option>
            </select>

            <div className="flex gap-3 mt-5">
              <button
                onClick={
                  handleSave
                }
                className="
                  flex-1
                  bg-green-600
                  text-white
                  py-3
                  rounded-xl
                "
              >
                {editingId
                  ? "Update"
                  : "Save"}
              </button>

              <button
                onClick={
                  resetForm
                }
                className="
                  flex-1
                  bg-gray-300
                  py-3
                  rounded-xl
                "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}