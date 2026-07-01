import { NextResponse } from "next/server";

const API_URL =
  "https://sbstechnologies.in/ecommerce/api/fetch_categories.php";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(`${API_URL}?t=${Date.now()}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        message: "Failed to fetch categories.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const incomingForm = await req.formData();
    const formData = new FormData();

    incomingForm.forEach((value, key) => {
      formData.append(key, value);
    });

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const text = await response.text();

    try {
      return NextResponse.json(JSON.parse(text));
    } catch {
      return NextResponse.json({
        status: false,
        message: "Invalid JSON received from PHP API.",
        raw_response: text,
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        message: "Failed to process request.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}