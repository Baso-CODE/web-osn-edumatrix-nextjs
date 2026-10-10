import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { getKabupatenDummyByKotaSlug } from "@/app/lib/getDummyDataRequest/getKabupatenDummy.request";
import { GetKotaBySlugResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getKotaBySlug(
  slug?: string,
): Promise<GetKotaBySlugResponse> {
  if (!slug) {
    return {
      status: 400,
      data: { kota: null, kabupatens: [] },
      message: "Missing slug",
    };
  }

  const fallback = (
    status: number,
    message: string,
  ): GetKotaBySlugResponse => ({
    status,
    data: {
      kota: getKotaDummyBySlug(slug),
      kabupatens: getKabupatenDummyByKotaSlug(slug),
    },
    message,
  });

  const url = `${baseUrlClient}/kotas/slug/${encodeURIComponent(slug)}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(10000),
      headers: { Accept: "application/json" },
    });

    const contentType = res.headers.get("content-type") ?? "";

    if (!res.ok) {
      console.error(`[getKotaBySlug] HTTP ${res.status}: ${url}`);
      return fallback(res.status, "API request failed");
    }

    if (!contentType.toLowerCase().includes("application/json")) {
      console.error(
        `[getKotaBySlug] Invalid content-type: ${contentType}, URL: ${url}`,
      );
      return fallback(502, "API returned non-JSON content");
    }

    const json = await res.json();

    if (!json || typeof json !== "object") {
      return fallback(502, "Invalid API response");
    }

    return {
      status: res.status,
      data: {
        kota: json.data?.kota ?? json.data ?? null,
        kabupatens: json.data?.kabupatens ?? json.data?.kotakabupatens ?? [],
      },
      message: json.message ?? "Success",
    };
  } catch (error) {
    console.error(`[getKotaBySlug] Request failed: ${url}`, error);
    return fallback(503, "API unavailable - using fallback");
  }
}
