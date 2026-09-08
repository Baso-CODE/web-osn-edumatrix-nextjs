import StatCardOSN, { StatItem } from "./statCardOSN";

const osnStats: StatItem[] = [
  {
    id: 1,
    value: 4200,
    unit: "Tutor",
    image: "/images/statistic/tutor.webp",
    alt: "Ikon Tutor",
  },
  {
    id: 2,
    value: 5200,
    unit: "Siswa Belajar",
    image: "/images/statistic/siswa-belajar.webp",
    alt: "Ikon Siswa Belajar",
  },
  {
    id: 3,
    value: 1000,
    unit: "Siswa Berprestasi",
    image: "/images/statistic/siswa-berprestasi.webp",
    alt: "Ikon Siswa Berprestasi",
  },
  {
    id: 4,
    value: 10,
    unit: "Tahun Pengalaman",
    image: "/images/statistic/tahun-pengalaman.webp",
    alt: "Ikon Tahun Pengalaman",
  },
];

const ImpactStatisticsOSN = () => {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-white py-16">
      {/* SOFT AMBIENT REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#5EA8FF]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-[2%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FAAE17]/6
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {osnStats.map((stat) => (
            <div
              key={stat.id}
              className="
                group/stat
                relative
                overflow-hidden

                rounded-[30px]

                border
                border-white/70

                bg-white/55

                shadow-[0_18px_45px_rgba(4,57,125,0.10),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]

                backdrop-blur-[28px]
                backdrop-saturate-[190%]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1.5
                hover:border-white/90
                hover:bg-white/65

                hover:shadow-[0_26px_60px_rgba(4,57,125,0.15),0_8px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,1)]
              "
              style={{
                background: [
                  "radial-gradient(ellipse 85% 55% at 20% -10%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.55) 38%, transparent 72%)",
                  "radial-gradient(ellipse 85% 65% at 110% 105%, rgba(173,214,255,0.24) 0%, rgba(205,229,255,0.12) 45%, transparent 76%)",
                  "linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(245,250,255,0.54) 55%, rgba(232,244,255,0.48) 100%)",
                ].join(", "),
              }}>
              {/* TOP SPECULAR */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[12%]
                  top-0
                  z-20
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white
                  to-transparent
                "
              />

              {/* LARGE UPPER GLASS REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-16
                  -top-16
                  z-10
                  h-40
                  w-48
                  rounded-full
                  bg-white/65
                  blur-3xl
                "
              />

              {/* RIGHT SIDE REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  top-[20%]
                  z-10
                  h-32
                  w-28
                  rounded-full
                  bg-[#D8ECFF]/28
                  blur-3xl
                "
              />

              {/* SMOOTH BOTTOM REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  left-1/2
                  z-10
                  h-36
                  w-[115%]
                  -translate-x-1/2
                  rounded-[50%]
                  bg-[#B8DCFF]/20
                  blur-3xl
                "
              />

              {/* INNER EDGE */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  z-20
                  rounded-[29px]
                  border
                  border-white/55
                "
              />

              {/* IOS-LIKE SIDE HIGHLIGHT */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-[12%]
                  left-[1px]
                  top-[18%]
                  z-20
                  w-px
                  bg-linear-to-b
                  from-transparent
                  via-white/80
                  to-transparent
                "
              />

              {/* HOVER LIQUID SHINE */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[70%]
                  top-0
                  z-30
                  h-full
                  w-[35%]
                  skew-x-[-20deg]
                  bg-linear-to-r
                  from-transparent
                  via-white/45
                  to-transparent
                  opacity-0
                  transition-all
                  duration-700
                  group-hover/stat:left-[125%]
                  group-hover/stat:opacity-100
                "
              />

              <div className="relative z-40">
                <StatCardOSN stat={stat} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatisticsOSN;
