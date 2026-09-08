import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TransformationOSN() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        font-poppins
        transition-colors
        duration-300

        dark:bg-slate-900

        md:py-24
      ">
      {/* SOFT AMBIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[12%]
          h-96
          w-96
          rounded-full
          bg-[#4DA3FF]/7
          blur-3xl

          dark:bg-blue-500/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/6
          blur-3xl

          dark:bg-orange-400/5
        "
      />

      <div className="relative z-10 mx-auto max-w-310 px-2 md:px-4">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 font-title text-2xl font-extrabold leading-tight text-[#03397d] md:text-4xl dark:text-white">
            Transformasi Belajar Olimpiade Sains
          </h2>

          <p className="mx-auto max-w-3xl px-4 font-desc text-base leading-relaxed text-gray-600 md:text-lg dark:text-slate-300">
            Kami memahami tantangan persiapan OSN. Dari kebingungan mencari
            arah, menjadi persiapan matang yang penuh percaya diri.
          </p>
        </div>

        {/* TRANSFORMATION CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch md:gap-8 lg:gap-10">
          {/* BEFORE CARD */}
          <div
            className="
              group/before
              relative
              flex
              w-full
              flex-1
              flex-col
              items-center

              overflow-hidden
              rounded-[30px]

              border
              border-[#04397D]/10

              bg-white/68

              p-3
              pb-6

              text-center

              shadow-[0_18px_46px_rgba(4,57,125,0.10),0_5px_14px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]

              backdrop-blur-[24px]
              backdrop-saturate-[190%]

              transition-all
              duration-500

              hover:-translate-y-1

              dark:border-white/10
              dark:bg-white/[0.05]
              dark:shadow-[0_18px_46px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.10)]
            ">
            {/* TOP SPECULAR */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-[10%]
                top-0
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
                -left-16
                -top-16
                h-36
                w-44
                rounded-full
                bg-white/75
                blur-3xl

                dark:bg-white/[0.06]
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                mb-6
                w-full
                overflow-hidden
                rounded-[24px]
                border
                border-white/50
                bg-white/40

                shadow-[0_10px_26px_rgba(4,57,125,0.10),inset_0_1px_0_rgba(255,255,255,0.65)]
              ">
              <Image
                src="/images/solusi/before.webp"
                alt="Siswa bingung materi OSN"
                width={500}
                height={400}
                className="
                  h-auto
                  w-full
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover/before:scale-[1.035]
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[30%]
                  bg-linear-to-t
                  from-[#04397D]/12
                  to-transparent
                "
              />
            </div>

            <div className="relative z-10 px-3">
              <h3 className="mb-2 font-title text-xl font-bold text-gray-700 dark:text-slate-200">
                Belajar Tanpa Arah
              </h3>

              <p className="mx-auto max-w-lg font-desc text-sm font-medium leading-relaxed text-gray-600 md:text-base dark:text-slate-300">
                &quot;Materi OSN terasa asing, bingung harus mulai dari mana,
                dan sering terjebak saat mengerjakan soal non-rutin.&quot;
              </p>
            </div>
          </div>

          {/* ARROW */}
          <div className="relative z-20 flex shrink-0 items-center justify-center md:self-center">
            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center

                overflow-hidden
                rounded-full

                border
                border-white/65

                text-[#056fcb]

                shadow-[0_10px_28px_rgba(4,57,125,0.16),inset_0_1px_0_rgba(255,255,255,0.95)]

                backdrop-blur-[24px]
                backdrop-saturate-[200%]

                md:h-16
                md:w-16

                dark:border-white/20
                dark:text-blue-400
              "
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.58) 55%, rgba(220,240,255,0.42) 100%)",
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

              <ArrowDown className="relative z-10 h-6 w-6 animate-bounce md:hidden" />
              <ArrowRight className="relative z-10 hidden h-8 w-8 md:block" />
            </div>
          </div>

          {/* AFTER CARD */}
          <div
            className="
              group/after
              relative
              flex
              w-full
              flex-1
              flex-col
              items-center

              overflow-hidden
              rounded-[30px]

              border
              border-[#056fcb]/12

              bg-white/70

              p-3
              pb-6

              text-center

              shadow-[0_18px_46px_rgba(4,57,125,0.12),0_5px_14px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]

              backdrop-blur-[24px]
              backdrop-saturate-[190%]

              transition-all
              duration-500

              hover:-translate-y-1

              dark:border-blue-400/15
              dark:bg-white/[0.06]
              dark:shadow-[0_18px_46px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.10)]
            ">
            {/* TOP SPECULAR */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-[10%]
                top-0
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
                -right-16
                -top-16
                h-36
                w-44
                rounded-full
                bg-white/75
                blur-3xl

                dark:bg-white/[0.06]
              "
            />

            {/* SOFT BLUE REFRACTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-16
                left-1/2
                h-36
                w-[70%]
                -translate-x-1/2
                rounded-full
                bg-[#4DA3FF]/10
                blur-3xl
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                mb-6
                w-full
                overflow-hidden
                rounded-[24px]
                border
                border-white/50
                bg-white/40

                shadow-[0_10px_26px_rgba(4,57,125,0.10),inset_0_1px_0_rgba(255,255,255,0.65)]
              ">
              <Image
                src="/images/solusi/after.webp"
                alt="Siswa percaya diri juara OSN EduMatrix"
                width={500}
                height={400}
                className="
                  h-auto
                  w-full
                  object-cover

                  transition-transform
                  duration-700
                  ease-out

                  group-hover/after:scale-[1.035]
                "
              />

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[30%]
                  bg-linear-to-t
                  from-[#056fcb]/12
                  to-transparent
                "
              />
            </div>

            <div className="relative z-10 px-3">
              <h3 className="mb-2 font-title text-xl font-bold text-[#00549e] dark:text-blue-400">
                Terarah & Siap Juara
              </h3>

              <p className="mx-auto max-w-lg font-desc text-sm font-medium leading-relaxed text-gray-600 md:text-base dark:text-slate-300">
                &quot;Menguasai konsep fundamental, paham strategi pengerjaan
                soal, dan mental siap berkompetisi di tingkat Nasional.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-14 border-t border-gray-100 pt-8 text-center dark:border-slate-800">
          <p className="font-desc text-sm italic text-gray-500 dark:text-slate-500">
            *Ilustrasi perjalanan siswa bimbingan Olimpiade Sains by EduMatrix
            Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}
