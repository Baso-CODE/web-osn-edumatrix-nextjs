"use client";

import { Pengajar } from "@/app/types/pengajar.type";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PengajarClient({
  pengajarData,
}: {
  pengajarData: Pengajar[];
}) {
  if (pengajarData.length === 0) {
    return (
      <div className="flex justify-center bg-white py-10">
        <p className="text-gray-500">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      {/* AMBIENT BACKGROUND */}
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
          bg-[#4DA3FF]/7
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[5%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/6
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-10 text-center md:mb-12">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />

            <span className="font-desc text-xs font-bold tracking-[0.16em] text-[#056fcb] uppercase sm:text-sm">
              Master Teacher Edumatrix
            </span>

            <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />
          </div>

          <h2 className="font-title text-3xl font-extrabold text-[#133B79] lg:text-5xl">
            Our Professional{" "}
            <span className="text-[#FAAE17]">Master Teacher</span>
          </h2>
        </div>

        {/* SWIPER GLASS CONTAINER */}
        <div
          className="
            relative
            overflow-hidden
          ">
          {/* TOP SPECULAR */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[10%]
              top-0
              z-30
              h-px
              bg-linear-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* WHITE REFLECTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-52
              w-72
              rounded-full
              bg-white/80
              blur-3xl
            "
          />

          {/* BLUE REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-16
              h-48
              w-64
              rounded-full
              bg-[#4DA3FF]/10
              blur-3xl
            "
          />

          {/* CUSTOM PREVIOUS BUTTON */}
          <button
            type="button"
            aria-label="Pengajar sebelumnya"
            className="
              pengajar-prev
              group/nav
              absolute
              left-3
              top-1/2
              z-40
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/70
              text-[#04397D]
              shadow-[0_10px_28px_rgba(4,57,125,0.18),inset_0_1px_0_rgba(255,255,255,0.95)]
              backdrop-blur-[24px]
              backdrop-saturate-[200%]
              transition-all
              duration-300
              hover:scale-110
              hover:border-white
              active:scale-95
              sm:left-4
            "
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.62) 55%, rgba(220,240,255,0.48) 100%)",
            }}>
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[15%]
                right-[15%]
                top-0
                h-[42%]
                rounded-b-full
                bg-linear-to-b
                from-white
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-2
                h-8
                w-9
                rounded-full
                bg-[#4DA3FF]/20
                blur-lg
              "
            />

            <ChevronLeft
              className="
                relative
                z-10
                h-6
                w-6
                transition-transform
                duration-300
                group-hover/nav:-translate-x-0.5
              "
              strokeWidth={2.5}
            />
          </button>

          {/* CUSTOM NEXT BUTTON */}
          <button
            type="button"
            aria-label="Pengajar berikutnya"
            className="
              pengajar-next
              group/nav
              absolute
              right-3
              top-1/2
              z-40
              flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/70
              text-[#04397D]
              shadow-[0_10px_28px_rgba(4,57,125,0.18),inset_0_1px_0_rgba(255,255,255,0.95)]
              backdrop-blur-[24px]
              backdrop-saturate-[200%]
              transition-all
              duration-300
              hover:scale-110
              hover:border-white
              active:scale-95
              sm:right-4
            "
            // style={{
            //   background:
            //     "linear-gradient(145deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.62) 55%, rgba(220,240,255,0.48) 100%)",
            // }}
          >
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[15%]
                right-[15%]
                top-0
                h-[42%]
                rounded-b-full
                bg-linear-to-b
                from-white
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-3
                -right-2
                h-8
                w-9
                rounded-full
                bg-[#4DA3FF]/20
                blur-lg
              "
            />

            <ChevronRight
              className="
                relative
                z-10
                h-6
                w-6
                transition-transform
                duration-300
                group-hover/nav:translate-x-0.5
              "
              strokeWidth={2.5}
            />
          </button>

          <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
            navigation={{
              prevEl: ".pengajar-prev",
              nextEl: ".pengajar-next",
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            grabCursor
            centeredSlides
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="
              pb-14

              [&_.swiper-pagination-bullet]:h-2
              [&_.swiper-pagination-bullet]:w-2
              [&_.swiper-pagination-bullet]:bg-[#04397D]/30
              [&_.swiper-pagination-bullet]:opacity-100
              [&_.swiper-pagination-bullet]:transition-all
              [&_.swiper-pagination-bullet]:duration-300

              [&_.swiper-pagination-bullet-active]:w-6
              [&_.swiper-pagination-bullet-active]:rounded-full
              [&_.swiper-pagination-bullet-active]:bg-[#056fcb]
            ">
            {pengajarData.map((teacher) => (
              <SwiperSlide
                key={teacher.id}
                className="h-auto rounded-2xl py-10">
                <div
                  className="
      group/card
      relative
      flex
      h-full
      min-h-[360px]
      cursor-pointer
      flex-col
      items-center
      overflow-hidden
      rounded-[28px]

      border
      border-white/75

      p-6
      pb-10
      mb-6

      shadow-[0_16px_38px_rgba(4,57,125,0.12),0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)]

      backdrop-blur-[24px]
      backdrop-saturate-[190%]

      transition-all
      duration-500
      ease-out

      hover:-translate-y-1

      hover:shadow-[0_24px_52px_rgba(4,57,125,0.17),0_7px_18px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)]
    "
                  style={{
                    background: [
                      /*
                       * Pantulan putih bagian atas.
                       * Dibuat sangat besar supaya transisinya tidak terlihat terpotong.
                       */
                      "radial-gradient(ellipse 90% 55% at 25% -5%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.68) 35%, transparent 72%)",

                      /*
                       * Sedikit refraksi dari kanan atas.
                       */
                      "radial-gradient(ellipse 70% 50% at 110% 12%, rgba(235,246,255,0.65) 0%, rgba(235,246,255,0.18) 48%, transparent 75%)",

                      /*
                       * Refraksi biru bagian bawah.
                       * Dibuat melebar ke seluruh bagian bawah agar tidak terasa
                       * seperti blob/circle yang terpotong.
                       */
                      "radial-gradient(ellipse 130% 70% at 50% 115%, rgba(186,220,255,0.46) 0%, rgba(212,232,255,0.24) 38%, rgba(238,247,255,0.10) 62%, transparent 82%)",

                      /*
                       * Base glass.
                       */
                      "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.80) 42%, rgba(247,251,255,0.76) 72%, rgba(236,246,255,0.72) 100%)",
                    ].join(", "),
                  }}>
                  {/* CARD TOP SPECULAR */}
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
        via-white
        to-transparent
      "
                  />

                  {/* TOP LEFT SOFT REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute
        -left-20
        -top-20

        h-48
        w-56

        rounded-full

        bg-white/65
        blur-3xl
      "
                  />

                  {/* TOP RIGHT SOFT REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute
        -right-24
        -top-20

        h-44
        w-52

        rounded-full

        bg-[#E5F3FF]/40
        blur-3xl
      "
                  />

                  {/* =====================================================
        BOTTOM LIQUID REFRACTION
        Lebar, bukan circle kecil supaya tidak terlihat patah
    ===================================================== */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute

        -bottom-20
        left-1/2

        h-44
        w-[125%]

        -translate-x-1/2

        rounded-[50%]

        bg-[#B9DDFF]/28

        blur-3xl
      "
                  />

                  {/* BOTTOM SECONDARY SOFT LAYER */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute

        -bottom-10
        left-[5%]
        right-[5%]

        h-24

        rounded-[50%]

        bg-[#DCEEFF]/25

        blur-2xl
      "
                  />

                  {/* BOTTOM WHITE FADE */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0

        h-[42%]

        bg-linear-to-b
        from-transparent
        via-white/[0.04]
        to-[#EAF5FF]/20
      "
                  />

                  {/* INNER EDGE */}
                  <span
                    aria-hidden="true"
                    className="
        pointer-events-none
        absolute
        inset-[1px]

        rounded-[27px]

        border
        border-white/50
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
        w-[38%]

        skew-x-[-20deg]

        bg-linear-to-r
        from-transparent
        via-white/50
        to-transparent

        opacity-0

        transition-all
        duration-700

        group-hover/card:left-[125%]
        group-hover/card:opacity-100
      "
                  />

                  {/* PHOTO */}
                  <div
                    className="
        relative
        z-10
        mb-6

        flex
        h-[164px]
        w-[164px]
        items-center
        justify-center

        overflow-hidden
        rounded-full

        border
        border-white/80

        bg-white/55

        p-[6px]

        shadow-[0_12px_30px_rgba(4,57,125,0.15),inset_0_1px_0_rgba(255,255,255,1)]

        backdrop-blur-[18px]
        backdrop-saturate-[180%]
      ">
                    <span
                      aria-hidden="true"
                      className="
          pointer-events-none
          absolute
          inset-[3px]
          rounded-full
          border
          border-[#056fcb]/20
        "
                    />

                    <span
                      aria-hidden="true"
                      className="
          pointer-events-none
          absolute
          left-[15%]
          right-[15%]
          top-[2px]
          z-20

          h-[34%]

          rounded-b-full

          bg-linear-to-b
          from-white/70
          to-transparent
        "
                    />

                    <Image
                      loading="lazy"
                      src={teacher.foto_pengajar}
                      alt={teacher.nama_pengajar}
                      width={144}
                      height={144}
                      className="
          relative
          z-10
          h-36
          w-36
          rounded-full
          object-cover

          shadow-[0_7px_20px_rgba(4,57,125,0.13)]

          transition-transform
          duration-500

          group-hover/card:scale-105
        "
                    />
                  </div>

                  <h3
                    className="
        relative
        z-10
        mb-1
        text-center
        font-title
        text-xl
        font-bold
        text-[#133B79]
      ">
                    {teacher.nama_pengajar}
                  </h3>

                  <p
                    className="
        relative
        z-10
        mb-5
        text-center
        font-desc
        text-sm
        font-medium
        text-gray-500
      ">
                    Master Teacher
                  </p>

                  {/* UNIVERSITY BADGE */}
                  <div
                    className="
        relative
        z-10
        mt-auto

        max-w-[95%]

        overflow-hidden
        rounded-full

        border
        border-white/30

        px-4
        py-2

        text-center
        text-xs
        font-semibold
        text-white

        shadow-[0_8px_20px_rgba(4,57,125,0.20),inset_0_1px_0_rgba(255,255,255,0.30)]

        backdrop-blur-[18px]
        backdrop-saturate-[180%]
      "
                    style={{
                      background:
                        "linear-gradient(135deg, #04397D 0%, #056fcb 100%)",
                    }}>
                    <span
                      aria-hidden="true"
                      className="
          pointer-events-none
          absolute
          left-[12%]
          right-[12%]
          top-0

          h-[45%]

          rounded-b-full

          bg-linear-to-b
          from-white/30
          to-transparent
        "
                    />

                    <span className="relative z-10">{teacher.university}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
