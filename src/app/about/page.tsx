import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">오사카공립대학 한국인 유학생회는 다양한 형태의 교류를 기반으로 유학생들이 낯선 일본생활에서 서로가 의지하며 잘 지낼 수 있도록 지원하기 위해 2024년에 설립되었습니다.</h2>
        <div className="mt-4 text-gray-700 text-sm leading-relaxed">
          <div className="mb-2 font-semibold">교류 협정을 맺은 한국의 대학교:</div>
          <ul className="list-disc ml-5">
            <li>강원대학교 건국대학교 경북대학교 경희대학교 금오공과대학교 대구대학교</li>
            <li>부산대학교 삼육대학교 서울대학교 서울시립대학교 연세대학교 인천대학교</li>
            <li>전북대학교 전남대학교 중앙대학교 제주대학교 한국과학기술원 한국외국어대학교</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 max-w-xs w-full">
        <Image src="/school-image.jpg" alt="학교 사진" width={400} height={400} className="rounded-lg shadow" />
      </div>
    </div>
  )
}
