import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes", {
    cache: "no-cache",
  });
  const data = await res.json();
  return Response.json(data);
}
