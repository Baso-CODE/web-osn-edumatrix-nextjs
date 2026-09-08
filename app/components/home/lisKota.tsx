import { getDataKotaDummy } from "@/app/lib/getDummyDataRequest/getKotaDummy.request";
import Image from "next/image";
import Link from "next/link";

export default async function ListKota() {
  const kotaList = await getDataKotaDummy();

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#0a3977] to-[#104a8b] py-16 sm:py-20 lg:py-24">
      {/* SOFT AMBIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[10%]
          h-96
          w-96
          rounded-full
          bg-white/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[8%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/7
          blur-3xl
        "
      />

      <div className="container relative z-10 mx-auto max-w-310 items-center">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#FAAE17]/70 sm:w-12" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FAAE17] sm:text-sm">
              Jangkauan Edumatrix
            </span>

            <span className="h-px w-8 bg-[#FAAE17]/70 sm:w-12" />
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Jangkauan Kami di Seluruh Indonesia
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            Temukan bimbingan OSN terbaik di kota Anda. Kami hadir di berbagai
            kota besar untuk mendukung impian akademismu!
          </p>
        </div>

        {/* MAP - TANPA BACKGROUND / CARD */}
        <div className="relative mx-auto mb-16 w-full max-w-310 overflow-hidden">
          <Image
            src="/images/nusantara-preview-kota-indonesia.webp"
            alt="Peta Jangkauan Edumatrix Indonesia"
            width={2000}
            height={1200}
            className="h-auto w-full object-cover"
            priority
            loading="eager"
          />
        </div>

        {kotaList.length === 0 ? (
          <div className="p-8 text-center text-xl text-white">
            Tidak ada kota yang tersedia saat ini.
          </div>
        ) : (
          <div className="w-full px-4 md:px-0">
            <div className="relative">
              <h3 className="relative z-10 mb-7 text-center text-2xl font-bold text-white sm:text-3xl">
                Pilih Kotamu
              </h3>

              <ul className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-5 xl:grid-cols-6">
                {kotaList.map((kota) => (
                  <li key={kota.slug} className="w-full">
                    <Link
                      href={`/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kota.slug}`}
                      className="
                        group
                        relative

                        inline-flex
                        h-12
                        w-full
                        items-center
                        justify-center

                        overflow-hidden
                        rounded-[17px]

                        border
                        border-white/20

                        bg-white/[0.07]

                        px-4

                        text-xs
                        font-semibold
                        text-white

                        shadow-[0_8px_22px_rgba(0,18,50,0.12),inset_0_1px_0_rgba(255,255,255,0.20)]

                        backdrop-blur-[18px]
                        backdrop-saturate-[180%]

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-0.5
                        hover:border-white/32
                        hover:bg-white/[0.11]

                        hover:shadow-[0_12px_28px_rgba(0,18,50,0.16),inset_0_1px_0_rgba(255,255,255,0.28)]

                        focus:outline-none
                        focus:ring-2
                        focus:ring-white/35
                      ">
                      {/* TOP SPECULAR */}
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

                      {/* SOFT UPPER REFLECTION */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -left-7
                          -top-8
                          h-16
                          w-20
                          rounded-full
                          bg-white/[0.055]
                          blur-xl
                        "
                      />

                      {/* SOFT LOWER REFRACTION */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -bottom-7
                          left-1/2
                          h-12
                          w-[85%]
                          -translate-x-1/2
                          rounded-full
                          bg-white/[0.045]
                          blur-xl
                        "
                      />

                      {/* INNER GLASS EDGE */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-[1px]
                          rounded-[16px]
                          border
                          border-white/[0.055]
                        "
                      />

                      {/* HOVER SHINE */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -left-[70%]
                          top-0
                          h-full
                          w-[35%]
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

                      <span className="relative z-10 inline-flex max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                        <span className="transition-transform duration-500 group-hover:-translate-y-[150%]">
                          {kota.nama_kota}
                        </span>

                        <span className="absolute translate-y-[150%] transition-transform duration-500 group-hover:translate-y-0">
                          {kota.nama_kota}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
