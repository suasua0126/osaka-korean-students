import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-white shadow fixed top-0 left-0 z-50">
      <Link href="/" className="flex items-center gap-2 md:gap-4 mb-2 md:mb-0">
        {/* === 여기 아래 코드만 바꿔주면 됩니다! === */}
        <Image
          src="/omulogo.png"
          alt="OMU Logo"
          width={100}
          height={100}
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
          style={{
            minWidth: "40px",
            minHeight: "40px",
            width: "60px",
            height: "60px",
            objectFit: "contain"
          }}
          priority
        />
        {/* === 여기까지 === */}
        <div className="flex flex-col md:flex-row items-center">
  <span className="font-bold text-base md:text-xl">오사카공립대학</span>
  <span className="font-bold text-sm md:text-lg">한국인유학생회</span>
</div>

      </Link>
      {/* ...아래는 네비게이션 메뉴... */}
    </nav>
  );
}

