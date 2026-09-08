import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-belajar/gallery-offline-1.webp",
    alt: "Gallery belajar offline Edumatrix",
    label: "Offline",
    className: "md:h-80",
  },
  {
    src: "/images/gallery-belajar/gallery-offline-2.webp",
    alt: "Gallery kegiatan belajar offline Edumatrix",
    label: "Offline",
    className: "md:col-span-2 md:h-80",
  },
  {
    src: "/images/gallery-belajar/gallery-online-3.webp",
    alt: "Gallery belajar online Edumatrix",
    label: "Online",
    className: "md:col-span-2 md:h-80",
  },
  {
    src: "/images/gallery-belajar/gallery-online-4.webp",
    alt: "Gallery kegiatan belajar online Edumatrix",
    label: "Online",
    className: "md:h-80",
  },
];

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14">
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

      <div className="relative z-10 mx-auto max-w-310 px-2">
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center md:gap-6 lg:gap-14">
            <div>
              <h2 className="font-title text-3xl font-bold text-[#1e3a8a] lg:text-4xl">
                Gallery
              </h2>
            </div>

            <p className="hidden max-w-screen-sm font-desc font-medium leading-7 text-gray-600 md:block">
              Lihatlah bagaimana kami merangkul teknologi dan inovasi. Setiap
              gambar mewakili aspek unik dari pengalaman pendidikan dan kegiatan
              komunitas kami. Bagaimana kami membuat pembelajaran interaktif dan
              menyenangkan!
            </p>
          </div>
        </div>

        {/* GLASS GALLERY WRAPPER */}
        <div
          className="
            relative
            overflow-hidden

            rounded-[30px]

            border
            border-[#04397D]/8

            bg-white/55

            p-2

            shadow-[0_18px_50px_rgba(4,57,125,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]

            backdrop-blur-[22px]
            backdrop-saturate-[180%]

            sm:p-3
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
              -left-20
              -top-24
              h-48
              w-64
              rounded-full
              bg-white/75
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
              -right-10
              h-44
              w-56
              rounded-full
              bg-[#4DA3FF]/10
              blur-3xl
            "
          />

          <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4 xl:gap-5">
            {galleryItems.map((item, index) => (
              <a
                key={item.src}
                href="#"
                className={`
                  group/gallery
                  relative
                  flex
                  h-48
                  items-end

                  overflow-hidden

                  rounded-[24px]

                  border
                  border-white/35

                  bg-gray-100

                  shadow-[0_14px_34px_rgba(4,57,125,0.14),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.30)]

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1
                  hover:shadow-[0_22px_46px_rgba(4,57,125,0.20),0_7px_18px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.40)]

                  ${item.className}
                `}>
                <Image
                  src={item.src}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  alt={item.alt}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center

                    transition-transform
                    duration-700
                    ease-out

                    group-hover/gallery:scale-[1.06]
                  "
                />

                {/* DARK GRADIENT */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-linear-to-t
                    from-black/55
                    via-black/5
                    to-transparent
                  "
                />

                {/* IMAGE TOP GLASS REFLECTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[20%]
                    -top-[40%]

                    h-[75%]
                    w-[55%]

                    rotate-[-18deg]
                    rounded-full

                    bg-white/12
                    blur-3xl

                    transition-all
                    duration-700

                    group-hover/gallery:left-[5%]
                  "
                />

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
                    via-white/70
                    to-transparent
                  "
                />

                {/* INNER GLASS EDGE */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[1px]
                    rounded-[23px]
                    border
                    border-white/12
                  "
                />

                {/* LABEL */}
                <div
                  className="
                    relative
                    z-10

                    mb-4
                    ml-4

                    overflow-hidden

                    rounded-full

                    border
                    border-white/30

                    px-4
                    py-2

                    shadow-[0_8px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.30)]

                    backdrop-blur-[18px]
                    backdrop-saturate-[180%]

                    md:mb-5
                    md:ml-5
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",
                      "rgba(4,57,125,0.55)",
                    ].join(", "),
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
                      from-white/35
                      to-transparent
                    "
                  />

                  <span className="relative z-10 font-title text-xs font-bold text-white md:text-sm">
                    {item.label}
                  </span>
                </div>

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
                    via-white/20
                    to-transparent

                    opacity-0

                    transition-all
                    duration-700

                    group-hover/gallery:left-[125%]
                    group-hover/gallery:opacity-100
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
