import { Pencil, Trash2 } from "lucide-react";

export default function TableBox() {
  const users = [
    {
      id: 1,
      name: "John",
      status: "Paid",
    },
    {
      id: 2,
      name: "Emma",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">
          Recent Orders
        </h3>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="py-3">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.status}</td>

              <td>
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white p-2 rounded">
                    <Pencil size={16} />
                  </button>

                  <button className="bg-red-500 text-white p-2 rounded">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}