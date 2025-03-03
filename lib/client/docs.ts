import type { DocFile } from "@/types/docs";

export async function fetchDocs(): Promise<DocFile[]> {
  try {
    const response = await fetch("/api/docs");
    if (!response.ok) {
      throw new Error("Failed to fetch docs");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching docs:", error);
    return [];
  }
}
