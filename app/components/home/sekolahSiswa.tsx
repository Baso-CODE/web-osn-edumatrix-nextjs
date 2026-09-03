import { getDataAsalSekolahDummy } from "@/app/lib/getDummyDataRequest/getAsalSekolahSiswaDummy.request";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default async function SekolahSiswa() {
  const images = await getDataAsalSekolahDummy();

  if (!images || images.length === 0) return null;

  return (
    <section className="bg-[#04397D] w-full flex justify-center items-center py-10 overflow-hidden">
      <div className="w-full max-w-310">
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover={true}
          gradient={false}
          className="flex items-center overflow-y-hidden py-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="mx-4 md:mx-6 transition-transform duration-300 hover:scale-105 cursor-pointer">
              <Image
                src={image.foto_sekolah}
                alt={image.nama_sekolah || "Asal Sekolah Siswa"}
                width={300}
                height={200}
                className="w-[200px] h-[52vh] md:w-[16vw] md:h-[72vh] object-fill rounded-xl shadow-lg border border-white/20 bg-white/5"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
