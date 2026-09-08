"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AccordionFAQProps {
  title: string;
  content: string;
}

export function AccordionFAQ({ title, content }: AccordionFAQProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group/faq
        relative
        w-full
        overflow-hidden

        rounded-[20px]

        border

        backdrop-blur-[18px]
        backdrop-saturate-[180%]

        transition-all
        duration-500

        ${
          isOpen
            ? "border-[#056fcb]/15 bg-white/75 shadow-[0_12px_30px_rgba(4,57,125,0.09),inset_0_1px_0_rgba(255,255,255,1)]"
            : "border-white/55 bg-white/35 hover:border-[#056fcb]/12 hover:bg-white/60 hover:shadow-[0_10px_24px_rgba(4,57,125,0.07),inset_0_1px_0_rgba(255,255,255,0.9)]"
        }
      `}>
      {/* TOP SPECULAR */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[7%]
          top-0
          z-20
          h-px
          bg-linear-to-r
          from-transparent
          via-white/90
          to-transparent
        "
      />

      {/* SOFT LEFT REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12
          h-24
          w-32
          rounded-full
          bg-white/35
          blur-2xl
        "
      />

      <button
        type="button"
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          gap-4

          p-4
          text-left
          text-black

          focus:outline-none

          sm:px-5
          sm:py-5
        "
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}>
        <span
          className={`
            font-title
            text-base
            font-semibold
            leading-relaxed

            transition-colors
            duration-300

            sm:text-lg

            ${
              isOpen
                ? "text-[#04397D]"
                : "text-gray-800 group-hover/faq:text-[#04397D]"
            }
          `}>
          {title}
        </span>

        {/* LIQUID GLASS ARROW */}
        <span
          className={`
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            overflow-hidden
            rounded-full

            border

            shadow-[0_6px_16px_rgba(4,57,125,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]

            backdrop-blur-[18px]
            backdrop-saturate-[190%]

            transition-all
            duration-500

            ${
              isOpen
                ? "rotate-90 border-[#056fcb]/20 bg-[#E9F4FF]/70 text-[#056fcb]"
                : "rotate-0 border-white/70 bg-white/60 text-[#133B79]"
            }
          `}>
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
              from-white
              to-transparent
            "
          />

          <ChevronRight className="relative z-10 h-5 w-5" strokeWidth={2.3} />
        </span>
      </button>

      <div
        ref={contentRef}
        className="
          overflow-hidden
          transition-[max-height]
          duration-500
          ease-in-out
        "
        style={{ maxHeight }}>
        <div className="px-2 pb-2 sm:px-3 sm:pb-3">
          <div
            className="
              relative
              overflow-hidden

              rounded-[16px]

              border
              border-white/22

              px-4
              py-4

              font-desc
              text-sm
              font-medium
              leading-7
              text-white/90

              shadow-[0_10px_24px_rgba(4,40,90,0.16),inset_0_1px_0_rgba(255,255,255,0.18)]

              backdrop-blur-[20px]
              backdrop-saturate-[180%]

              sm:px-5
              sm:text-base
            "
            style={{
              background: [
                "radial-gradient(ellipse 75% 70% at 15% -20%, rgba(255,255,255,0.15) 0%, transparent 65%)",
                "radial-gradient(ellipse 90% 80% at 110% 120%, rgba(84,160,235,0.14) 0%, transparent 70%)",
                "linear-gradient(145deg, rgba(4,57,125,0.94) 0%, rgba(5,78,156,0.90) 55%, rgba(5,111,203,0.86) 100%)",
              ].join(", "),
            }}>
            {/* CONTENT TOP SPECULAR */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-[8%]
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white/35
                to-transparent
              "
            />

            {/* SMOOTH BOTTOM REFRACTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-12
                left-1/2
                h-24
                w-[90%]
                -translate-x-1/2
                rounded-[50%]
                bg-white/[0.055]
                blur-2xl
              "
            />

            <p className="relative z-10">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
