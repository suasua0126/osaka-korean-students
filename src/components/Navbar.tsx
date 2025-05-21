import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white shadow fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-2 md:gap-4 mb-2 md:mb-0">
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={40}
          height={40}
          style={{ width: '40px', height: '40px', objectFit: 'contain' }}
          priority
        />
        <div className="flex flex-col md:block leading-tight text-center md:text-left">
          {/* 모바일: 한 줄, PC: 두 줄 */}
          <span className="font-bold text-base md:text-xl">오사카공립대학</span>
          <span className="font-bold text-sm md:text-lg">한국인유학생회</span>
        </div>
      </Link>
      {/* 메뉴는 모바일에서 세로 정렬, PC에서는 가로 정렬 */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/activity" className="hover:underline">Activity</Link>
        <Link href="/information" className="hover:underline">Information</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}
