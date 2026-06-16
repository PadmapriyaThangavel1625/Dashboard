export default function AddUserPage() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-5">
        Add User
      </h1>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded"
        />

        <button className="bg-blue-600 text-white p-3 rounded">
          Save User
        </button>
      </div>
    </div>
  );
}