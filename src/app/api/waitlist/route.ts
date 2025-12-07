import { NextResponse } from "next/server";
import { BACKEND_URL } from "../../../../constants";

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/waitList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Upstream error", status: res.status, body: text },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}