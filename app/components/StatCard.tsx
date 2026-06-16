export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}