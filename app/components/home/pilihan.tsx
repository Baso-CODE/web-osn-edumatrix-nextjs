import Image from "next/image";

const Pilihan = () => {
  return (
    <div className="flex w-full justify-center">
      <section className="relative isolate mt-20 w-full overflow-hidden lg:mt-0">
        <div className="relative w-full">
          <Image
            loading="lazy"
            src="/images/background-belajar-offline-online-edumatrix.webp"
            alt="Pilihan metode belajar"
            className="block h-auto w-full object-cover"
            width={4096}
            height={1570}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 z-10 flex w-full items-stretch justify-between">
          <div className="flex h-full w-[50%] min-w-0 flex-col items-start justify-end">
            <div className="relative shrink-0">
              <Image
                loading="lazy"
                src="/images/pilihan-belajar-offline-atau-offline.webp"
                alt="Student"
                className="
                  block
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
                width={1290}
                height={1204}
                sizes="(max-width: 640px) 190px, (max-width: 1024px) 400px, 700px"
              />
            </div>
          </div>

          <div className="flex h-full w-[50%] min-w-0 flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="hidden justify-center text-center font-bold text-white md:flex md:text-[25px] lg:mb-8.75 lg:h-12.5 lg:w-100 lg:text-[35px] xl:mb-11.25 xl:h-14.75 xl:w-122.75 xl:text-[40px]">
                Pilih Metode Belajarmu
              </h2>

              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-4">
                <div
                  className="
                    group/online
                    relative
                    flex
                    w-30
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/30
                    px-4
                    py-2
                    text-sm
                    font-bold
                    font-title
                    uppercase
                    text-white
                    shadow-[0_12px_30px_rgba(0,80,55,0.24),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,80,45,0.12)]
                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:border-white/45
                    sm:w-60
                    sm:px-6
                    sm:py-3
                    sm:text-lg
                    md:text-xl
                    lg:h-17.5
                    lg:w-90
                    lg:rounded-3xl
                    lg:text-[40px]
                    xl:h-23
                    xl:w-105
                    xl:text-[48px]
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.045) 34%, transparent 60%)",
                      "radial-gradient(circle at 16% -15%, rgba(255,255,255,0.22) 0%, transparent 36%)",
                      "radial-gradient(circle at 100% 100%, rgba(66,255,185,0.22) 0%, transparent 42%)",
                      "linear-gradient(155deg, #09A76D 0%, #078F5E 52%, #06734E 100%)",
                    ].join(", "),
                  }}>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-linear-to-r from-transparent via-white/90 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-[42%] rounded-b-full bg-linear-to-b from-white/35 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-5 -top-4 h-12 w-16 rounded-full bg-white/12 blur-xl"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-5 -right-3 h-12 w-20 rounded-full bg-[#69f5bd]/22 blur-xl"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/12"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[60%] top-0 h-full w-[35%] skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover/online:left-[125%]"
                  />
                  <span className="relative z-10">Online</span>
                </div>

                <div
                  className="
                    group/offline
                    relative
                    flex
                    w-30
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/30
                    px-4
                    py-2
                    text-sm
                    font-bold
                    font-title
                    uppercase
                    text-white
                    shadow-[0_12px_30px_rgba(95,0,10,0.24),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(80,0,10,0.12)]
                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:border-white/45
                    sm:w-60
                    sm:px-6
                    sm:py-3
                    sm:text-lg
                    md:text-xl
                    lg:h-17.5
                    lg:w-90
                    lg:rounded-3xl
                    lg:text-[40px]
                    xl:h-23
                    xl:w-105
                    xl:text-[48px]
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.045) 34%, transparent 60%)",
                      "radial-gradient(circle at 16% -15%, rgba(255,255,255,0.22) 0%, transparent 36%)",
                      "radial-gradient(circle at 100% 100%, rgba(255,77,91,0.22) 0%, transparent 42%)",
                      "linear-gradient(155deg, #C41926 0%, #A91520 52%, #861019 100%)",
                    ].join(", "),
                  }}>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-linear-to-r from-transparent via-white/90 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-[42%] rounded-b-full bg-linear-to-b from-white/35 to-transparent"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-5 -top-4 h-12 w-16 rounded-full bg-white/12 blur-xl"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-5 -right-3 h-12 w-20 rounded-full bg-[#ff5b67]/22 blur-xl"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/12"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-[60%] top-0 h-full w-[35%] skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover/offline:left-[125%]"
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
