"use client";

import { getDataTestimoniDummy } from "@/app/lib/getDummyDataRequest/getTestimoniDummy.request";
import { SuccessStory } from "@/app/types/successStory.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimoniGrid() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataTestimoniDummy();
      setStories(data);
    }

    fetchData();
  }, []);

  if (stories.length === 0) return null;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-linear-to-r
        from-[#04397d]
        to-[#023ea9]
        py-10
        sm:py-14
      ">
      {/* SOFT AMBIENT */}
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
          bg-white/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[10%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-310 px-2">
        {/* HEADER */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="font-title text-3xl font-extrabold text-white sm:text-4xl">
            Bukti Nyata,{" "}
            <span className="text-[#FAAE17]">Bukan Sekadar Janji</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-desc text-base leading-7 text-white/85 sm:text-lg">
            Alumni kami telah berhasil menembus berbagai kompetisi bergengsi.
            Sekarang giliran kamu untuk menjadi bagian dari kisah sukses
            berikutnya.
          </p>
        </div>

        {/* LIQUID GLASS WRAPPER */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]

            border
            border-white/14

            bg-white/[0.05]

            p-2.5

            shadow-[0_18px_46px_rgba(0,20,55,0.18),inset_0_1px_0_rgba(255,255,255,0.16)]

            backdrop-blur-[22px]
            backdrop-saturate-[175%]

            sm:p-4
          ">
          {/* TOP SPECULAR */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              top-0
              z-30
              h-px
              bg-linear-to-r
              from-transparent
              via-white/45
              to-transparent
            "
          />

          {/* SOFT TOP REFLECTION */}
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
              bg-white/[0.045]
              blur-3xl
            "
          />

          {/* SOFT BOTTOM REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-1/2
              h-44
              w-[70%]
              -translate-x-1/2
              rounded-full
              bg-white/[0.035]
              blur-3xl
            "
          />

          {/* GRID */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              sm:gap-4
            ">
            {stories.slice(0, visibleCount).map((story) => (
              <div
                key={story.id}
                className="
                  group/card
                  relative
                  w-full

                  overflow-hidden
                  rounded-[22px]

                  border
                  border-white/16

                  bg-white/[0.06]

                  p-1.5

                  shadow-[0_10px_26px_rgba(0,18,50,0.14),inset_0_1px_0_rgba(255,255,255,0.16)]

                  backdrop-blur-[16px]
                  backdrop-saturate-[170%]

                  transition-all
                  duration-500
                  ease-out

                  hover:-translate-y-1
                  hover:scale-[1.01]
                  hover:border-white/26
                  hover:bg-white/[0.08]

                  hover:shadow-[0_16px_34px_rgba(0,18,50,0.18),inset_0_1px_0_rgba(255,255,255,0.22)]
                ">
                {/* CARD TOP SPECULAR */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[12%]
                    top-0
                    z-20
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
                    -left-14
                    -top-12
                    z-20
                    h-28
                    w-32
                    rounded-full
                    bg-white/[0.055]
                    blur-2xl
                  "
                />

                {/* IMAGE */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-white/8
                  ">
                  <Image
                    src={story.image || "-"}
                    alt={story.participantName}
                    width={600}
                    height={600}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700
                      ease-out

                      group-hover/card:scale-[1.025]
                    "
                  />

                  {/* SMOOTH BOTTOM FADE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-[25%]
                      bg-linear-to-t
                      from-black/10
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* GLASS SHINE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[45%]
                      -top-[30%]

                      h-[65%]
                      w-[40%]

                      rotate-[-20deg]

                      bg-white/9
                      blur-2xl

                      transition-all
                      duration-700

                      group-hover/card:left-[110%]
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        {visibleCount < stories.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleShowMore}
              className="
                group/button
                relative

                inline-flex
                items-center
                justify-center

                overflow-hidden
                rounded-full

                border
                border-white/28

                px-6
                py-3

                font-title
                font-semibold
                text-white

                shadow-[0_10px_26px_rgba(0,18,50,0.18),inset_0_1px_0_rgba(255,255,255,0.24)]

                backdrop-blur-[18px]
                backdrop-saturate-[180%]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:scale-[1.02]
                hover:border-white/40
              "
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.035) 100%)",
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
                  h-[45%]
                  rounded-b-full
                  bg-linear-to-b
                  from-white/30
                  to-transparent
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
                  group-hover/button:left-[125%]
                "
              />

              <span className="relative z-10">Tampilkan Lebih Banyak</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
