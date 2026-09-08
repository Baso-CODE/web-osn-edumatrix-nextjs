const YouTubeShortEmbed = () => {
  const videoId = "Pi0jI_mvQRw";

  const videoTitle = "Strategi Jitu Lolos OSN | Edumatrix Indonesia";

  const videoDescription =
    "Edumatrix Indonesia hadir dengan bimbingan les privat terbaik untuk Olimpiade Sains Nasional (OSN). Kami membimbing Anda dengan strategi jitu dan pengajar ahli untuk meraih medali emas impian Anda!";

  const videoUploadDate = "2025-07-23T08:00:00+07:00";

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&controls=1&modestbranding=1&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle,
    description: videoDescription,
    thumbnailUrl: [thumbnailUrl],
    uploadDate: videoUploadDate,
    embedUrl,
    contentUrl: watchUrl,
    publisher: {
      "@type": "Organization",
      name: "Edumatrix Indonesia",
      logo: {
        "@type": "ImageObject",
        url: "https://bimbeledumatrix.com/images/logo.webp",
      },
    },
  };

  const features = [
    "Pengajar Berpengalaman & Peraih Medali OSN",
    "Materi Komprehensif Sesuai Silabus Terbaru",
    "Simulasi Ujian & Pembahasan Mendalam",
    "Mentoring & Evaluasi Belajar Personal",
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#04397D]
        py-16
      ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#4DA3FF]/16
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-44
          top-[30%]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#FAAE17]/14
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[35%]
          h-80
          w-80
          rounded-full
          bg-[#056fcb]/20
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto mb-32 max-w-310 px-4 md:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* =====================================================
              VIDEO SIDE
          ===================================================== */}
          <div className="relative flex items-center justify-center">
            {/* ORANGE GLASS BACKPLATE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[410px]
                w-[310px]
                -translate-x-1/2
                -translate-y-1/2
                -rotate-6

                rounded-[32px]

                border
                border-white/20

                bg-[#faae17]/35

                shadow-[0_25px_60px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.28)]

                backdrop-blur-[18px]
                backdrop-saturate-[180%]

                sm:h-[450px]
                sm:w-[350px]
                lg:h-[500px]
                lg:w-[390px]
              "
            />

            {/* SECOND BACKPLATE */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[390px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-3

                rounded-[32px]

                border
                border-white/18

                bg-orange-300/30

                shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.24)]

                backdrop-blur-[16px]

                sm:h-[440px]
                sm:w-[340px]
                lg:h-[480px]
                lg:w-[410px]
              "
            />

            {/* VIDEO LIQUID GLASS FRAME */}
            <div
              className="
                group/video
                relative
                z-10
                w-full
                max-w-xs
                overflow-hidden

                rounded-[30px]

                border
                border-white/35

                bg-white/10

                p-2

                shadow-[0_28px_70px_rgba(0,20,55,0.34),0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.40)]

                backdrop-blur-[24px]
                backdrop-saturate-[190%]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:scale-[1.01]

                sm:max-w-sm
                md:max-w-md
                lg:max-w-sm
              ">
              {/* TOP SPECULAR */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[12%]
                  top-0
                  z-30
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white/85
                  to-transparent
                "
              />

              {/* WHITE REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[18%]
                  -top-[12%]
                  z-20
                  h-44
                  w-[65%]
                  rotate-[-18deg]
                  rounded-full
                  bg-white/12
                  blur-2xl
                "
              />

              {/* BLUE REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -right-8
                  z-20
                  h-28
                  w-36
                  rounded-full
                  bg-[#4DA3FF]/20
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]

                  border
                  border-white/15

                  bg-black/20

                  shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                ">
                <div className="relative w-full pt-[177.77%]">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={embedUrl}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTENT SIDE
          ===================================================== */}
          <div
            className="
              relative
              overflow-hidden

              rounded-[30px]

              border
              border-white/20

              bg-white/[0.08]

              p-5

              shadow-[0_22px_55px_rgba(0,20,55,0.24),inset_0_1px_0_rgba(255,255,255,0.24)]

              backdrop-blur-[22px]
              backdrop-saturate-[190%]

              sm:p-7
              lg:p-8
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
                via-white/65
                to-transparent
              "
            />

            {/* LARGE REFLECTION */}
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
                bg-white/[0.07]
                blur-3xl
              "
            />

            {/* GOLD REFRACTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-16
                -right-10
                h-44
                w-52
                rounded-full
                bg-[#FAAE17]/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px w-8 bg-[#FAAE17]/70" />

                <p className="font-title text-xs font-bold tracking-[0.16em] text-[#FAAE17] uppercase sm:text-sm">
                  Rahasia Juara Olimpiade Sains
                </p>
              </div>

              <h2
                className="
                  font-title
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-white

                  sm:text-4xl
                ">
                Raih Prestasi Gemilang di OSN{" "}
                <span className="text-[#FAAE17]">Bersama Edumatrix!</span>
              </h2>

              <p className="mt-4 font-desc text-base leading-7 text-white/80 sm:text-lg">
                {videoDescription}
              </p>

              {/* =================================================
                  FEATURE CARDS
              ================================================= */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      group/feature
                      relative
                      overflow-hidden

                      rounded-[18px]

                      border
                      border-white/18

                      bg-white/[0.08]

                      px-4
                      py-3.5

                      shadow-[0_10px_25px_rgba(0,20,60,0.12),inset_0_1px_0_rgba(255,255,255,0.18)]

                      backdrop-blur-[16px]
                      backdrop-saturate-[180%]

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-white/[0.12]
                      hover:border-white/30
                    ">
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-x-[15%]
                        top-0
                        h-px
                        bg-linear-to-r
                        from-transparent
                        via-white/40
                        to-transparent
                      "
                    />

                    <div className="relative z-10 flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-white/30

                          bg-[#25D366]/18

                          shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]

                          backdrop-blur-xl
                        ">
                        <svg
                          className="h-4 w-4 text-[#58e58d]"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>

                      <span className="font-desc text-sm font-medium leading-5 text-white/90">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  LIQUID GLASS CTA
              ================================================= */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="
                    group/cta
                    relative

                    inline-flex
                    w-full
                    items-center
                    justify-between

                    overflow-hidden

                    rounded-[18px]

                    border
                    border-white/28

                    px-5
                    py-3.5

                    font-title
                    font-semibold
                    text-white

                    shadow-[0_12px_30px_rgba(0,20,60,0.22),inset_0_1px_0_rgba(255,255,255,0.30)]

                    backdrop-blur-[20px]
                    backdrop-saturate-[190%]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:border-white/45

                    md:w-[70%]
                    xl:w-[55%]
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.035) 44%, transparent 65%)",
                      "linear-gradient(135deg, #056fcb 0%, #0457a6 100%)",
                    ].join(", "),
                  }}>
                  {/* CTA SPECULAR */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-[10%]
                      right-[10%]
                      top-0
                      h-[42%]
                      rounded-b-full
                      bg-linear-to-b
                      from-white/35
                      to-transparent
                    "
                  />

                  {/* CTA GOLD REFRACTION */}
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
                      bg-[#FAAE17]/30
                      blur-xl
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
                      via-white/30
                      to-transparent
                      transition-all
                      duration-700
                      group-hover/cta:left-[125%]
                    "
                  />

                  <span className="relative z-10">
                    Daftar Sekarang untuk OSN
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      ml-3
                      text-2xl
                      transition-transform
                      duration-300
                      group-hover/cta:translate-x-1
                    ">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ===================================================== */}
      <div className="absolute -bottom-px left-0 w-full xl:-bottom-12.5">
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
};

export default YouTubeShortEmbed;
