import { NextResponse } from "next/server";

import posts from "@/mocks/posts.json";
import { IPost } from "@/types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (!searchParams.has("id")) return NextResponse.json<IPost[]>(posts);
  const queryId = searchParams.get("id");
  const postData = posts.find((post) => post.id === queryId);
  if (!postData) return NextResponse.next();
  return NextResponse.json<IPost>(postData);
}
