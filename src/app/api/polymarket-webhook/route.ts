import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Get request body
    const body = await req.json().catch(() => null);

    // Get headers
    const headers = Object.fromEntries(req.headers.entries());

    // Get query parameters
    const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

    // Log the request details
    console.log("=== Polymarket Webhook Request ===");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", JSON.stringify(headers, null, 2));
    console.log("Query Params:", JSON.stringify(searchParams, null, 2));
    console.log("Body:", JSON.stringify(body, null, 2));
    console.log("===================================");

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Webhook received and logged",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing webhook:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to process webhook",
        message: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}

// Also handle GET requests for testing
export async function GET(req: NextRequest) {
  console.log("=== Polymarket Webhook GET Request ===");
  console.log("URL:", req.url);
  console.log(
    "Query Params:",
    Object.fromEntries(req.nextUrl.searchParams.entries())
  );
  console.log("======================================");

  return NextResponse.json(
    {
      message: "Webhook endpoint is active",
      method: "GET",
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}
