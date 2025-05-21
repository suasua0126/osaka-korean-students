// src/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 bg-white shadow fixed top-0 left-0 z-50">
      {/* 로고 & 타이틀 */}
      <Link href="/" className="flex items-center gap-4">
        {/* 더 크게: w-16 h-16 (64px), 필요하면 더 늘려도 됨 */}
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
          priority
        />
        <div className="flex flex-col leading-tight">
          <span className="font-bold" style={{ fontSize: "1.08rem" }}>오사카공립대학</span>
          <span className="font-bold" style={{ fontSize: "1.32rem" }}>한국인유학생회</span>
        </div>
      </Link>
      {/* 네비게이션 메뉴 */}
      <div className="flex gap-6 items-center">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/activity" className="hover:underline">Activity</Link>
        <Link href="/information" className="hover:underline">Information</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}

