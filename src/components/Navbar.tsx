'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow flex items-center px-8 h-20 justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/omulogo.png" alt="학교 로고" width={56} height={56} />
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xl">오사카공립대학</span>
          <span className="font-bold text-base text-gray-600">한국인 유학생회</span>
        </div>
      </Link>
      <div className="flex-1" />
      <div className="flex gap-8">
        <Link href="/about" className="hover:text-blue-600">About</Link>
        <Link href="/activity" className="hover:text-blue-600">Activity</Link>
        <Link href="/information" className="hover:text-blue-600">Information</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  )
}
