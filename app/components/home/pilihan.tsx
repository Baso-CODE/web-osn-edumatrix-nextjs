import Image from "next/image";

const Pilihan = () => {
  return (
    <div className="flex justify-center">
      <section className="relative mt-20 lg:mt-0">
        {/* Background Image Container */}
        <div className="relative w-full h-full">
          <Image
            loading="lazy"
            src="/images/background-belajar-offline-online-edumatrix.webp"
            alt="pilihan"
            className="w-full h-full object-cover"
            width="4096"
            height="1570"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 w-full flex justify-between">
          {/* KOLOM KIRI */}
          <div className="w-[50%] h-full flex flex-col justify-end items-start">
            <div className="relative shrink-0">
              <Image
                loading="lazy"
                src="/images/pilihan-belajar-offline-atau-offline.webp"
                alt="Student"
                className="
                  h-auto
                  object-contain
                  w-47.5
                  tb:w-[270px]
                  sm:w-72.5
                  md:w-82.5
                  lg:w-100
                  xl:w-150
                  2xl:w-175
                "
                width="1290"
                height="1204"
              />
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="w-[50%] h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white hidden md:flex xl:mb-11.25 lg:mb-8.75 text-center justify-center font-bold md:text-[25px] lg:text-[35px] xl:text-[40px] xl:w-122.75 xl:h-14.75 lg:w-100 lg:h-12.5">
                Pilih Metode Belajarmu
              </h2>

              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-4">
                {/* ONLINE */}
                <div
                  className="
                    group/online
                    relative

                    overflow-hidden

                    uppercase
                    font-title
                    font-bold

                    text-sm
                    sm:text-lg
                    md:text-xl
                    lg:text-[40px]
                    xl:text-[48px]

                    text-white

                    py-2
                    px-4

                    sm:py-3
                    sm:px-6

                    rounded-xl
                    lg:rounded-3xl

                    w-30
                    sm:w-60
                    lg:w-90
                    lg:h-17.5
                    xl:w-105
                    xl:h-23

                    flex
                    justify-center
                    items-center

                    border
                    border-white/30

                    shadow-[0_12px_30px_rgba(0,80,55,0.24),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,80,45,0.12)]

                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:border-white/45
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.045) 34%, transparent 60%)",
                      "radial-gradient(circle at 16% -15%, rgba(255,255,255,0.22) 0%, transparent 36%)",
                      "radial-gradient(circle at 100% 100%, rgba(66,255,185,0.22) 0%, transparent 42%)",
                      "linear-gradient(155deg, #09A76D 0%, #078F5E 52%, #06734E 100%)",
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

                      h-px

                      bg-linear-to-r
                      from-transparent
                      via-white/90
                      to-transparent
                    "
                  />

                  {/* TOP REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[12%]
                      right-[12%]
                      top-0

                      h-[42%]

                      rounded-b-full

                      bg-linear-to-b
                      from-white/35
                      to-transparent
                    "
                  />

                  {/* SIDE REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-5
                      -top-4

                      h-12
                      w-16

                      rounded-full

                      bg-white/12
                      blur-xl
                    "
                  />

                  {/* BOTTOM REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-5
                      -right-3

                      h-12
                      w-20

                      rounded-full

                      bg-[#69f5bd]/22
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

                      rounded-[inherit]

                      border
                      border-white/12
                    "
                  />

                  {/* HOVER SHINE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[60%]
                      top-0

                      h-full
                      w-[35%]

                      skew-x-[-20deg]

                      bg-linear-to-r
                      from-transparent
                      via-white/25
                      to-transparent

                      transition-all
                      duration-700

                      group-hover/online:left-[125%]
                    "
                  />

                  <span className="relative z-10">Online</span>
                </div>

                {/* OFFLINE */}
                <div
                  className="
                    group/offline
                    relative

                    overflow-hidden

                    uppercase
                    font-title
                    font-bold

                    text-sm
                    sm:text-lg
                    md:text-xl
                    lg:text-[40px]
                    xl:text-[48px]

                    text-white

                    py-2
                    px-4

                    sm:py-3
                    sm:px-6

                    rounded-xl
                    lg:rounded-3xl

                    w-30
                    sm:w-60
                    lg:w-90
                    lg:h-17.5
                    xl:w-105
                    xl:h-23

                    flex
                    justify-center
                    items-center

                    border
                    border-white/30

                    shadow-[0_12px_30px_rgba(95,0,10,0.24),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(80,0,10,0.12)]

                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:border-white/45
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.045) 34%, transparent 60%)",
                      "radial-gradient(circle at 16% -15%, rgba(255,255,255,0.22) 0%, transparent 36%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,77,91,0.22) 0%, transparent 42%)",
                      "linear-gradient(155deg, #C41926 0%, #A91520 52%, #861019 100%)",
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

                      h-px

                      bg-linear-to-r
                      from-transparent
                      via-white/90
                      to-transparent
                    "
                  />

                  {/* TOP REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[12%]
                      right-[12%]
                      top-0

                      h-[42%]

                      rounded-b-full

                      bg-linear-to-b
                      from-white/35
                      to-transparent
                    "
                  />

                  {/* SIDE REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-5
                      -top-4

                      h-12
                      w-16

                      rounded-full

                      bg-white/12
                      blur-xl
                    "
                  />

                  {/* BOTTOM REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-5
                      -right-3

                      h-12
                      w-20

                      rounded-full

                      bg-[#ff5b67]/22
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

                      rounded-[inherit]

                      border
                      border-white/12
                    "
                  />

                  {/* HOVER SHINE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[60%]
                      top-0

                      h-full
                      w-[35%]

                      skew-x-[-20deg]

                      bg-linear-to-r
                      from-transparent
                      via-white/25
                      to-transparent

                      transition-all
                      duration-700

                      group-hover/offline:left-[125%]
                    "
                  />

                  <span className="relative z-10">Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilihan;
