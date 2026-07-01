import { NextResponse } from "next/server";

const API_URL = "https://sbstechnologies.in/ecommerce/api/fetch_categories.php";

// Force Next.js to treat this endpoint as dynamic and skip server-side build caching
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Appending timestamp '?t=' breaks any hidden browser or proxy cache layers
    const res = await fetch(`${API_URL}?t=${Date.now()}`, { 
      cache: "no-store",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
      }
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { status: false, message: "Failed to load categories", error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const incomingForm = await req.formData();
    const forwardForm = new FormData();

    // Map fields and files properly to regenerate missing multipart boundaries
    incomingForm.forEach((value, key) => {
      forwardForm.append(key, value);
    });

    const res = await fetch(API_URL, {
      method: "POST",
      body: forwardForm,
    });

    const text = await res.text();

    try {
      return NextResponse.json(text ? JSON.parse(text) : { status: false });
    } catch {
      return NextResponse.json({
        status: false,
        message: "PHP backend returned invalid format instead of standard JSON string.",
        raw_debug: text,
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      status: false,
      message: "Data transmission failed inside Next.js server route",
      error: err.message,
    });
  }
}