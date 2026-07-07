"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface AddCategoryDrawerProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCategoryDrawer({
  open,
  onClose,
  onSuccess,
}: AddCategoryDrawerProps) {
  const [image, setImage] = useState<File | null>(null);
  const [icon, setIcon] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    category_id: "",
    category_name: "",
    slug: "",
    description: "",
    display_order: "",
    is_featured: "0",
    status: "1",
  });

  const saveCategory = async () => {
    try {
      const data = new FormData();

      data.append("category_id", formData.category_id);
      data.append("category_name", formData.category_name);
      data.append("slug", formData.slug);
      data.append("description", formData.description);
      data.append("display_order", formData.display_order);
      data.append("is_featured", formData.is_featured);
      data.append("status", formData.status);

      if (image) {
        data.append("image_url", image);
      }

      if (icon) {
        data.append("icon_url", icon);
      }

      const response = await fetch("/api/categories", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      console.log("Save Response:", result);

      if (response.ok) {
        alert("Category Added Successfully");

        setFormData({
          category_id: "",
          category_name: "",
          slug: "",
          description: "",
          display_order: "",
          is_featured: "0",
          status: "1",
        });

        setImage(null);
        setIcon(null);

        onSuccess();
        onClose();
      } else {
        alert("Failed to add category");
      }

    } catch (error) {
      console.error(error);
      alert("Save Error");
    }
  };


  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50 flex justify-end">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />


      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-xl p-6 overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Category
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <X />
          </button>

        </div>


        <div className="space-y-4">


          <input
            className="w-full border p-3 rounded"
            placeholder="Category ID"
            value={formData.category_id}
            onChange={(e)=>
              setFormData({
                ...formData,
                category_id:e.target.value
              })
            }
          />


          <input
            className="w-full border p-3 rounded"
            placeholder="Category Name"
            value={formData.category_name}
            onChange={(e)=>
              setFormData({
                ...formData,
                category_name:e.target.value
              })
            }
          />


          <input
            className="w-full border p-3 rounded"
            placeholder="Slug"
            value={formData.slug}
            onChange={(e)=>
              setFormData({
                ...formData,
                slug:e.target.value
              })
            }
          />


          <textarea
            className="w-full border p-3 rounded"
            placeholder="Description"
            rows={4}
            value={formData.description}
            onChange={(e)=>
              setFormData({
                ...formData,
                description:e.target.value
              })
            }
          />


          <input
            className="w-full border p-3 rounded"
            placeholder="Display Order"
            value={formData.display_order}
            onChange={(e)=>
              setFormData({
                ...formData,
                display_order:e.target.value
              })
            }
          />


          <select
            className="w-full border p-3 rounded"
            value={formData.is_featured}
            onChange={(e)=>
              setFormData({
                ...formData,
                is_featured:e.target.value
              })
            }
          >
            <option value="0">
              Not Featured
            </option>

            <option value="1">
              Featured
            </option>

          </select>


          <select
            className="w-full border p-3 rounded"
            value={formData.status}
            onChange={(e)=>
              setFormData({
                ...formData,
                status:e.target.value
              })
            }
          >

            <option value="1">
              Active
            </option>

            <option value="0">
              Inactive
            </option>

          </select>



          <div>
            <label className="block mb-2 font-medium">
              Category Image
            </label>

            <input
              type="file"
              onChange={(e)=>
                setImage(
                  e.target.files?.[0] || null
                )
              }
            />
          </div>



          <div>
            <label className="block mb-2 font-medium">
              Category Icon
            </label>

            <input
              type="file"
              onChange={(e)=>
                setIcon(
                  e.target.files?.[0] || null
                )
              }
            />
          </div>



          <button
            onClick={saveCategory}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
          >
            Save Category
          </button>


        </div>

      </div>

    </div>
  );
}