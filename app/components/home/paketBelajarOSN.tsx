import { dummyContactCsData } from "../data/contactCs.dummyData";
import PaketBelajarOSNClient from "./paketBelajarOSNClient";

const PaketBelajarOSN = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        md:py-24
      ">
      {/* BACKGROUND AMBIENT */}
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
          bg-[#4DA3FF]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-44
          top-[35%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-[35%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#056fcb]/6
          blur-3xl
        "
      />

      <div className="relative z-10 container mx-auto px-2 lg:px-0">
        <div className="w-full">
          {/* HEADER */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />

              <span className="font-desc text-xs font-bold tracking-[0.18em] text-[#056fcb] uppercase sm:text-sm">
                Paket Belajar OSN
              </span>

              <span className="h-px w-8 bg-[#FAAE17]/60 sm:w-12" />
            </div>

            <h2
              className="
                font-title
                text-3xl
                font-extrabold
                leading-tight
                text-[#133b79]

                md:text-4xl
              ">
              Paket Bimbingan Hingga{" "}
              <span className="text-[#FAAE17]">Jadi Juara</span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-3xl

                font-desc
                text-sm
                leading-7
                text-gray-600

                md:text-base
                lg:text-lg
              ">
              Pilih program terbaik sesuai kebutuhanmu. Mulai dari bimbingan
              intensif hingga tryout rutin — semua dirancang untuk bantu kamu{" "}
              <span className="font-semibold text-[#133b79]">
                Menjadi Juara OSN
              </span>{" "}
              baik tingkat SD, SMP & SMA.
            </p>
          </div>

          <PaketBelajarOSNClient contacts={dummyContactCsData} />
        </div>
      </div>
    </section>
  );
};

export default PaketBelajarOSN;
