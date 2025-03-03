import { NextResponse } from "next/server";
import { getAllDocs } from "@/lib/server/docs";

export async function GET() {
  try {
    const docs = await getAllDocs();
    return NextResponse.json(docs);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch docs" },
      { status: 500 }
    );
  }
}
