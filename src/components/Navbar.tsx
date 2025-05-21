import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow fixed top-0 left-0 z-50">
      {/* 좌측: 텍스트 */}
      <Link href="/" className="flex flex-col justify-center items-start min-w-[120px]">
        <span className="font-bold text-base md:text-xl">오사카공립대학</span>
        <span className="font-bold text-sm md:text-lg">한국인유학생회</span>
      </Link>
      {/* 중앙: 학교 로고 */}
      <Link href="/" className="flex-shrink-0 flex justify-center items-center">
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={96}
          height={96}
          className="w-[72px] h-[72px] md:w-[96px] md:h-[96px]"
          style={{
            minWidth: "72px",
            minHeight: "72px",
            objectFit: "contain",
          }}
          priority
        />
      </Link>
      {/* 우측: 메뉴 */}
      <div className="flex gap-6 min-w-[180px] justify-end">
        <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
        <Link href="/activity" className="hover:text-blue-600 font-medium">Activity</Link>
        <Link href="/information" className="hover:text-blue-600 font-medium">Information</Link>
        <Link href="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
      </div>
    </nav>
  );
}


