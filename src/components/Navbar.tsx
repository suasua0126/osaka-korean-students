import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-4 py-2 bg-white shadow fixed top-0 left-0 z-50">
            <Link href="/" className="flex items-center gap-2">
                {/* 로고 크기 조절: w-14 h-14로 키움 */}
                <Image
                    src="/omulogo.png"
                    alt="OMU Logo"
                    width={56} // w-14 = 56px
                    height={56}
                    className="w-14 h-14 object-contain"
                    priority
                />
                <div className="flex flex-col leading-tight">
                    <span className="font-bold text-[18px] md:text-[22px] tracking-tight" style={{ fontSize: "1.125rem" }}>
                        {/* 4.5 */}
                        오사카공립대학
                    </span>
                    <span className="font-bold text-[22px] md:text-[27px] text-primary" style={{ fontSize: "1.375rem" }}>
                        {/* 5.5 */}
                        한국인유학생회
                    </span>
                </div>
            </Link>
            {/* ...우측 네비게이션 메뉴(About/Activity/Information/Contact 등)... */}
        </nav>
    );
}

