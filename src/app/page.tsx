import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[50vh] min-h-[320px]">
        <Image
          src="/school-image.jpg"
          alt="Osaka Metropolitan University"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-b-xl"
        />
      </div>
      <section className="max-w-2xl mx-auto mt-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-2">오사카공립대학의 한국인 재학생과 예비 입학생을 위한 사이트입니다</h1>
        <p className="text-base text-gray-700 mb-8">
          오사카공립대학(Osaka Metropolitan University, OMU)은 2022년 오사카시립대학과 오사카부립대학의 통합으로 탄생한 일본 최대규모의 공립대학입니다. 다양한 학부와 첨단 연구 시설을 갖추고 있으며, 국제 교류와 지역사회 연계에도 적극적으로 참여하고 있습니다. 오사카 중심부에 위치해 학생들이 활기찬 도시 생활과 함께 우수한 교육·연구 환경을 경험할 수 있는 것이 큰 특징입니다.
        </p>
      </section>
    </div>
  )
}
