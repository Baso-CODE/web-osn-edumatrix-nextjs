import { getDataFaqDummy } from "@/app/lib/getDummyDataRequest/getFaqDummy.request";
import { AccordionFAQ } from "./AccordionFAQ";

export default async function Accordion() {
  const dataFaq = await getDataFaqDummy();

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white px-2 pt-10">
        {/* SOFT AMBIENT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-44
            top-[8%]
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
            -right-44
            bottom-[5%]
            h-96
            w-96
            rounded-full
            bg-[#FAAE17]/6
            blur-3xl
          "
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-310 flex-col items-center md:min-h-[60vh] xl:min-h-screen">
          <div className="mt-8 w-full">
            {/* HEADER */}
            <div className="mb-8 text-center md:mb-10">
              <div className="mb-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />

                <span className="font-desc text-xs font-bold uppercase tracking-[0.16em] text-[#056fcb] sm:text-sm">
                  Informasi
                </span>

                <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />
              </div>

              <h2 className="font-title text-2xl font-bold text-[#133B79] md:text-3xl lg:text-4xl">
                Frequently Ask Question
              </h2>
            </div>

            {/* LIQUID GLASS FAQ WRAPPER */}
            <div
              className="
                relative
                w-full
                overflow-hidden

                rounded-[30px]

                border
                border-white/75

                bg-white/55

                p-2

                shadow-[0_20px_50px_rgba(4,57,125,0.10),0_4px_14px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)]

                backdrop-blur-[26px]
                backdrop-saturate-[190%]

                sm:p-3
              "
              style={{
                background: [
                  "radial-gradient(ellipse 85% 50% at 18% -10%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.55) 38%, transparent 72%)",
                  "radial-gradient(ellipse 90% 60% at 105% 110%, rgba(190,220,255,0.18) 0%, rgba(225,240,255,0.08) 50%, transparent 76%)",
                  "linear-gradient(145deg, rgba(255,255,255,0.74) 0%, rgba(248,252,255,0.58) 55%, rgba(238,247,255,0.52) 100%)",
                ].join(", "),
              }}>
              {/* TOP SPECULAR */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[8%]
                  top-0
                  z-20
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
                  -left-20
                  -top-24
                  h-48
                  w-64
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
                  -bottom-20
                  left-1/2
                  h-40
                  w-[85%]
                  -translate-x-1/2
                  rounded-[50%]
                  bg-[#CFE7FF]/16
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
                  rounded-[29px]
                  border
                  border-white/50
                "
              />

              <div className="relative z-10 space-y-2">
                {dataFaq.map((item) => (
                  <AccordionFAQ
                    key={item.id}
                    title={item.pertanyaan}
                    content={item.jawaban}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="-mb-px bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#04397d"
            fillOpacity="1"
            d="M0,96L34.3,112C68.6,128,137,160,206,149.3C274.3,139,343,85,411,106.7C480,128,549,224,617,229.3C685.7,235,754,149,823,138.7C891.4,128,960,192,1029,208C1097.1,224,1166,192,1234,181.3C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          />
        </svg>
      </div>
    </>
  );
}
