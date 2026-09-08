import Image from "next/image";

const subjects = {
  SD: [
    {
      name: "Matematika",
      icon: "/images/tingkat-pendidikan/matematika.webp",
    },
    {
      name: "IPA",
      icon: "/images/tingkat-pendidikan/ipa.webp",
    },
  ],

  SMP: [
    {
      name: "Matematika",
      icon: "/images/tingkat-pendidikan/matematika.webp",
    },
    {
      name: "IPA",
      icon: "/images/tingkat-pendidikan/ipa.webp",
    },
    {
      name: "IPS",
      icon: "/images/tingkat-pendidikan/ips.webp",
    },
  ],

  SMA: [
    {
      name: "Matematika",
      icon: "/images/tingkat-pendidikan/matematika.webp",
    },
    {
      name: "Fisika",
      icon: "/images/tingkat-pendidikan/fisika.webp",
    },
    {
      name: "Kimia",
      icon: "/images/tingkat-pendidikan/kimia.webp",
    },
    {
      name: "Biologi",
      icon: "/images/tingkat-pendidikan/biologi.webp",
    },
    {
      name: "Informatika",
      icon: "/images/tingkat-pendidikan/informatika.webp",
    },
    {
      name: "Astronomi",
      icon: "/images/tingkat-pendidikan/astronomi.webp",
    },
    {
      name: "Ekonomi",
      icon: "/images/tingkat-pendidikan/ekonomi.webp",
    },
    {
      name: "Kebumian",
      icon: "/images/tingkat-pendidikan/kebumian.webp",
    },
    {
      name: "Geografi",
      icon: "/images/tingkat-pendidikan/geografi.webp",
    },
  ],
};

const SubjectGlassCard = ({
  items,
}: {
  items: {
    name: string;
    icon: string;
  }[];
}) => {
  return (
    <div
      className="
        relative

        my-4
items-center
        flex
        w-full
        flex-col
        justify-center

        overflow-hidden

        rounded-[30px]

        border
        border-white/25

        px-4
        py-5


        backdrop-blur-[20px]
        backdrop-saturate-[185%]

      "
      style={{
        background: [
          "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.035) 35%, transparent 60%)",
          "radial-gradient(circle at 15% -15%, rgba(255,255,255,0.18) 0%, transparent 36%)",
          "radial-gradient(circle at 100% 100%, rgba(77,163,255,0.25) 0%, transparent 40%)",
          "linear-gradient(155deg, #04397D 0%, #074D99 52%, #056fcb 100%)",
        ].join(", "),
      }}>
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
          via-white/80
          to-transparent
        "
      />

      {/* WHITE REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-12
          -top-12

          h-28
          w-36

          rounded-full

          bg-white/10
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

          h-28
          w-36

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

          rounded-[29px]

          border
          border-white/[0.08]
        "
      />

      <div className="relative z-10 space-y-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="
              group/item

              flex
              items-center
              gap-4

              rounded-[18px]

              border
              border-transparent

              px-3
              py-2

              transition-all
              duration-300

              hover:border-white/15
              hover:bg-white/[0.08]
            ">
            <div
              className="
                relative

                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                overflow-hidden

                rounded-[16px]

                border
                border-white/20

                bg-white/10

                shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]

                backdrop-blur-xl

                transition-transform
                duration-300

                group-hover/item:scale-105
              ">
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[15%]
                  right-[15%]
                  top-0

                  h-[38%]

                  rounded-b-full

                  bg-linear-to-b
                  from-white/30
                  to-transparent
                "
              />

              <Image
                loading="lazy"
                src={item.icon}
                alt={item.name}
                className="relative z-10 h-9 w-9 object-contain"
                width={100}
                height={100}
              />
            </div>

            <p
              className="
                font-desc
                text-xl
                font-semibold
                text-white

                sm:text-[22px]
              ">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const detailContent = {
  SD: <SubjectGlassCard items={subjects.SD} />,
  SMP: <SubjectGlassCard items={subjects.SMP} />,
  SMA: <SubjectGlassCard items={subjects.SMA} />,
};

export default detailContent;
