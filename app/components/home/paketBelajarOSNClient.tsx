"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface Props {
  contacts: ContactCs[];
}

const ultimateFeatures = [
  "Program pendampingan belajar 1 guru 1 Siswa",
  "Jadwal belajar fleksibel",
  "Durasi belajar 120 menit",
  "Materi lengkap",
  "Kecocokan belajar antara tutor & siswa",
  "Progress report bulanan",
  "Free assessment (Pre Test dan Post Test)",
  "E-book soal & e-book pembahasan",
  "Recording pembelajaran yang bisa diakses unlimited",
];

const championFeatures = [
  "Program pendampingan belajar 1 guru 1 Siswa",
  "Jadwal belajar fleksibel",
  "Durasi belajar 90 menit",
  "Materi lengkap",
  "Kecocokan belajar antara tutor & siswa",
  "Progress report bulanan",
  "Free assessment (Pre Test dan Post Test)",
  "E-book soal & e-book pembahasan",
  "Recording pembelajaran yang bisa diakses unlimited",
];

export default function PaketBelajarOSNClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "paket_belajar_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;

  const activeContact = activeCs[0];

  const waLinkPriority = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://bimbeledumatrix.com saya ingin Daftar Paket ULTIMATE MASTERY Bimbel OSN. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://bimbeledumatrix.com saya ingin Daftar Paket CHAMPION SERIES Bimbel OSN. Bagaimana penjelasan detail programnya?`,
  )}`;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();

    rotateCs();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {/* =====================================================
          ULTIMATE MASTERY
      ===================================================== */}
      <div
        className="
          group/card
          relative

          flex
          flex-col

          overflow-hidden
          rounded-[30px]

          border
          border-[#04397D]/10

          bg-white/74

          p-3

          shadow-[0_20px_50px_rgba(4,57,125,0.14),0_5px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]

          backdrop-blur-[24px]
          backdrop-saturate-[190%]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1
          hover:shadow-[0_28px_65px_rgba(4,57,125,0.19),0_8px_20px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,1)]
        ">
        {/* CARD TOP SPECULAR */}
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
            via-white
            to-transparent
          "
        />

        {/* CARD BLUE REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-16
            -right-10
            h-40
            w-52
            rounded-full
            bg-[#4DA3FF]/10
            blur-3xl
          "
        />

        {/* HEADER */}
        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]

            border
            border-white/25

            px-5
            py-8

            text-white

            shadow-[0_14px_32px_rgba(0,30,80,0.25),inset_0_1px_0_rgba(255,255,255,0.30)]

            backdrop-blur-[18px]
            backdrop-saturate-[180%]
          "
          style={{
            background: [
              "linear-gradient(145deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.04) 36%, transparent 60%)",
              "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.20) 0%, transparent 36%)",
              "radial-gradient(circle at 100% 100%, rgba(77,163,255,0.28) 0%, transparent 40%)",
              "linear-gradient(155deg, #00317e 0%, #044c9f 52%, #056fcb 100%)",
            ].join(", "),
          }}>
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
              via-white/90
              to-transparent
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-10
              -top-14
              h-28
              w-36
              rounded-full
              bg-white/12
              blur-2xl
            "
          />

          <h2
            className="
              relative
              z-10
              text-center
              font-title
              text-2xl
              font-extrabold
              leading-tight
              md:text-3xl
            ">
            ULTIMATE MASTERY
          </h2>

          <p className="relative z-10 mt-2 text-center font-desc text-xs font-medium text-white/80">
            Pendampingan belajar lebih intensif
          </p>
        </div>

        {/* FEATURE LIST */}
        <div className="relative z-10 flex grow flex-col px-2 pb-2 pt-6 sm:px-3">
          <ul className="grow space-y-3 font-desc">
            {ultimateFeatures.map((item, i) => (
              <li
                key={i}
                className="
                  group/item
                  flex
                  items-start
                  gap-3

                  rounded-[16px]

                  border
                  border-transparent

                  px-2
                  py-1.5

                  text-sm
                  font-medium
                  leading-6
                  text-gray-700

                  transition-all
                  duration-300

                  hover:border-[#056fcb]/8
                  hover:bg-[#056fcb]/[0.035]

                  sm:text-base
                ">
                <span
                  className="
                    mt-0.5
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-green-500/20

                    bg-green-500/10

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]

                    transition-transform
                    duration-300

                    group-hover/item:scale-110
                  ">
                  <FaCheck className="text-[11px] text-green-500" />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={waLinkPriority}
            onClick={(e) => handleClick(e, waLinkPriority)}
            target="_blank"
            aria-label="Tanya kelas melalui WhatsApp (membuka di tab baru)"
            rel="noopener noreferrer"
            className="
              group/cta
              relative

              mt-6

              flex
              min-h-14
              items-center
              justify-center

              overflow-hidden
              rounded-full

              border
              border-white/30

              px-5
              py-3

              text-white

              shadow-[0_12px_30px_rgba(205,125,0,0.22),inset_0_1px_0_rgba(255,255,255,0.40)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_16px_38px_rgba(205,125,0,0.28),inset_0_1px_0_rgba(255,255,255,0.50)]
            "
            style={{
              background: [
                "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 65%)",
                "linear-gradient(135deg, #FAAE17 0%, #F6A300 52%, #E68D00 100%)",
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
                from-white/45
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[55%]
                top-0
                h-full
                w-[35%]
                skew-x-[-22deg]
                bg-linear-to-r
                from-transparent
                via-white/35
                to-transparent
                transition-all
                duration-700
                group-hover/cta:left-[125%]
              "
            />

            <span
              className="
                relative
                z-10

                flex
                items-center
                gap-2

                text-center
                font-title
                text-xs
                font-bold
                uppercase

                sm:text-sm
              ">
              <span>💬</span>
              Tanya Kelas ({activeContact.nama_cs})
            </span>

            <span
              className="
                absolute
                right-1.5

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-[#04397D]

                shadow-[0_6px_16px_rgba(0,30,80,0.25),inset_0_1px_0_rgba(255,255,255,0.22)]

                transition-all
                duration-500

                group-hover/cta:w-[calc(100%-12px)]
              ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  absolute
                  right-3
                  h-5
                  w-5
                  rotate-180
                  text-white

                  transition-transform
                  duration-300

                  group-hover/cta:-translate-x-0.5
                ">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          CHAMPION SERIES
      ===================================================== */}
      <div
        className="
          group/card
          relative

          flex
          flex-col

          overflow-hidden
          rounded-[30px]

          border
          border-[#04397D]/10

          bg-white/74

          p-3

          shadow-[0_20px_50px_rgba(4,57,125,0.14),0_5px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]

          backdrop-blur-[24px]
          backdrop-saturate-[190%]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1
          hover:shadow-[0_28px_65px_rgba(4,57,125,0.19),0_8px_20px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,1)]
        ">
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
            via-white
            to-transparent
          "
        />

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-16
            -left-10
            h-40
            w-52
            rounded-full
            bg-[#FAAE17]/8
            blur-3xl
          "
        />

        {/* HEADER */}
        <div
          className="
            relative
            overflow-hidden

            rounded-[24px]

            border
            border-white/25

            px-5
            py-8

            text-white

            shadow-[0_14px_32px_rgba(0,30,80,0.25),inset_0_1px_0_rgba(255,255,255,0.30)]

            backdrop-blur-[18px]
            backdrop-saturate-[180%]
          "
          style={{
            background: [
              "linear-gradient(145deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.04) 36%, transparent 60%)",
              "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.20) 0%, transparent 36%)",
              "radial-gradient(circle at 100% 100%, rgba(77,163,255,0.28) 0%, transparent 40%)",
              "linear-gradient(155deg, #00317e 0%, #044c9f 52%, #056fcb 100%)",
            ].join(", "),
          }}>
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
              via-white/90
              to-transparent
            "
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-14
              h-28
              w-36
              rounded-full
              bg-white/12
              blur-2xl
            "
          />

          <h2
            className="
              relative
              z-10
              text-center
              font-title
              text-2xl
              font-extrabold
              leading-tight
              md:text-3xl
            ">
            CHAMPION SERIES
          </h2>

          <p className="relative z-10 mt-2 text-center font-desc text-xs font-medium text-white/80">
            Program fleksibel untuk persiapan juara
          </p>
        </div>

        {/* FEATURE LIST */}
        <div className="relative z-10 flex grow flex-col px-2 pb-2 pt-6 sm:px-3">
          <ul className="grow space-y-3 font-desc">
            {championFeatures.map((item, i) => (
              <li
                key={i}
                className="
                  group/item
                  flex
                  items-start
                  gap-3

                  rounded-[16px]

                  border
                  border-transparent

                  px-2
                  py-1.5

                  text-sm
                  font-medium
                  leading-6
                  text-gray-700

                  transition-all
                  duration-300

                  hover:border-[#056fcb]/8
                  hover:bg-[#056fcb]/[0.035]

                  sm:text-base
                ">
                <span
                  className="
                    mt-0.5
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-green-500/20

                    bg-green-500/10

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]

                    transition-transform
                    duration-300

                    group-hover/item:scale-110
                  ">
                  <FaCheck className="text-[11px] text-green-500" />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={waLinkDeluxe}
            onClick={(e) => handleClick(e, waLinkDeluxe)}
            target="_blank"
            aria-label="Tanya kelas melalui WhatsApp (membuka di tab baru)"
            rel="noopener noreferrer"
            className="
              group/cta
              relative

              mt-6

              flex
              min-h-14
              items-center
              justify-center

              overflow-hidden
              rounded-full

              border
              border-white/30

              px-5
              py-3

              text-white

              shadow-[0_12px_30px_rgba(205,125,0,0.22),inset_0_1px_0_rgba(255,255,255,0.40)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-[0_16px_38px_rgba(205,125,0,0.28),inset_0_1px_0_rgba(255,255,255,0.50)]
            "
            style={{
              background: [
                "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 65%)",
                "linear-gradient(135deg, #FAAE17 0%, #F6A300 52%, #E68D00 100%)",
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
                from-white/45
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[55%]
                top-0
                h-full
                w-[35%]
                skew-x-[-22deg]
                bg-linear-to-r
                from-transparent
                via-white/35
                to-transparent
                transition-all
                duration-700
                group-hover/cta:left-[125%]
              "
            />

            <span
              className="
                relative
                z-10

                flex
                items-center
                gap-2

                text-center
                font-title
                text-xs
                font-bold
                uppercase

                sm:text-sm
              ">
              <span>💬</span>
              Tanya Kelas ({activeContact.nama_cs})
            </span>

            <span
              className="
                absolute
                left-1.5

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-[#04397D]

                shadow-[0_6px_16px_rgba(0,30,80,0.25),inset_0_1px_0_rgba(255,255,255,0.22)]

                transition-all
                duration-500

                group-hover/cta:w-[calc(100%-12px)]
              ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  absolute
                  left-3
                  h-5
                  w-5
                  text-white

                  transition-transform
                  duration-300

                  group-hover/cta:translate-x-0.5
                ">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
