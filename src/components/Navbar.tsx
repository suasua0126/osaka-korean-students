import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-2 bg-white shadow fixed top-0 left-0 z-50 h-20 md:h-28">
      {/* 좌측: 텍스트 (홈으로) */}
      <Link href="/" className="flex flex-col items-start min-w-[120px] z-20">
        <span className="font-bold text-base md:text-xl">오사카공립대학</span>
        <span className="font-bold text-sm md:text-lg">한국인유학생회</span>
      </Link>
      {/* 중앙: 학교 로고 (엄청 크게!) */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
        style={{ height: "100%" }}
      >
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={128}
          height={128}
          className="w-20 h-20 md:w-32 md:h-32"
          style={{
            minWidth: "80px",
            minHeight: "80px",
            objectFit: "contain",
          }}
          priority
        />
      </Link>
      {/* PC 메뉴 */}
      <div className="hidden md:flex gap-8 min-w-[180px] justify-end z-20">
        <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
        <Link href="/activity" className="hover:text-blue-600 font-medium">Activity</Link>
        <Link href="/information" className="hover:text-blue-600 font-medium">Information</Link>
        <Link href="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
      </div>
      {/* 모바일 햄버거 */}
      <button
        className="md:hidden ml-2 z-20"
        onClick={() => setOpen(!open)}
        aria-label="메뉴 열기"
      >
        <div className="w-8 h-8 flex flex-col justify-center items-center">
          <span className="block w-6 h-1 bg-gray-800 rounded my-1"></span>
          <span className="block w-6 h-1 bg-gray-800 rounded my-1"></span>
          <span className="block w-6 h-1 bg-gray-800 rounded my-1"></span>
        </div>
      </button>
      {/* 모바일 메뉴 오버레이 */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex flex-col">
          <div className="bg-white shadow-md flex flex-col gap-8 py-12 px-8 w-4/5 max-w-xs h-full">
            <button className="self-end mb-8" onClick={() => setOpen(false)}>
              <span className="text-2xl">✕</span>
            </button>
            <Link href="/about" className="text-xl font-bold hover:text-blue-600" onClick={() => setOpen(false)}>About</Link>
            <Link href="/activity" className="text-xl font-bold hover:text-blue-600" onClick={() => setOpen(false)}>Activity</Link>
            <Link href="/information" className="text-xl font-bold hover:text-blue-600" onClick={() => setOpen(false)}>Information</Link>
            <Link href="/contact" className="text-xl font-bold hover:text-blue-600" onClick={() => setOpen(false)}>Contact</Link>
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}




