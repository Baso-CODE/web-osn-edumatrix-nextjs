import { getDataProgramDummy } from "@/app/lib/getDummyDataRequest/getProgramDummy.request";
import Image from "next/image";
import {
  AiOutlineBulb,
  AiOutlineCheckCircle,
  AiOutlineCheckSquare,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import { TbMessageCircleQuestion } from "react-icons/tb";

const icons = [
  <AiOutlineBulb className="bg-transparent text-[#04397D]" />,
  <AiOutlineCheckCircle className="bg-transparent text-orange-500" />,
  <AiOutlineStar className="bg-transparent text-[#04397D]" />,
  <AiOutlineUser className="bg-transparent text-orange-500" />,
  <AiOutlineCheckSquare className="bg-transparent text-[#04397D]" />,
  <TbMessageCircleQuestion className="bg-transparent text-orange-500" />,
];

const animations = [
  "fade-down-right",
  "fade-down",
  "fade-down-left",
  "fade-up-right",
  "fade-up",
  "fade-up-left",
];

const cardBackgrounds = [
  [
    "linear-gradient(145deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.045) 30%, transparent 58%)",
    "radial-gradient(circle at 14% -12%, rgba(255,255,255,0.20) 0%, transparent 35%)",
    "radial-gradient(circle at 100% 100%, rgba(77,163,255,0.28) 0%, transparent 42%)",
    "linear-gradient(155deg, #04397D 0%, #0555A5 50%, #056FCB 100%)",
  ].join(", "),
  [
    "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.045) 30%, transparent 58%)",
    "radial-gradient(circle at 14% -12%, rgba(255,255,255,0.22) 0%, transparent 35%)",
    "radial-gradient(circle at 100% 100%, rgba(255,196,90,0.30) 0%, transparent 42%)",
    "linear-gradient(155deg, #E86400 0%, #F47B0A 50%, #FF9228 100%)",
  ].join(", "),
];

export default async function Program() {
  const programData = await getDataProgramDummy();

  return (
    <section className="relative my-28 flex items-center justify-center overflow-hidden bg-white">
      {/* BACKGROUND AMBIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-44
          top-[10%]
          h-96
          w-96
          rounded-full
          bg-[#4DA3FF]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-44
          top-[35%]
          h-96
          w-96
          rounded-full
          bg-orange-400/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-56
          left-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#056fcb]/6
          blur-3xl
        "
      />

      <div className="relative z-10 w-full max-w-310 px-2 md:px-0">
        <div className="container mx-auto">
          {/* =====================================================
              HEADER
          ===================================================== */}
          <div className="mb-14 flex items-center justify-center md:mb-16">
            <div className="text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-orange-400/60 sm:w-12" />

                <span className="font-desc text-xs font-bold tracking-[0.18em] text-[#056fcb] uppercase sm:text-sm">
                  Keunggulan Program
                </span>

                <span className="h-px w-8 bg-orange-400/60 sm:w-12" />
              </div>

              <h2 className="font-title text-3xl font-extrabold text-[#133B79] md:text-[40px]">
                Fitur Program
              </h2>
            </div>
          </div>

          {/* =====================================================
              CARDS
          ===================================================== */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {programData.map((item, index) => (
              <div
                key={item.id}
                data-aos={animations[index % animations.length]}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/30

                  p-6
                  text-white

                  shadow-[0_16px_40px_rgba(0,30,80,0.18),0_5px_14px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.28),inset_0_-1px_0_rgba(0,20,60,0.10)]

                  backdrop-blur-[20px]
                  backdrop-saturate-[180%]

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1.5
                  hover:scale-[1.015]

                  hover:shadow-[0_24px_54px_rgba(0,30,80,0.24),0_8px_20px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.38)]

                  md:p-7
                  xl:p-8
                "
                style={{
                  background: cardBackgrounds[index % cardBackgrounds.length],
                }}>
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
                    via-white/85
                    to-transparent
                  "
                />

                {/* LARGE GLASS REFLECTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[18%]
                    -top-[28%]

                    h-40
                    w-[60%]

                    rotate-[-18deg]
                    rounded-full

                    bg-white/10
                    blur-2xl
                  "
                />

                {/* LOWER REFRACTION */}
                <span
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-16
                    -right-12

                    h-36
                    w-44

                    rounded-full

                    blur-3xl

                    ${index % 2 === 0 ? "bg-[#59B5FF]/25" : "bg-[#FFD083]/28"}
                  `}
                />

                {/* INNER GLASS EDGE */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[1px]

                    rounded-[27px]

                    border
                    border-white/[0.08]
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
                    via-white/18
                    to-transparent

                    opacity-0

                    transition-all
                    duration-700

                    group-hover:left-[125%]
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    HEADER ICON + TITLE
                ================================================= */}
                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-full

                      border
                      border-white/70

                      bg-white/90

                      text-xl

                      shadow-[0_8px_20px_rgba(0,20,60,0.14),inset_0_1px_0_rgba(255,255,255,1)]

                      backdrop-blur-xl
                    ">
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        left-[15%]
                        right-[15%]
                        top-0

                        h-[45%]

                        rounded-b-full

                        bg-linear-to-b
                        from-white
                        to-transparent
                      "
                    />

                    <span className="relative z-10">
                      {icons[index % icons.length]}
                    </span>
                  </div>

                  <h3
                    className="
                      font-title
                      text-xl
                      font-bold
                      leading-snug
                      text-white

                      drop-shadow-[0_2px_4px_rgba(0,20,60,0.18)]

                      md:text-lg
                      xl:text-xl
                    ">
                    {item.judul_fitur}
                  </h3>
                </div>

                {/* =================================================
                    IMAGE + DESCRIPTION
                ================================================= */}
                <div className="relative z-10">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div
                      className="
                        relative
                        mx-auto
                        flex
                        h-28
                        w-28
                        shrink-0
                        items-center
                        justify-center

                        overflow-hidden
                        rounded-[24px]

                        border
                        border-white/25

                        bg-white/10

                        shadow-[0_10px_28px_rgba(0,20,60,0.14),inset_0_1px_0_rgba(255,255,255,0.22)]

                        backdrop-blur-[16px]
                        backdrop-saturate-[170%]

                        md:mx-0
                      ">
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -left-6
                          -top-8

                          h-16
                          w-20

                          rounded-full

                          bg-white/18
                          blur-xl
                        "
                      />

                      <Image
                        src={`${item.foto_icon}`}
                        alt={item.judul_fitur}
                        className="
                          relative
                          z-10

                          h-24
                          w-24
                          object-contain

                          transition-transform
                          duration-500

                          group-hover:scale-105
                        "
                        width={112}
                        height={112}
                        loading="lazy"
                      />
                    </div>

                    <p
                      className="
                        font-desc
                        text-sm
                        font-medium
                        leading-6
                        text-white/92
                      ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {programData.length === 0 && (
            <p className="mt-8 text-center font-desc text-gray-600">
              Data asli tidak tersedia. Menampilkan konten placeholder.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
