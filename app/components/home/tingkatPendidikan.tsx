"use client";

import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import detailContent from "./detailContentPendidikan";

const TingkatPendidikan = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const getButtonClass = () => {
    return `
      relative
      overflow-hidden

      w-full
      max-w-[380px]

      rounded-[24px]
      sm:rounded-[28px]

      border
      border-white/25

      py-2
      sm:py-2.5

      font-title
      text-[30px]
      sm:text-[34px]
      md:text-[36px]
      lg:text-[40px]
      font-bold
      text-white

      shadow-[0_16px_38px_rgba(4,57,125,0.22),inset_0_1px_0_rgba(255,255,255,0.30)]

      backdrop-blur-[18px]
      backdrop-saturate-[180%]

      transition-all
      duration-300
    `;
  };

  const getImageClass = () => {
    return `
      w-full
      max-w-[266px]

      h-auto
      max-h-[352px]

      object-contain

      transition-transform
      duration-500
    `;
  };

  const cards = [
    {
      key: "SD",
      image: "/images/tingkat-pendidikan/sd.webp",
      width: 497,
      height: 704,
      aos: "fade-right",
      detail: detailContent.SD,
    },
    {
      key: "SMP",
      image: "/images/tingkat-pendidikan/smp.webp",
      width: 380,
      height: 704,
      aos: "fade-up",
      detail: detailContent.SMP,
    },
    {
      key: "SMA",
      image: "/images/tingkat-pendidikan/sma.webp",
      width: 532,
      height: 704,
      aos: "fade-left",
      detail: detailContent.SMA,
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-10
        sm:py-12
        lg:py-16
        xl:min-h-[125vh]
      ">
      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-350

          px-3
          sm:px-4
          md:px-6
          lg:px-8
        ">
        <div
          className="
            mt-6
            grid
            w-full

            grid-cols-1
            gap-8

            md:grid-cols-2
            md:gap-6

            xl:grid-cols-3
            xl:gap-5

            2xl:gap-8
          ">
          {cards.map((item, index) => (
            <div
              key={item.key}
              data-aos={item.aos}
              className={`
                group/card
                relative

                flex
                min-w-0
                w-full
                flex-col
                items-center

                px-0
                pb-5
                pt-4

                sm:px-2
                lg:px-3

                ${
                  index === 2
                    ? "md:col-span-2 md:mx-auto md:max-w-[600px] xl:col-span-1 xl:max-w-none"
                    : ""
                }
              `}>
              {/* IMAGE */}
              <div
                className="
                  relative
                  z-10

                  flex
                  w-full
                  min-h-[280px]
                  items-end
                  justify-center

                  sm:min-h-[320px]
                  lg:min-h-[352px]
                ">
                <Image
                  loading="lazy"
                  src={item.image}
                  alt={item.key}
                  className={getImageClass()}
                  width={item.width}
                  height={item.height}
                />
              </div>

              {/* LIQUID GLASS BUTTON */}
              <button
                type="button"
                className={getButtonClass()}
                style={{
                  background: [
                    "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 36%, transparent 60%)",
                    "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.20) 0%, transparent 36%)",
                    "radial-gradient(circle at 100% 100%, rgba(77,163,255,0.28) 0%, transparent 40%)",
                    "linear-gradient(155deg, #133B79 0%, #0B4F9F 52%, #056fcb 100%)",
                  ].join(", "),
                }}>
                {/* TOP REFLECTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-8
                    -top-5

                    h-12
                    w-16

                    rounded-full

                    bg-white/15
                    blur-xl
                  "
                />

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
                    via-white/55
                    to-transparent
                  "
                />

                {/* BOTTOM REFRACTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    left-1/2

                    h-14
                    w-[85%]

                    -translate-x-1/2

                    rounded-full

                    bg-[#4DA3FF]/20
                    blur-2xl
                  "
                />

                {/* INNER EDGE */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-[1px]

                    rounded-[23px]
                    sm:rounded-[27px]

                    border
                    border-white/15
                  "
                />

                <span className="relative z-10">{item.key}</span>
              </button>

              {/* DETAIL CONTENT */}
              <div
                className="
                  relative
                  z-10

                  mt-4

                  w-full
                  min-w-0

                  opacity-0

                  transition-all
                  duration-500
                  delay-200

                  [&>*]:max-w-full
                "
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TingkatPendidikan;
