"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";

interface Props {
  contacts: ContactCs[];
}

export default function HeroCTAClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_rotation",
  );

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
    <a
      href={activeContact.link_cta}
      onClick={handleClick}
      className="
        group
        relative

        inline-flex
        h-14
        w-full
        items-center
        justify-center

        overflow-hidden
        rounded-full

        border
        border-white/20

        px-6
        pr-14

        font-medium
        text-white

        shadow-[0_12px_28px_rgba(0,20,55,0.20),inset_0_1px_0_rgba(255,255,255,0.20)]

        backdrop-blur-[18px]
        backdrop-saturate-[180%]

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:shadow-[0_16px_34px_rgba(0,20,55,0.24),inset_0_1px_0_rgba(255,255,255,0.26)]

        md:w-[50%]
        lg:w-[40%]
      "
      style={{
        background: [
          "linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 40%, transparent 68%)",
          "radial-gradient(circle at 18% -20%, rgba(255,255,255,0.18) 0%, transparent 38%)",
          "linear-gradient(135deg, #F68507 0%, #F79B1E 55%, #F6A72C 100%)",
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
          via-white/45
          to-transparent
        "
      />

      {/* SOFT REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-7
          -top-6
          h-12
          w-16
          rounded-full
          bg-white/10
          blur-xl
        "
      />

      <span className="relative z-20 pr-2 font-bold">Daftar Sekarang</span>

      <div
        className="
          absolute
          right-1
          top-1/2

          z-10

          flex
          h-12
          w-12
          -translate-y-1/2

          items-center
          justify-end

          overflow-hidden
          rounded-full

          border
          border-white/18

          shadow-[0_8px_20px_rgba(0,20,55,0.22),inset_0_1px_0_rgba(255,255,255,0.18)]

          backdrop-blur-[18px]
          backdrop-saturate-[180%]

          transition-[width]
          duration-500
          ease-out

          group-hover:w-[calc(100%-8px)]
        "
        style={{
          background: [
            "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 45%, transparent 70%)",
            "linear-gradient(135deg, #04397D 0%, #0754A6 100%)",
          ].join(", "),
        }}>
        {/* INNER SPECULAR */}
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
            via-white/35
            to-transparent
          "
        />

        {/* ARROW */}
        <div className="relative z-20 mr-3.5 flex items-center justify-center">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              h-5
              w-5
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            ">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* HOVER SHINE */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[60%]
          top-0
          z-30
          h-full
          w-[30%]
          skew-x-[-20deg]
          bg-linear-to-r
          from-transparent
          via-white/25
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />
    </a>
  );
}
