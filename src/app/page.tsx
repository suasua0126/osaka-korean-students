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
          한국인 재학생과 예비 입학생을 위한 사이트입니다.

오사카공립대학은 오사카부립대학과 오사카시립대학이 통합되어 2022년에 새롭게 출범한 국공립 종합대학입니다. 
다양한 학부와 첨단 연구 시설을 갖추고 있으며, 국제 교류와 지역사회 연계에도 적극적으로 참여하고 있습니다. 
오사카 중심부에 위치해 학생들이 활기찬 도시 생활과 함께 
우수한 교육·연구 환경을 경험할 수 있는 것이 큰 특징입니다.`}
        </p>
      </div>
    </main>
  );
}
