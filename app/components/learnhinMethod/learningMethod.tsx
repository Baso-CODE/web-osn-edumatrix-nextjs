import classNames from "classnames";
import { cardsLearningMethod } from "../data/learningMethods";
import { TiltCard } from "./tiltCard";

const LearningMethod = async () => {
  return (
    <section className="mt-12 flex items-center justify-center bg-white">
      <div className="w-full max-w-310 px-4 sm:px-6">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="mb-8 font-title text-[32px] font-bold text-[#133B79] md:text-[48px] lg:text-[64px]"
              data-aos="fade-down">
              Learning Method
            </h2>

            <div className="flex justify-center" data-aos="fade-up">
              <p className="mx-auto mb-8 max-w-3xl text-center font-desc text-base font-bold leading-7 text-[#131a7999] sm:text-lg">
                Metode Belajar yang digunakan yaitu personal one on one (1 siswa
                1 mentor) dan juga tersedia Small Class. Program belajar
                didesain secara sistematis, terstruktur, terukur dan teruji.
                Pembelajaran Tematik berdasar Statistik Soal yang diujikan.
                Fokus menerapkan Pola Sukses yang sudah proven. Pastikan pilih
                partner terbaik untuk kesuksesan dan masa depanmu, EDUMATRIX
                Indonesia!
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {cardsLearningMethod.map((card, index) => {
                const animation = classNames({
                  "fade-right": index < 2,
                  "fade-left": index >= 2,
                });

                const delay = index === 0 || index === 3 ? 700 : 0;

                return (
                  <div
                    key={index}
                    data-aos={animation}
                    data-aos-delay={delay}
                    className="h-full">
                    <TiltCard
                      img={card.img}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;
