import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-2 bg-white shadow fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-4">
        {/* 여기! width, height 둘 다 80px(원하는 크기로)로 변경 + Tailwind 제거 */}
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={80}      // 원하는 크기(px)로 조정 (예: 80)
          height={80}
          style={{
            width: '80px',  // 꼭 이렇게 추가!
            height: '80px',
            objectFit: 'contain', // or 'cover'
          }}
          priority
        />
        <div className="flex flex-col leading-tight">
          <span className="font-bold" style={{ fontSize: "1.08rem" }}>오사카공립대학</span>
          <span className="font-bold" style={{ fontSize: "1.32rem" }}>한국인유학생회</span>
        </div>
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/activity" className="hover:underline">Activity</Link>
        <Link href="/information" className="hover:underline">Information</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}