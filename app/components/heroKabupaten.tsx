"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface HeroKabupatenProps {
  KabupatenName: string;
  contacts: ContactCs[];
}

export default function HeroKabupaten({
  KabupatenName,
  contacts,
}: HeroKabupatenProps) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_kabupaten_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;

  const activeContact = activeCs[0];

  let formattedPhone = activeContact.nomor_hp;

  if (formattedPhone.startsWith("0")) {
    formattedPhone = "62" + formattedPhone.substring(1);
  } else if (formattedPhone.startsWith("+")) {
    formattedPhone = formattedPhone.substring(1);
  }

  const decodedLink = decodeURIComponent(activeContact.link_cta);
  const catalogMatch = decodedLink.match(/https:\/\/wa\.me\/p\/[0-9]+\/[0-9]+/);
  const catalogUrl = catalogMatch ? catalogMatch[0] : "";

  const dynamicLink = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} (https://bimbeledumatrix.com/), saya ingin tanya program belajar OSN di ${KabupatenName} yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paketnya?\n\n---\n*Katalog Kisah Sukses & Bukti Prestasi Siswa Edumatrix:*\n${catalogUrl}`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    rotateCs();

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section className="relative flex items-center justify-center bg-[#04397D]">
      <div className="mt-16 max-w-310 px-2 py-16 md:py-20 text-white lg:min-h-[85vh] xl:min-h-[89vh]">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="mb-6 font-title text-[34px] font-bold uppercase leading-9 sm:text-[36px] sm:leading-10">
              BIMBEL & LES PRIVAT OSN KSN IMO SD SMP SMA Di{" "}
              <span className="text-[#faae17]">{KabupatenName}</span> TERBAIK #1
            </h1>

            {/* BADGES */}
            <div className="mb-8 flex flex-col gap-3">
              {/* ONLINE */}
              <div
                className="
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-2

                  overflow-hidden
                  rounded-full

                  border
                  border-white/20

                  px-4
                  py-2

                  shadow-[0_8px_22px_rgba(0,20,55,0.16),inset_0_1px_0_rgba(255,255,255,0.22)]

                  backdrop-blur-[18px]
                  backdrop-saturate-[180%]
                "
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0.03) 100%)",
                }}>
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[12%]
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-white/45
                    to-transparent
                  "
                />

                <span className="relative z-10 h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="relative z-10 text-[13px] font-medium tracking-wide text-white md:text-[14px]">
                  🌐 Online — Seluruh Indonesia
                </span>
              </div>

              {/* OFFLINE */}
              <div
                className="
                  relative
                  inline-flex
                  w-fit
                  items-center
                  gap-2

                  overflow-hidden
                  rounded-full

                  border
                  border-[#faae17]/40

                  px-4
                  py-2

                  shadow-[0_8px_22px_rgba(0,20,55,0.16),inset_0_1px_0_rgba(255,255,255,0.18)]

                  backdrop-blur-[18px]
                  backdrop-saturate-[180%]
                "
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 55%, rgba(255,255,255,0.025) 100%)",
                }}>
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[12%]
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-[#faae17]/35
                    to-transparent
                  "
                />

                <span className="relative z-10 h-2 w-2 rounded-full bg-[#faae17] animate-pulse" />

                <span className="relative z-10 text-[13px] font-medium tracking-wide text-[#faae17] capitalize md:text-[14px]">
                  📍 Offline — Request Kabupaten {KabupatenName} (Estimasi 3
                  Hari)
                </span>
              </div>
            </div>

            <p className="mb-6 font-desc text-[15px] font-medium leading-6 text-white/90 md:text-[16px]">
              Edumatrix Indonesia adalah{" "}
              <strong>bimbel OSN (Olimpiade Sains Nasional)</strong> terbaik di{" "}
              <span className="font-extrabold uppercase text-[#faae17]">
                {KabupatenName}
              </span>
              , yang berfokus pada <strong>les privat OSN, KSN, dan IMO</strong>{" "}
              untuk jenjang SD, SMP, hingga SMA. Program pembelajaran kami
              dirancang khusus untuk membantu siswa{" "}
              <strong>lolos seleksi Olimpiade Sains Nasional</strong> dan meraih
              medali emas di tingkat provinsi maupun nasional. Dengan bimbingan
              intensif dari <strong>pengajar berpengalaman</strong> dan modul
              yang sesuai kurikulum OSN terbaru, Edumatrix memastikan setiap
              siswa di{" "}
              <span className="font-extrabold uppercase text-[#faae17]">
                {KabupatenName}
              </span>{" "}
              mendapatkan pendampingan terbaik untuk menguasai bidang{" "}
              <strong>
                Matematika, Fisika, Kimia, Biologi, Astronomi, dan Informatika
              </strong>
              .
            </p>

            {/* CTA LIQUID GLASS */}
            <Link
              href={dynamicLink}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
              className="
                group
                relative

                inline-flex
                h-14
                w-full
                items-center
                justify-center

                overflow-hidden
                rounded-full

                border
                border-white/20

                px-6
                pr-14

                font-medium
                text-white

                shadow-[0_12px_28px_rgba(0,20,55,0.20),inset_0_1px_0_rgba(255,255,255,0.20)]

                backdrop-blur-[18px]
                backdrop-saturate-[180%]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_16px_34px_rgba(0,20,55,0.24),inset_0_1px_0_rgba(255,255,255,0.26)]

                md:w-[50%]
                lg:w-[40%]
              "
              style={{
                background: [
                  "linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, transparent 68%)",
                  "linear-gradient(135deg, #F68507 0%, #F79B1E 55%, #F6A72C 100%)",
                ].join(", "),
              }}>
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[12%]
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white/45
                  to-transparent
                "
              />

              <span className="relative z-20 pr-2 font-bold">
                Daftar Sekarang
              </span>

              <div
                className="
                  absolute
                  right-1
                  top-1/2

                  z-10

                  flex
                  h-12
                  w-12
                  -translate-y-1/2

                  items-center
                  justify-end

                  overflow-hidden
                  rounded-full

                  border
                  border-white/18

                  shadow-[0_8px_20px_rgba(0,20,55,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]

                  backdrop-blur-[18px]
                  backdrop-saturate-[180%]

                  transition-[width]
                  duration-500
                  ease-out

                  group-hover:w-[calc(100%-8px)]
                "
                style={{
                  background: [
                    "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
                    "linear-gradient(135deg, #04397D 0%, #0754A6 100%)",
                  ].join(", "),
                }}>
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[12%]
                    top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-white/35
                    to-transparent
                  "
                />

                <div className="relative z-20 mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[60%]
                  top-0

                  z-30

                  h-full
                  w-[30%]

                  skew-x-[-20deg]

                  bg-linear-to-r
                  from-transparent
                  via-white/25
                  to-transparent

                  opacity-0

                  transition-all
                  duration-700

                  group-hover:left-[125%]
                  group-hover:opacity-100
                "
              />
            </Link>
          </div>

          {/* IMAGE TETAP CLEAN */}
          <div className="flex items-center justify-center lg:w-1/2">
            <Image
              width={1000}
              height={1000}
              src="/images/hero-image-kabupaten-page.webp"
              alt={`Les privat dan bimbingan belajar OSN terbaik di ${KabupatenName}. Edumatrix Indonesia membantu siswa SD, SMP, dan SMA meraih prestasi Olimpiade Sains Nasional (OSN) dengan pengajar profesional dan metode belajar interaktif di ${KabupatenName}.`}
              className="h-auto w-full object-contain"
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* WAVE */}
      <div className="absolute -bottom-px left-0 w-full xl:-bottom-22.5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
