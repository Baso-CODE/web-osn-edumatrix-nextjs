"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface TiltCardProps {
  img: string;
  title: string;
  description: string;
}

export const TiltCard = ({ img, title, description }: TiltCardProps) => {
  return (
    <Tilt
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      perspective={1100}
      scale={1.02}
      transitionSpeed={900}
      glareEnable={false}
      className="h-full">
      <div
        className="
          group/card
          relative
          flex
          h-full
          min-h-[340px]
          flex-col
          items-center
          overflow-hidden
          rounded-[28px]

          border
          border-[#133B79]/10

          px-6
          py-8

          text-center

          shadow-[0_14px_34px_rgba(19,59,121,0.09),0_3px_10px_rgba(0,0,0,0.035),inset_0_1px_0_rgba(255,255,255,0.95)]

          backdrop-blur-[24px]
          backdrop-saturate-[180%]

          transition-all
          duration-500

          hover:border-[#133B79]/14
          hover:shadow-[0_20px_44px_rgba(19,59,121,0.13),0_5px_14px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]
        "
        style={{
          background: [
            "radial-gradient(ellipse 85% 50% at 18% -10%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.60) 38%, transparent 72%)",
            "radial-gradient(ellipse 100% 65% at 100% 115%, rgba(205,229,255,0.20) 0%, rgba(225,240,255,0.08) 50%, transparent 78%)",
            "linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(247,251,255,0.62) 56%, rgba(239,247,255,0.56) 100%)",
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
            via-white
            to-transparent
          "
        />

        {/* TOP LEFT REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-14
            -top-16
            h-36
            w-44
            rounded-full
            bg-white/55
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
            h-32
            w-[110%]
            -translate-x-1/2
            rounded-[50%]
            bg-[#BFDFFF]/16
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
            rounded-[27px]
            border
            border-white/70
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
            z-30
            h-full
            w-[34%]
            skew-x-[-20deg]
            bg-linear-to-r
            from-transparent
            via-white/45
            to-transparent
            opacity-0
            transition-all
            duration-700
            group-hover/card:left-[125%]
            group-hover/card:opacity-100
          "
        />

        {/* IMAGE */}
        <div
          className="
            relative
            z-10
            mb-6
            flex
            h-[150px]
            w-[150px]
            items-center
            justify-center
          ">
          <Image
            src={img}
            width={120}
            height={120}
            alt={title}
            className="
              h-[120px]
              w-[120px]
              object-contain
              transition-transform
              duration-500
              ease-out
              group-hover/card:scale-105
            "
          />
        </div>

        <h3 className="relative z-10 mb-3 font-title text-lg font-semibold uppercase text-[#133B79] sm:text-xl">
          {title}
        </h3>

        <p className="relative z-10 font-desc text-sm font-bold leading-6 text-gray-600 sm:text-base">
          {description}
        </p>
      </div>
    </Tilt>
  );
};
