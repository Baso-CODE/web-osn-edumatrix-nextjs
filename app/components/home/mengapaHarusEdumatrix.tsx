import Image from "next/image";

const MengapaHarusEdumatrix = () => {
  const reasons = [
    "Pengajar dari UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan PT Terbaik lainnya",
    "Tutor adalah pengajar dengan IP tinggi dan berpengalaman",
    "Tutor Matrix bisa menjadi Positive Role Model bagi siswa",
    "Presensi Edumatrix untuk monitoring perkembangan prestasi siswa",
    "Kurikulum Personal, sesuai dengan kebutuhan siswa",
    "Evaluasi Progress Belajar secara Berkala",
    "Kemudahan dalam pembayaran (via transfer)",
    "CS dan Tim Support yang responsif dan solutif",
    "Matrix beriorientasi pada Pelayanan Terbaik",
    "GRATIS Biaya Pendaftaran + Ada PROMO setiap hari",
  ];

  return (
    <div className="relative flex items-center justify-center bg-[#04397D]">
      <div className="container mx-auto my-[50px] min-h-[80vh] max-w-310 p-2 text-white lg:min-h-[95vh]">
        <div className="my-5 lg:my-0 lg:h-[794px] lg:w-[939px]">
          <h2 className="mb-4 font-title text-[28px] font-bold sm:text-[32px] md:mb-6 md:text-[35px] lg:text-[40px] lg:leading-[60px]">
            Mengapa Harus Edumatrix?
          </h2>

          <ul className="list-none pl-4 sm:pl-8">
            {reasons.map((reason, index) => (
              <li
                key={index}
                className="
                  group
                  relative

                  mb-1
                  flex
                  items-center

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-transparent

                  px-2
                  py-1

                  transition-all
                  duration-300

                  hover:border-white/14
                  hover:bg-white/[0.07]

                  hover:shadow-[0_8px_22px_rgba(0,20,60,0.14),inset_0_1px_0_rgba(255,255,255,0.12)]

                  hover:backdrop-blur-[16px]
                  hover:backdrop-saturate-[180%]
                ">
                {/* LIQUID GLASS HOVER REFLECTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[30%]
                    -top-[80%]

                    h-[180%]
                    w-[45%]

                    rotate-[-18deg]
                    rounded-full

                    bg-white/8
                    blur-2xl

                    opacity-0

                    transition-all
                    duration-500

                    group-hover:left-[5%]
                    group-hover:opacity-100
                  "
                />

                {/* CHECK ICON GLASS */}
                <div
                  className="
                    relative
                    z-10

                    mr-2

                    flex
                    h-[29px]
                    w-[29px]
                    shrink-0
                    items-center
                    justify-center

                    overflow-hidden
                    rounded-full

                    border
                    border-white/20

                    bg-white/[0.08]

                    shadow-[0_4px_12px_rgba(0,20,60,0.15),inset_0_1px_0_rgba(255,255,255,0.22)]

                    backdrop-blur-[14px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:border-white/30
                    group-hover:bg-white/[0.12]
                  ">
                  {/* ICON TOP SPECULAR */}
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
                      from-white/35
                      to-transparent
                    "
                  />

                  <Image
                    loading="lazy"
                    src="/images/icon_ceklis-mengapa-harus-edumatrix.webp"
                    className="relative z-10 h-[23px] w-[23px]"
                    alt="Ceklis"
                    width={46}
                    height={46}
                  />
                </div>

                <span
                  className="
                    relative
                    z-10

                    font-desc
                    text-[15px]
                    font-semibold
                    leading-6

                    text-white/80

                    transition-all
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:text-white

                    sm:leading-7

                    md:text-[20px]
                    md:leading-[50px]
                  ">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ORIGINAL WAVE */}
      <div className="absolute -bottom-px left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L34.3,186.7C68.6,213,137,267,206,266.7C274.3,267,343,213,411,186.7C480,160,549,160,617,170.7C685.7,181,754,203,823,218.7C891.4,235,960,245,1029,224C1097.1,203,1166,149,1234,138.7C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default MengapaHarusEdumatrix;
