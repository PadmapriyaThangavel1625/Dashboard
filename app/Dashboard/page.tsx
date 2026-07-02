import StatCard from "@/app/components/StatCard";
import ChartBox from "@/app/components/ChartBox";
import TopSellingProducts from "@/app/components/TopSellingProducts";
import RecentOrders from "@/app/components/RecentOrders";
import CustomerGrowth from "@/app/components/CustomerGrowth";
import TrafficSource from "@/app/components/TrafficSource";

export default function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* TOP STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        <StatCard
          title="Total Revenue"
          value="$24,780"
          type="revenue"
        />

        <StatCard
          title="Total Orders"
          value="1,428"
          type="orders"
        />

        <StatCard
          title="Total Customers"
          value="2,354"
          type="customers"
        />

        <StatCard
          title="Total Products"
          value="568"
          type="products"
        />
      </div>

      {/* SALES OVERVIEW + TOP SELLING */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
        }}
      >
        <ChartBox />
        <TopSellingProducts />
      </div>

      {/* BOTTOM SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 20,
        }}
      >
        <RecentOrders />
        <CustomerGrowth />
        <TrafficSource />
      </div>
    </div>
  );
}