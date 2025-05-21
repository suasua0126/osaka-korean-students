// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-20 w-full min-h-screen flex flex-col items-center bg-white">
      {/* 학교 메인 이미지 */}
      <div className="w-full max-w-3xl">
        <Image
          src="/school-image.jpg"
          alt="오사카공립대학"
          width={1200}
          height={500}
          className="w-full h-auto object-cover rounded-xl shadow mb-8"
          priority
        />
      </div>
      {/* 인삿말(줄바꿈 포함) */}
      <div className="w-full max-w-2xl px-4 mb-6 text-center">
        <p className="text-xl font-semibold whitespace-pre-line">
          {`오사카공립대학의 
          재학생과 예비 입학생을 위한 사이트입니다.

오사카공립대학은 오사카부립대학과 오사카시립대학이 통합되어 2022년에 새롭게 출범한 국공립 종합대학입니다. 
다양한 전공과 국제적인 교류, 활기찬 학생 생활을 자랑하며, 오사카의 중심에서 일본과 세계를 연결하는 교육 허브 역할을 하고 있습니다.`}
        </p>
      </div>
    </main>
  );
}
