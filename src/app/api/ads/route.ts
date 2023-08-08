import { NextResponse } from "next/server";

import ads from "@/mocks/ads.json";

export async function GET(req: Request) {
  return NextResponse.json(ads);
}
