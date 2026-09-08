"use client";

import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import { useState } from "react";
import { useCsRotation } from "../helper/useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function FloatingCTAClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "floating_rotation",
  );

  const [isPressed, setIsPressed] = useState(false);

  if (!activeCs || activeCs.length === 0) return null;

  const activeContact = activeCs[0];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const currentLink = activeContact.link_cta;

    rotateCs();

    setTimeout(() => {
      window.open(currentLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div
      className="
        group/floating
        fixed
        bottom-[14%]
        right-[3%]
        z-1000

        flex
        items-center
        gap-2

        md:bottom-[7%]
        md:right-[4%]
        md:gap-3
      ">
      {/* =====================================================
          LIQUID GLASS LABEL
      ===================================================== */}
      <div
        className="
          relative

          max-w-42.5
          overflow-visible

          rounded-2xl

          border
          border-white/55

          px-3
          py-2

          text-[11px]
          font-semibold
          leading-tight
          text-[#15375f]

          shadow-[0_10px_30px_rgba(0,30,70,0.14),0_3px_10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(4,57,125,0.05)]

          backdrop-blur-xl
          backdrop-saturate-190

          transition-all
          duration-500
          ease-out

          group-hover/floating:-translate-x-1

          sm:max-w-none
          sm:whitespace-nowrap
          sm:px-4
          sm:py-2.5
          sm:text-xs

          md:text-sm
        "
        style={{
          background: [
            "radial-gradient(circle at 25% 0%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.42) 36%, transparent 62%)",
            "linear-gradient(145deg, rgba(255,255,255,0.86) 0%, rgba(255,255,255,0.66) 48%, rgba(230,245,255,0.58) 100%)",
            "rgba(255,255,255,0.65)",
          ].join(", "),
        }}>
        {/* TOP SPECULAR */}
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
            from-white/90
            via-white/30
            to-transparent
          "
        />

        {/* BLUE BOTTOM REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-3
            right-[10%]

            h-7
            w-20

            rounded-full

            bg-[#4DA3FF]/15
            blur-xl
          "
        />

        {/* INNER RIM */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-px

            rounded-[15px]

            border
            border-white/45
          "
        />

        <span className="relative z-10">Klik untuk Konsultasi</span>

        {/* GLASS CONNECTOR */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-1.5
            top-1/2

            h-3
            w-3

            -translate-y-1/2
            rotate-45

            border-r
            border-t
            border-white/55

            bg-white/65

            backdrop-blur-xl
          "
        />
      </div>

      {/* =====================================================
          WHATSAPP LIQUID GLASS BUTTON
      ===================================================== */}
      <div className="relative flex shrink-0 items-center justify-center">
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-1.75

            rounded-full

            bg-[#25D366]/18
            blur-lg

            transition-all
            duration-500

            group-hover/floating:inset-[-11px]
            group-hover/floating:bg-[#25D366]/24
          "
        />

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[-4px]

            rounded-full

            border
            border-[#50e887]/35

            animate-ping

            opacity-30
          "
        />

        <a
          href={activeContact.link_cta}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp Matrix Tutoring"
          onClick={handleClick}
          onPointerDown={() => setIsPressed(true)}
          onPointerUp={() => setIsPressed(false)}
          onPointerCancel={() => setIsPressed(false)}
          onPointerLeave={() => setIsPressed(false)}
          className="
            group/button
            relative

            flex
            h-13
            w-13
            items-center
            justify-center

            overflow-hidden
            rounded-full

            border
            border-white/55

            cursor-pointer

            shadow-[0_12px_34px_rgba(0,120,55,0.30),0_4px_12px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(0,90,35,0.16)]

            backdrop-blur-[24px]
            backdrop-saturate-[200%]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:scale-110
            hover:border-white/75

            hover:shadow-[0_18px_42px_rgba(0,145,65,0.36),0_6px_16px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.82),inset_0_-1px_0_rgba(0,90,35,0.16)]

            md:h-15
            md:w-15
          "
          style={{
            transform: isPressed ? "scale(0.92)" : undefined,
            background: [
              "radial-gradient(circle at 30% 12%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.17) 28%, transparent 55%)",
              "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 42%, transparent 65%)",
              "linear-gradient(145deg, #35de76 0%, #25D366 52%, #00a83a 100%)",
            ].join(", "),
          }}>
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[16%]
              right-[16%]
              top-[2px]

              h-[42%]

              rounded-b-full

              bg-linear-to-b
              from-white/75
              via-white/20
              to-transparent
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-2
              top-[18%]

              h-8
              w-4

              rotate-[18deg]
              rounded-full

              bg-white/25
              blur-md
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-3
              right-[8%]

              h-8
              w-10

              rounded-full

              bg-[#8bffb5]/30
              blur-lg
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-[1px]

              rounded-full

              border
              border-white/20
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[70%]
              top-0

              h-full
              w-[45%]

              skew-x-[-20deg]

              bg-linear-to-r
              from-transparent
              via-white/45
              to-transparent

              opacity-0

              transition-all
              duration-700

              group-hover/button:left-[125%]
              group-hover/button:opacity-100
            "
          />

          <Image
            src="/images/icon-wa.svg"
            alt="Chat WhatsApp Matrix Tutoring"
            width={40}
            height={40}
            className="
              relative
              z-10

              h-7
              w-7

              drop-shadow-[0_2px_5px_rgba(0,75,30,0.28)]

              transition-all
              duration-300

              group-hover/button:scale-110
              group-hover/button:rotate-[-4deg]

              md:h-8
              md:w-8
            "
            loading="eager"
          />
        </a>
      </div>
    </div>
  );
}
