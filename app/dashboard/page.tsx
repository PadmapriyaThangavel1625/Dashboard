import StatCard from "@/app/components/StatCard";
import ChartBox from "@/app/components/ChartBox";
import TableBox from "@/app/components/TableBox";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Users" value="12,450" />
        <StatCard title="Sales" value="$34,200" />
        <StatCard title="Orders" value="1,240" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartBox />
        <TableBox />
      </div>
    </>
  );
}