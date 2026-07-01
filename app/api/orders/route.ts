import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://sbstechnologies.in/quickcommerce/orders.php"
  );

  const text = await response.text();

  return NextResponse.json({
    status: response.status,
    body: text,
  });
}