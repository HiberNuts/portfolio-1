// app/api/privy-wallets/route.ts
import { NextRequest, NextResponse } from "next/server";

const PRIVY_BASE_URL = "https://api.privy.io/v1/wallets";

type PrivyWallet = {
  id: string;
  address: string;
  chain_type: string;
  // other fields ignored
};

type PrivyResponse = {
  data: PrivyWallet[];
  next_cursor?: string | null;
};

export async function GET(req: NextRequest) {
  const basicAuth = process.env.PRIVY_BASIC_AUTH;
  const appId = process.env.PRIVY_APP_ID;

  if (!basicAuth || !appId) {
    return NextResponse.json(
      { error: "Privy credentials not configured" },
      { status: 500 }
    );
  }

  // optional query params to control behavior
  const urlParams = req.nextUrl.searchParams;
  const chainType = urlParams.get("chain_type") ?? "ethereum";
  const pageLimit = Number(urlParams.get("limit") ?? "100"); // per-Privy-page
  const maxPages = Number(urlParams.get("max_pages") ?? "10"); // safety cap
  let cursor: string | null | undefined = urlParams.get("cursor"); // optional starting cursor

  const addresses = new Set<string>();
  let pagesFetched = 0;

  try {
    // page loop
    // stops when next_cursor is null/undefined or maxPages reached
    while (true) {
      const u = new URL(PRIVY_BASE_URL);
      u.searchParams.set("chain_type", chainType);
      u.searchParams.set("limit", String(pageLimit));
      if (cursor) u.searchParams.set("cursor", cursor);

      const res = await fetch(u.toString(), {
        method: "GET",
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "privy-app-id": appId,
        },
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        return NextResponse.json(
          {
            error: "Privy request failed",
            status: res.status,
            body: text,
          },
          { status: 502 }
        );
      }

      const json = (await res.json()) as PrivyResponse;

      for (const w of json.data ?? []) {
        if (w.chain_type === chainType && w.address) {
          // normalize case; Dune will parse as hex string
          addresses.add(w.address);
        }
      }

      cursor = json.next_cursor ?? null;
      pagesFetched += 1;

      if (!cursor || pagesFetched >= maxPages) {
        break;
      }
    }

    // Shape matches your Dune SQL: $.data[*].address
    return NextResponse.json({
      chain_type: chainType,
      count: addresses.size,
      data: Array.from(addresses).map((addr) => ({ address: addr })),
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Unexpected server error", message: String(e?.message ?? e) },
      { status: 500 }
    );
  }
}
