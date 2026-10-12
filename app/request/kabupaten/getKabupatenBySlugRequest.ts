import { getKecamatanDummyByKabupatenSlug } from "@/app/lib/getDummyDataRequest/getKecamatanDummy.request";
import { KecamatanResponse } from "@/app/types/kota.types";
import { baseUrlWilayah } from "@/app/utils/config";

export async function getKabupatenBySlug(
  slug: string,
): Promise<KecamatanResponse["data"]> {
  if (!slug) return { kecamatans: [] };

  try {
    const response = await fetch(
      `${baseUrlWilayah}/kabupatens/slug/${encodeURIComponent(slug)}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) {
      throw new Error(`API kabupaten mengembalikan HTTP ${response.status}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      throw new Error("Respons API kabupaten bukan JSON");
    }

    const result: KecamatanResponse = await response.json();
    if (!Array.isArray(result.data?.kecamatans)) {
      throw new Error("Data kecamatan tidak valid");
    }

    return result.data;
  } catch (error) {
    console.error("getKabupatenBySlug error:", error);
    return {
      kecamatans: getKecamatanDummyByKabupatenSlug(slug),
    };
  }
}
