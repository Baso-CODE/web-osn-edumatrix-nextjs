"use client";

import { schools } from "@/app/components/data/school";
import { useMemo, useState } from "react";

export default function AsalSekolahSiswaEdumatrix() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter daftar sekolah berdasarkan input pencarian
  const filteredSchools = useMemo(() => {
    return schools.filter((school) =>
      school.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <section className="w-full bg-[#04397D] text-white flex flex-col items-center py-20 px-4">
      <div className="flex flex-col max-w-310 w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-[#faae17] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 backdrop-blur-sm">
            Jaringan Siswa Berprestasi
          </span>
          <h2 className="text-[28px] sm:text-[35px] lg:text-[37px] text-white font-bold font-title mb-3">
            Asal Sekolah Siswa Edumatrix
          </h2>
          <p className="text-white/80 font-desc text-sm md:text-base max-w-2xl mx-auto">
            Ribuan siswa dari berbagai sekolah unggulan di seluruh Indonesia
            telah mempercayakan bimbingan belajar bersama Edumatrix.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="mb-6 max-w-md w-full mx-auto">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari nama sekolah kamu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white text-neutral-800 placeholder-neutral-400 text-sm font-medium rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#faae17] transition-all"
            />
          </div>
        </div>

        {/* Schools List Container */}
        <div className="bg-white/95 backdrop-blur-md text-[#676767] rounded-2xl overflow-y-auto max-h-[480px] p-6 shadow-2xl custom-scrollbar border border-white/20">
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSchools.map((school, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 hover:border-[#04397D]/40 hover:bg-blue-50/50 transition-all duration-200 shadow-xs">
                  <span className="w-2 h-2 bg-[#003b6d] rounded-full shrink-0 group-hover:scale-125 group-hover:bg-[#faae17] transition-all"></span>
                  <span className="text-xs md:text-sm font-medium font-desc text-neutral-700 group-hover:text-[#04397D] truncate">
                    {school}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-neutral-500 font-desc">
              <p className="text-base font-semibold">Sekolah tidak ditemukan</p>
              <p className="text-xs mt-1 text-neutral-400">
                Coba gunakan kata kunci nama sekolah yang lain.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
