import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";
import HeroCTAClient from "./heroCTAClient";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-[#04397D]">
      <div className="mt-10 max-w-310 px-4 py-24 text-white lg:min-h-[78vh] lg:px-0 xl:min-h-[100vh]">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="font-title text-[34px] font-bold uppercase leading-9 sm:text-[40px] sm:leading-10">
              Butuh persiapan lebih
            </h1>

            <h2
              aria-hidden="true"
              className="mb-6 font-title text-[34px] font-bold uppercase text-[#faae17] sm:text-[40px]">
              untuk OSN
            </h2>

            {/* BADGES AREA */}
            <div className="mb-8 flex flex-col gap-3">
              {/* BADGE ONLINE - LIQUID GLASS */}
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

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-6
                    -top-5
                    h-10
                    w-14
                    rounded-full
                    bg-white/10
                    blur-xl
                  "
                />

                <span className="relative z-10 h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="relative z-10 text-[13px] font-medium tracking-wide text-white md:text-[14px]">
                  🌐 Online — Seluruh Indonesia
                </span>
              </div>

              {/* BADGE OFFLINE - LIQUID GLASS */}
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

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-6
                    -top-5
                    h-10
                    w-14
                    rounded-full
                    bg-white/[0.08]
                    blur-xl
                  "
                />

                <span className="relative z-10 h-2 w-2 rounded-full bg-[#faae17] animate-pulse" />

                <span className="relative z-10 text-[13px] font-medium tracking-wide text-[#faae17] md:text-[14px]">
                  📍 Offline — Jabodetabek, Yogyakarta & Request Area Lain
                  (Estimasi 3 Hari)
                </span>
              </div>
            </div>

            <p className="mb-8 font-desc text-[14px] font-bold leading-5 text-white/90 md:text-[16px] md:leading-6">
              Edumatrix Indonesia bangga mendukung generasi muda Indonesia dalam
              meraih prestasi di Olimpiade Sains Nasional. Program kami
              dirancang untuk mempersiapkan siswa dengan pengetahuan mendalam
              dan keterampilan analitis yang tajam, memastikan mereka siap
              menghadapi tantangan kompetisi sains terbesar di tanah air.
              <br />
              Melalui bimbingan intensif dan metode belajar yang inovatif, kami
              membantu setiap peserta mencapai potensi maksimalnya, mengukir
              prestasi gemilang, dan membawa nama harum bagi sekolah dan bangsa.
              Bersama Edumatrix Indonesia, jadilah bagian dari perjalanan menuju
              puncak prestasi di OSN!
            </p>

            <HeroCTAClient contacts={dummyContactCsData} />
          </div>

          <div className="flex items-center justify-center lg:w-1/2">
            <Image
              loading="eager"
              src="/images/image-preview-landing-page.webp"
              alt="Bimbingan belajar les privat untuk persiapan OSN dan peningkatan prestasi akademik siswa SD SMP SMA"
              width={1200}
              height={1200}
              priority
              fetchPriority="high"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 w-full xl:-bottom-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,245.3C768,224,816,192,864,186.7C912,181,960,203,1008,208C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
