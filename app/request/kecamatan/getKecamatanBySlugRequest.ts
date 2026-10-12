import { getKelurahanDummyByKecamatanSlug } from "@/app/lib/getDummyDataRequest/getKelurahanDummy.reques";
import { KelurahanResponse } from "@/app/types/kota.types";
import { baseUrlWilayah } from "@/app/utils/config";

export async function getKecamatanBySlug(
  slug: string,
): Promise<KelurahanResponse["data"]> {
  if (!slug) return { kelurahans: [] };

  try {
    const response = await fetch(
      `${baseUrlWilayah}/kecamatans/slug/${encodeURIComponent(slug)}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) {
      throw new Error(`API kecamatan mengembalikan HTTP ${response.status}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      throw new Error("Respons API kecamatan bukan JSON");
    }

    const result: KelurahanResponse = await response.json();
    if (!Array.isArray(result.data?.kelurahans)) {
      throw new Error("Data kelurahan tidak valid");
    }

    return { kelurahans: result.data.kelurahans };
  } catch (error) {
    console.error("getKecamatanBySlug error:", error);
    return {
      kelurahans: getKelurahanDummyByKecamatanSlug(slug),
    };
  }
}
